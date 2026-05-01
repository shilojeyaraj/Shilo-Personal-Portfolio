import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic()

// In-memory rate limiter: 15 messages per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 15
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()

  // Prune stale entries if map grows large
  if (rateLimitMap.size > 500) {
    rateLimitMap.forEach((val, key) => {
      if (val.resetAt < now) rateLimitMap.delete(key)
    })
  }

  const entry = rateLimitMap.get(ip)
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT - 1 }
  }
  if (entry.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 }
  }
  entry.count++
  return { allowed: true, remaining: RATE_LIMIT - entry.count }
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

const SYSTEM_PROMPT = `You are an AI assistant representing Shilo Jeyaraj's portfolio. Answer questions about Shilo concisely and helpfully.

About Shilo:
- Mechatronics Engineering student at the University of Waterloo
- Currently a Machine Learning Research Engineer at Cohere Labs (MAA framework, JitRL, Functional LoRA, LLaMA 3.1 8B, hallucination reduction, 4-bit quantization), an ML Research & Development Engineer at Perceivable Design Studios (ASL/speech translation, PyTorch, MediaPipe), and a Software Engineering Intern at Friedmann AI (AI chatbot, financial planning tools)
- Also a member of the Waterloo Aerial Robotics Group (WARG) autonomy team, working on drone navigation and computer vision

Key skills:
- Languages: Python, TypeScript, JavaScript, SQL, Java, C/C++
- Frameworks: React, Next.js, Node.js, FastAPI, Flask, TensorFlow, PyTorch
- AI/ML: OpenAI, LangChain, Gemini, Claude, Vertex AI, pgvector, MediaPipe, Whisper
- Cloud: GCP (Vertex AI, BigQuery, Cloud Run), AWS, Docker, Supabase, PostgreSQL
- Hardware: AutoCAD, SolidWorks, PCB design (from mechatronics background)

Selected projects:
- Proof: Chrome extension for real-time Polymarket intelligence (2nd place NexHacks 2026 @ CMU). React, TypeScript, FastAPI, Supabase.
- Dermalens: AI skincare analysis platform with Gemini API, Elasticsearch, GCP. Live at dermalens.vercel.app.
- Coursely: Waterloo elective advisor with RAG, GPT-4o-mini, pgvector across 284+ courses. Live at uwaterloo-course-chats.vercel.app.
- Brain Battle: Real-time multiplayer quizzing platform with WebSockets. Live at brain-battle.app.
- Mid Chats: AI chat app with study mode and resume building. Live at shilo-chat.vercel.app.

Contact:
- Email: stjeyara@uwaterloo.ca
- LinkedIn: linkedin.com/in/shilo-jeyaraj
- GitHub: github.com/shilojeyaraj

Keep answers friendly, brief (2-4 sentences), and specific. If asked something you don't know, suggest the visitor reach out directly.`

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  const { allowed, remaining } = checkRateLimit(ip)

  if (!allowed) {
    return new Response(
      JSON.stringify({ error: 'Rate limit reached. You can send up to 15 messages per hour.' }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': '0',
        },
      }
    )
  }

  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const validMessages = messages.filter(
      (m: { role: string; content: string }) =>
        (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string'
    )

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          const anthropicStream = client.messages.stream({
            model: 'claude-sonnet-4-6',
            max_tokens: 512,
            system: SYSTEM_PROMPT,
            messages: validMessages,
          })

          for await (const event of anthropicStream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              const data = JSON.stringify({ text: event.delta.text })
              controller.enqueue(encoder.encode(`data: ${data}\n\n`))
            }
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        } catch {
          const errData = JSON.stringify({ error: 'Stream error' })
          controller.enqueue(encoder.encode(`data: ${errData}\n\n`))
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'X-RateLimit-Limit': String(RATE_LIMIT),
        'X-RateLimit-Remaining': String(remaining),
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
