'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github, Linkedin, Mail, Play, ExternalLink, Send, X, Menu,
  Trophy, GraduationCap, Activity, FileText, Utensils, Gamepad2, Sun, Sparkles, Search
} from 'lucide-react'

// ─── DATA ──────────────────────────────────────────────────────────

const experiences = [
  {
    title: "Machine Learning Research Engineer",
    company: "Cohere Labs",
    location: "Toronto, ON",
    duration: "Jan 2026 – Present",
    type: "Internship",
    brandColor: "#6B4A42",
    logoUrl: "/me/cohere logo.png" as string | null,
    description: "Independently architecting ML research frameworks focused on continuous model adaptation, hallucination reduction, and memory-efficient inference for large language models.",
    achievements: [
      "Architected a PyTorch-based Modular Adaptive Agent (MAA) framework integrating inference-time JitRL and Functional LoRA for continuous on-the-fly model adaptation, mitigating catastrophic forgetting across non-stationary environments including WebArena",
      "Reduced false-positive hallucination flagging by 40% across LLaMA 3.1 8B outputs by engineering an Adaptation-Grounding Resolution (AGR) verification protocol with derivation-aware consistency scoring validated through automated multi-pass test suites",
      "Cut LLM inference memory footprint by over 60% on consumer-grade hardware via 4-bit quantization and stateless architectural design, achieving low-latency offline RAG inference on LLaMA 3.1 8B"
    ]
  },
  {
    title: "Machine Learning Research & Development Intern",
    company: "Perceivable Design Studios Inc.",
    location: "Remote",
    duration: "Jan 2026 – Present",
    type: "Internship",
    brandColor: "#6B8E9F",
    logoUrl: "/me/Perciabalelogo.png" as string | null,
    description: "Researched and developed multimodal translation frameworks bridging ASL and speech with real-time performance optimization.",
    achievements: [
      "Fine-tuned Whisper via Torchaudio for a streaming ASR pipeline, optimizing for low-resource environments with NumPy-based signal processing",
      "Engineered custom PyTorch Transformers with MediaPipe skeletal hand-tracking, achieving 95% gesture recognition accuracy",
      "Implemented ONNX quantization and WebSocket sync to reduce end-to-end lag by 40%"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Friedmann AI",
    location: "Oakville, ON",
    duration: "Sep 2025 – Present",
    type: "Full-time",
    brandColor: "#2C3E50",
    logoUrl: "/me/friedmannlogo.png" as string | null,
    description: "Developing AI-powered chatbot features and financial planning tools for advisor clients.",
    achievements: [
      "Implemented complete Calendly integration improving demo scheduling efficiency for 30+ clients",
      "Enhanced financial plan generator with a 1,200+ line prompt engineering system for FP Canada compliance",
      "Built comprehensive advisor profile management system with API endpoints and settings UI",
      "Reduced development workflow time by 75% via test signup endpoint and auth bypass infrastructure"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Normative",
    location: "Toronto, ON (Remote)",
    duration: "Jan 2025 – Apr 2025",
    type: "Internship",
    brandColor: "#5A7C5F",
    logoUrl: "/me/orbitive.jpg" as string | null,
    description: "Contributed to full-stack and AI development, enhancing internal tools and building AI-powered document processing.",
    achievements: [
      "Built and enhanced internal site using Retool and JavaScript, improving usability for 30+ team members",
      "Created an OCR document processing system improving text recognition accuracy by 75%",
      "Developed AI-driven business proposal generation using reinforcement learning and Python"
    ]
  },
  {
    title: "Autonomy Team Member",
    company: "Waterloo Aerial Robotics Group (WARG)",
    location: "Waterloo, ON",
    duration: "May 2025 – Present",
    type: "Extracurricular",
    brandColor: "#6B5B4F",
    logoUrl: "/me/Uwaterloo_logo.png" as string | null,
    description: "Working on autonomy systems for drone navigation and perception using Python and ML.",
    achievements: [
      "Developing computer vision pipelines to increase drone navigation accuracy",
      "Optimizing autonomy algorithms for object detection, landing precision, and flight stability",
      "Collaborating on integration of autonomy modules into larger UAV systems"
    ]
  }
]

const projects = [
  {
    title: "Proof",
    category: "Chrome Extension",
    description: "Chrome extension adding real-time intelligence on Polymarket pages. Won 2nd place in the Polymarket track at NexHacks 2026 @ CMU.",
    technologies: ["React", "TypeScript", "FastAPI", "Supabase", "Polymarket API", "Chrome Extension"],
    githubUrl: "https://github.com/sinhashivani/NexHacks",
    projectUrl: null as string | null,
    demoUrl: "/projectimages/NexHacks Video Demo.mp4" as string | null,
    imageUrl: "/projectimages/proofp.png",
    headerBg: "#1e3a8a",
    icon: Trophy
  },
  {
    title: "Dermalens",
    category: "AI Platform",
    description: "Production-ready AI skincare analysis platform with Gemini API, multi-angle facial scanning, and GCP data pipelines.",
    technologies: ["Next.js", "FastAPI", "Gemini API", "Elasticsearch", "GCP", "BigQuery", "Docker"],
    githubUrl: "https://github.com/shilojeyaraj/Dermalens",
    projectUrl: "https://dermalens.vercel.app" as string | null,
    demoUrl: null as string | null,
    imageUrl: "/projectimages/Dermalens-logo.png",
    headerBg: "linear-gradient(135deg, #F0FFF4, #D1FAE5, #A7F3D0)",
    icon: Search
  },
  {
    title: "Coursely",
    category: "AI Advisor",
    description: "AI Waterloo elective advisor with RAG architecture, GPT-4o-mini, and vector semantic search across 284+ courses.",
    technologies: ["Next.js", "OpenAI", "LangChain", "pgvector", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/shilojeyaraj/Elective-chooser",
    projectUrl: "https://uwaterloo-course-chats.vercel.app" as string | null,
    demoUrl: null as string | null,
    imageUrl: "/projectimages/coursely-logo.jpg",
    headerBg: "#F8F8F8",
    icon: GraduationCap
  },
  {
    title: "Brain Battle",
    category: "Multiplayer Platform",
    description: "Competitive brain training platform with real-time WebSocket multiplayer, dynamic scoring, and persistent leaderboards.",
    technologies: ["React", "Next.js", "Node.js", "WebSockets", "PostgreSQL", "OpenAI"],
    githubUrl: "https://github.com/shilojeyaraj/Brain-Battle",
    projectUrl: "https://brain-battle.app" as string | null,
    demoUrl: null as string | null,
    imageUrl: "/projectimages/Brain-Battle-logo.png",
    headerBg: "#0D1137",
    icon: Trophy
  },
  {
    title: "Mid Chats",
    category: "AI Chat App",
    description: "AI chat application with real-time messaging, study mode, and resume/cover letter building features.",
    technologies: ["Next.js", "FastAPI", "WebSockets", "PostgreSQL", "Supabase", "TypeScript"],
    githubUrl: "https://github.com/shilojeyaraj/Shilo-chat",
    projectUrl: "https://shilo-chat.vercel.app" as string | null,
    demoUrl: null as string | null,
    imageUrl: "/projectimages/Gemini_Generated_Image_57sanv57sanv57sa.png",
    headerBg: "#1a1a2e",
    icon: Sparkles
  },
  {
    title: "Solar Panel Calculator",
    category: "Web Tool",
    description: "Web app estimating annual solar output using NASA irradiance data, with per-panel calculation by location and efficiency.",
    technologies: ["Python", "Flask", "REST API", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/shilojeyaraj/solar-energy-calculator",
    projectUrl: "https://solar-energy-calculator.vercel.app" as string | null,
    demoUrl: null as string | null,
    imageUrl: "/projectimages/solar-ai.png",
    headerBg: "linear-gradient(135deg, #0D1B2A, #2A52BE, #8A2BE2)",
    icon: Sun
  },
  {
    title: "Gym Posture Corrector",
    category: "Computer Vision",
    description: "Real-time posture analysis using OpenCV/MediaPipe skeletal keypoints and TensorFlow classifier for instant form feedback.",
    technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Flask"],
    githubUrl: "https://github.com/shilojeyaraj/gym-motion-capture",
    projectUrl: null as string | null,
    demoUrl: null as string | null,
    imageUrl: "/projectimages/gym-opencv-logo.jpg",
    headerBg: "#1a1a1a",
    icon: Activity
  },
  {
    title: "OCR Document Analyzer",
    category: "ML Pipeline",
    description: "OCR pipeline with Python + OpenAI APIs extracting structured info from scanned PDFs with clean review and export UI.",
    technologies: ["Python", "OpenAI API", "OCR", "Flask", "HTML/CSS"],
    githubUrl: "https://github.com/shilojeyaraj/normativemxocr",
    projectUrl: null as string | null,
    demoUrl: null as string | null,
    imageUrl: null,
    headerBg: "#2d3748",
    icon: FileText
  },
  {
    title: "Nutrition/Fitness Plan Builder",
    category: "AI Tool",
    description: "Generates tailored workout and meal plans based on user goals and dietary restrictions using Gemini API via Flask.",
    technologies: ["Python", "Flask", "Gemini API", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/shilojeyaraj/Fitness-plan-maker",
    projectUrl: null as string | null,
    demoUrl: null as string | null,
    imageUrl: null,
    headerBg: "#2d4a3e",
    icon: Utensils
  },
  {
    title: "Tic Tac Toe VEX Robot",
    category: "Robotics",
    description: "VEX robot playing Tic Tac Toe using computer vision for board state recognition and mechanical piece placement.",
    technologies: ["C++", "VEX", "Robot C", "Computer Vision"],
    githubUrl: "https://github.com/behzadwaseem/Tic-Tac-Tron",
    projectUrl: null as string | null,
    demoUrl: null as string | null,
    imageUrl: null,
    headerBg: "#3d2b1f",
    icon: Gamepad2
  }
]

// ─── EXPERIENCE MODAL ──────────────────────────────────────────────

type Experience = typeof experiences[0]

const ExperienceModal = ({ exp, onClose }: { exp: Experience | null; onClose: () => void }) => {
  useEffect(() => {
    if (!exp) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [exp, onClose])

  return (
    <AnimatePresence>
      {exp && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-2xl overflow-hidden w-full max-w-lg max-h-[85vh] overflow-y-auto pointer-events-auto"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo / brand block */}
              <div
                className="h-36 relative overflow-hidden flex items-end shrink-0"
                style={{ background: exp.logoUrl ? '#f5f5f5' : exp.brandColor }}
              >
                {exp.logoUrl ? (
                  <Image
                    src={exp.logoUrl}
                    alt={exp.company}
                    fill
                    className="object-cover object-center"
                    sizes="512px"
                  />
                ) : (
                  <span
                    className="px-6 pb-3 leading-none select-none"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '80px',
                      color: 'rgba(255,255,255,0.2)',
                      fontWeight: '600'
                    }}
                  >
                    {exp.company[0]}
                  </span>
                )}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="mb-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#111' }}>
                      {exp.company}
                    </h2>
                    <p className="font-medium text-sm" style={{ color: '#C0634A' }}>{exp.title}</p>
                  </div>
                  <span
                    className="shrink-0 inline-flex px-3 py-1 rounded-full text-xs text-white font-medium"
                    style={{ backgroundColor: exp.brandColor }}
                  >
                    {exp.type}
                  </span>
                </div>

                <div className="flex gap-3 text-xs mb-6" style={{ color: '#888' }}>
                  <span>{exp.duration}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#555' }}>{exp.description}</p>

                <p className="text-xs uppercase mb-3" style={{ color: '#888', letterSpacing: '0.05em' }}>Key contributions</p>
                <ul className="space-y-3">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="text-sm flex items-start gap-3" style={{ color: '#444' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ backgroundColor: '#C0634A' }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── PROJECT MODAL ─────────────────────────────────────────────────

type Project = typeof projects[0]

const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  useEffect(() => {
    if (!project) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none"
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full pointer-events-auto"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image with close button */}
              <div className="relative h-64 overflow-hidden" style={{ background: project.headerBg }}>
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className={
                      project.title === 'Dermalens' ? 'object-contain scale-[2.8]' :
                      project.title === 'Solar Panel Calculator' ? 'object-cover scale-125' :
                      'object-contain'
                    }
                    sizes="672px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <project.icon className="w-16 h-16" style={{ color: 'rgba(255,255,255,0.4)' }} />
                  </div>
                )}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="text-xs mb-2" style={{ color: '#888', letterSpacing: '0.05em' }}>
                  {project.category.toUpperCase()}
                </div>
                <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#111' }}>
                  {project.title}
                </h2>
                <p className="text-sm mb-5" style={{ color: '#555', lineHeight: '1.7' }}>{project.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
                      style={{ color: '#C0634A' }}
                    >
                      Visit website <ExternalLink size={12} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="text-sm inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
                      style={{ color: '#C0634A' }}
                    >
                      Watch demo <Play size={12} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
                      style={{ color: '#888' }}
                    >
                      GitHub <Github size={12} />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t" style={{ borderColor: '#e5e5e5' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: '#f5f5f5', color: '#555' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── NAVIGATION ────────────────────────────────────────────────────

const Navigation = ({ onOpenChat }: { onOpenChat: () => void }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['About', 'Experience', 'Projects', 'Contact']

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Playfair Display, serif', color: '#111' }}
        >
          Shilo Jeyaraj
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center">
            {navLinks.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="mx-3 text-sm select-none" style={{ color: '#888' }}>·</span>}
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-[#C0634A] transition-colors"
                  style={{ color: '#888' }}
                >
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={onOpenChat}
            className="px-4 py-2 text-sm rounded-full hover:bg-[#C0634A] hover:text-white transition-all duration-200"
            style={{ border: '2px solid #C0634A', color: '#C0634A' }}
          >
            Ask Shilo.ai ✦
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: '#111' }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: '#e5e5e5' }}
          >
            <div className="px-8 py-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-[#C0634A] transition-colors"
                  style={{ color: '#888' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { onOpenChat(); setMobileOpen(false) }}
                className="text-left text-sm font-medium"
                style={{ color: '#C0634A' }}
              >
                Ask Shilo.ai ✦
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// ─── HERO ──────────────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section id="about" className="w-full max-w-[1200px] mx-auto px-8 min-h-screen flex items-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-center">

        {/* Left column */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: '#888' }}
          >
            Software Engineering · Machine Learning · Systems Design
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#111',
              lineHeight: 1.1
            }}
          >
            Hi, I&apos;m Shilo —{' '}
            <em style={{ color: '#C0634A', fontStyle: 'italic' }}>a Mechatronics Engineer</em>{' '}
            building at the intersection of AI and Robotics.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base mb-8 max-w-lg"
            style={{ color: '#888', lineHeight: 1.6 }}
          >
            Mechatronics Engineering student at the University of Waterloo, currently
            interning as an ML Research Engineer and Software Engineer. I build AI-powered
            products, contribute to autonomous drone systems, and compete in hackathons.
          </motion.p>

          {/* Social icon links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/shilojeyaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#888' }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shilo-jeyaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#888' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:stjeyara@uwaterloo.ca"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#888' }}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right column - portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center order-1 md:order-2"
        >
          <div className="relative w-full h-[500px]">
            <Image
              src="/me/Normative.PNG"
              alt="Shilo Jeyaraj"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── EXPERIENCE ────────────────────────────────────────────────────

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)

  return (
    <section id="experience" className="py-20">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', color: '#111' }}>
            Experiences
          </h2>
          <p style={{ color: '#888' }}>
            Internships and team roles where I&apos;ve shipped products, trained models, and built systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedExp(exp)}
              className="bg-white rounded-xl p-6 border cursor-pointer hover:shadow-lg transition-shadow group"
              style={{ borderColor: '#e5e5e5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
            >
              {/* Logo or colored initial block */}
              <div
                className="w-full h-40 rounded-lg mb-4 relative overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: exp.logoUrl ? '#f5f5f5' : exp.brandColor }}
              >
                {exp.logoUrl ? (
                  <Image
                    src={exp.logoUrl}
                    alt={exp.company}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="300px"
                  />
                ) : (
                  <span
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '80px',
                      color: 'rgba(255,255,255,0.3)',
                      fontWeight: '600',
                      lineHeight: 1
                    }}
                  >
                    {exp.company[0]}
                  </span>
                )}
              </div>

              {/* Metadata */}
              <div className="text-xs mb-2" style={{ color: '#888', letterSpacing: '0.05em' }}>
                {exp.type.toUpperCase()} · {exp.duration.toUpperCase()}
              </div>

              {/* Company and role */}
              <h3 className="mb-1 font-semibold text-sm leading-snug" style={{ color: '#111' }}>{exp.company}</h3>
              <p className="text-sm" style={{ color: '#888' }}>{exp.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
    </section>
  )
}

// ─── PROJECTS ──────────────────────────────────────────────────────

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#fafaf9' }}>
      <div className="w-full max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', color: '#111' }}>
            Projects
          </h2>
          <p style={{ color: '#888' }}>
            Explorations at the intersection of ML, product design, and full-stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-xl overflow-hidden border cursor-pointer hover:shadow-lg transition-shadow group"
                style={{ borderColor: '#e5e5e5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48" style={{ background: project.headerBg }}>
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className={`group-hover:scale-105 transition-transform duration-300 ${
                        project.title === 'Dermalens' ? 'object-contain scale-[2.8] group-hover:scale-[3.0]' :
                        project.title === 'Solar Panel Calculator' ? 'object-cover scale-125 group-hover:scale-[1.35]' :
                        'object-contain'
                      }`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-10 h-10" style={{ color: 'rgba(255,255,255,0.4)' }} />
                    </div>
                  )}
                </div>

                {/* Card body — title + first 3 tags only */}
                <div className="p-6">
                  <h3
                    className="mb-4 font-semibold group-hover:text-[#C0634A] transition-colors leading-snug"
                    style={{ color: '#111' }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ backgroundColor: '#f5f5f5', color: '#555' }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ backgroundColor: '#f5f5f5', color: '#888' }}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

// ─── FOOTER ────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full max-w-[1200px] mx-auto px-8 py-16 mt-20 border-t"
      style={{ borderColor: '#e5e5e5' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#111' }}>
            Let&apos;s build something.
          </h3>
          <p style={{ color: '#888', lineHeight: 1.6 }}>
            Open to new opportunities, collaborations, and interesting conversations.
            Always happy to chat about AI, robotics, or your next big idea.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <a
            href="mailto:stjeyara@uwaterloo.ca"
            className="text-base hover:opacity-70 transition-opacity"
            style={{ color: '#C0634A' }}
          >
            stjeyara [at] uwaterloo.ca
          </a>
          <div className="flex items-center gap-2 text-sm" style={{ color: '#888' }}>
            <a
              href="https://linkedin.com/in/shilo-jeyaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C0634A] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/shilojeyaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C0634A] transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="mailto:stjeyara@uwaterloo.ca"
              className="hover:text-[#C0634A] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t text-sm text-center" style={{ borderColor: '#e5e5e5', color: '#888' }}>
        © 2026 Shilo Jeyaraj. Designed with intention.
      </div>
    </footer>
  )
}

// ─── CHAT MODAL ────────────────────────────────────────────────────

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const ChatModal = ({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return
    const userMsg: ChatMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (response.status === 429) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "You've reached the 15-message limit for this hour. Feel free to reach out directly at stjeyara@uwaterloo.ca!",
          },
        ])
        setIsLoading(false)
        return
      }

      if (!response.ok) throw new Error('Chat failed')

      const reader = response.body!.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        for (const line of chunk.split('\n')) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim()
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              if (parsed.text) {
                assistantContent += parsed.text
                setMessages((prev) => {
                  const updated = [...prev]
                  updated[updated.length - 1] = { role: 'assistant', content: assistantContent }
                  return updated
                })
              }
            } catch { /* skip malformed SSE */ }
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm having trouble connecting right now. Reach out directly at stjeyara@uwaterloo.ca.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            onClick={onOpen}
            className="fixed bottom-6 right-6 z-50 px-5 py-3 text-sm font-medium rounded-full shadow-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#C0634A' }}
          >
            Ask Shilo.ai ✦
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={onClose}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="fixed bottom-6 right-6 z-50 w-[360px] md:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Chat with Shilo.ai"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b flex items-center justify-between shrink-0" style={{ borderColor: '#e5e5e5' }}>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: '#111' }}>Ask Shilo.ai</h3>
                  <p className="text-xs" style={{ color: '#888' }}>Ask anything about Shilo</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f5f5] transition-colors"
                  style={{ color: '#888' }}
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.length === 0 && (
                  <div className="text-center text-sm mt-10 px-4" style={{ color: '#888' }}>
                    <p className="text-2xl mb-3">👋</p>
                    <p className="font-medium mb-1" style={{ color: '#555' }}>Hi! I&apos;m Shilo&apos;s AI assistant.</p>
                    <p>Ask me about his experience, projects, or how to reach him.</p>
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className="max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                      style={{
                        backgroundColor: msg.role === 'user' ? '#C0634A' : '#f5f5f5',
                        color: msg.role === 'user' ? '#fff' : '#111',
                        borderBottomRightRadius: msg.role === 'user' ? '4px' : undefined,
                        borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : undefined,
                      }}
                    >
                      {msg.content || (isLoading && i === messages.length - 1 ? (
                        <span className="inline-flex gap-1 items-center py-0.5">
                          <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0ms]" style={{ backgroundColor: '#999' }} />
                          <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:150ms]" style={{ backgroundColor: '#999' }} />
                          <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:300ms]" style={{ backgroundColor: '#999' }} />
                        </span>
                      ) : '')}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t flex gap-2 shrink-0" style={{ borderColor: '#e5e5e5' }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
                  }}
                  placeholder="Ask something…"
                  className="flex-1 px-3 py-2.5 text-sm rounded-full outline-none focus:ring-2 focus:ring-[#C0634A]/30"
                  style={{ backgroundColor: '#f5f5f5', color: '#111' }}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="w-9 h-9 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40"
                  style={{ backgroundColor: '#C0634A' }}
                  aria-label="Send message"
                >
                  <Send size={15} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── HOME ──────────────────────────────────────────────────────────

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fafaf9' }}>
      <Navigation onOpenChat={() => setIsChatOpen(true)} />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
      <ChatModal
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={() => setIsChatOpen(false)}
      />
    </main>
  )
}
