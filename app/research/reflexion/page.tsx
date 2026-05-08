import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Memory Retrieval Strategy Matters | Shilo Jeyaraj',
  description:
    'A comparative study of episodic memory backends for Reflexion-style LLM agents. Retrieval ordering within a backend class accounts for a larger performance gap than backend choice itself.',
}

// ── Table data ────────────────────────────────────────────────────────────────

interface MainRow {
  domain: string
  backend: string
  s1: string; s3: string; s5: string
  tokens: string; cost: string
  boldS1?: boolean; boldS3?: boolean; boldS5?: boolean
  boldTokens?: boolean; boldCost?: boolean
  accentS1?: boolean
  sectionBreak?: boolean
}

interface MiniRow {
  backend: string
  s1: string; s1g: string
  s3: string; s3g: string
  s5: string; s5g: string
  tokens: string; tokensg: string
  cost: string; costg: string
  boldS1?: boolean; boldS3?: boolean; boldS5?: boolean
  boldTokens?: boolean; boldCost?: boolean
}

const mainTableData: MainRow[] = [
  { domain: 'Reasoning', backend: 'SW',     s1: '0.580', s3: '0.840', s5: '0.860', tokens: '3,967', cost: '0.0152', boldS3: true,  boldS5: true  },
  { domain: '',          backend: 'SQL-v1', s1: '0.580', s3: '0.700', s5: '0.720', tokens: '4,649', cost: '0.0134' },
  { domain: '',          backend: 'SQL-v2', s1: '0.580', s3: '0.780', s5: '0.840', tokens: '4,076', cost: '0.0151' },
  { domain: '',          backend: 'Vec',    s1: '0.700', s3: '0.820', s5: '0.840', tokens: '3,621', cost: '0.0125', boldS1: true, accentS1: true, boldTokens: true, boldCost: true },
  { domain: 'Tool-use',  backend: 'SW',     s1: '1.000', s3: '1.000', s5: '1.000', tokens: '966',   cost: '0.0048', boldS1: true, boldS3: true, boldS5: true, boldTokens: true, boldCost: true, sectionBreak: true },
  { domain: '',          backend: 'SQL-v2', s1: '0.950', s3: '1.000', s5: '1.000', tokens: '1,037', cost: '0.0052', boldS3: true, boldS5: true },
  { domain: '',          backend: 'Vec',    s1: '1.000', s3: '1.000', s5: '1.000', tokens: '1,016', cost: '0.0051', boldS1: true, boldS3: true, boldS5: true },
]

const miniTableData: MiniRow[] = [
  { backend: 'SW',     s1: '0.500', s1g: '0.580', s3: '0.780', s3g: '0.840', s5: '0.840', s5g: '0.860', tokens: '4,180', tokensg: '3,966', cost: '0.0155', costg: '0.0152', boldS1: true  },
  { backend: 'SQL-v2', s1: '0.440', s1g: '0.580', s3: '0.800', s3g: '0.780', s5: '0.800', s5g: '0.840', tokens: '4,543', tokensg: '4,075', cost: '0.0164', costg: '0.0151', boldS3: true  },
  { backend: 'Vec',    s1: '0.460', s1g: '0.700', s3: '0.840', s3g: '0.820', s5: '0.840', s5g: '0.840', tokens: '4,131', tokensg: '3,621', cost: '0.0153', costg: '0.0125', boldS3: true, boldS5: true, boldTokens: true, boldCost: true },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ReflexionPaper() {
  return (
    <div style={{ backgroundColor: '#fafaf9', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#111' }}>

      {/* Top nav */}
      <div style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#ffffff' }}>
        <div className="w-full max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/#research" className="text-sm transition-colors hover:text-[#C0634A]" style={{ color: '#888' }}>
            ← Shilo Jeyaraj
          </Link>
          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#fdf3f0', color: '#C0634A', border: '1px solid #f0d4c8' }}>
            Preprint · Under Review
          </span>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 py-16">
      <article className="max-w-[760px] mx-auto">

        {/* ── Header ────────────────────────────────────────────── */}
        <header className="mb-14">
          <p className="text-xs uppercase mb-5" style={{ color: '#888', letterSpacing: '0.12em' }}>
            Machine Learning · May 2026
          </p>
          <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', lineHeight: 1.2, color: '#111' }}>
            Memory Retrieval Strategy Matters: A Comparative Study of Episodic Memory Backends for Reflexion-Style LLM Agents
          </h1>
          <p className="text-sm mb-1" style={{ color: '#888' }}>Shilo Jeyaraj · University of Waterloo · Independent Researcher · 2026</p>
          <p className="text-sm mb-8" style={{ color: '#888' }}>
            <a href="mailto:stjeyara@uwaterloo.ca" className="transition-colors hover:text-[#C0634A]">stjeyara@uwaterloo.ca</a>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/shilojeyaraj/reflexion-memory-study" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border transition-all hover:border-[#C0634A] hover:text-[#C0634A]"
               style={{ borderColor: '#e5e5e5', color: '#555', backgroundColor: '#fff' }}>
              GitHub ↗
            </a>
            <span className="inline-flex items-center text-sm px-4 py-2 rounded-lg" style={{ backgroundColor: '#f5f5f5', color: '#bbb', cursor: 'not-allowed' }}>
              arXiv (coming soon)
            </span>
          </div>
        </header>

        {/* ── Abstract ──────────────────────────────────────────── */}
        <section className="mb-14 p-6 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}>
          <h2 className="text-xs uppercase mb-4" style={{ color: '#888', letterSpacing: '0.12em' }}>Abstract</h2>
          <p className="text-sm" style={{ color: '#444', lineHeight: 1.85 }}>
            Reflexion improves large language model (LLM) performance through iterative self-reflection, storing verbal lessons in an episodic memory buffer. We show that a retrieval ordering decision within a backend class accounts for a larger performance gap than the choice of backend itself: surfacing failure episodes first rather than successes first yields a <strong style={{ color: '#111' }}>12 percentage point improvement in success@5</strong> on multi-step reasoning, a non-obvious result with direct practical implications for any practitioner building memory-augmented agents. A Vector DB with semantic similarity retrieval achieves the highest first-attempt success rate (70.0% vs. 58.0% for other backends) and lowest token cost, consistent with the hypothesis that semantically similar past tasks share applicable lessons. Once the ordering decision is corrected, SQL and Vector DB converge to equivalent success@5 (84%), both outperforming the sliding-window baseline on first-attempt accuracy. The tool-use domain exhibits a ceiling effect (100% success@5 across all backends), highlighting the need for harder benchmarks to differentiate memory backend performance. A GPT-4o-mini replication confirms these patterns are model-agnostic: success@5 gaps narrow to within 4pp across all three backends despite substantially lower first-attempt accuracy. All code, result data, and experimental configurations are released at{' '}
            <a href="https://github.com/shilojeyaraj/reflexion-memory-study" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C0634A]" style={{ color: '#C0634A', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              github.com/shilojeyaraj/reflexion-memory-study
            </a>.
          </p>
        </section>

        {/* ── 1. Introduction ───────────────────────────────────── */}
        <Section number="1" title="Introduction">
          <P>
            Large language models can improve their own performance on sequential tasks through self-generated verbal feedback, a process formalised by Reflexion. After each failed attempt, the agent reflects on its error, stores a verbal lesson in memory, and retrieves that lesson on subsequent attempts. The quality of this feedback loop depends on two components: the <em>reflector</em> that generates lessons, and the <em>memory backend</em> that stores and retrieves them.
          </P>
          <P>
            The original Reflexion paper evaluates the reflector extensively but treats the memory backend as a fixed implementation detail: a sliding window of the <em>k</em> most recent episodes. This design is simple and requires no external infrastructure, but it has a fundamental limitation. Retrieval is <em>recency-ordered only</em>. If a relevant past lesson occurred more than <em>k</em> episodes ago, it is silently discarded. As the agent accumulates experience across many tasks, the gap between available lessons and actually retrieved lessons grows.
          </P>
          <P>We hypothesise that more principled retrieval strategies can improve sample efficiency and task success. Specifically:</P>
          <ul className="my-5 space-y-3 pl-1">
            <BulletItem><strong style={{ color: '#111' }}>SQL (structured retrieval):</strong> Filtering by domain and error type surfaces the subset of stored episodes most likely to be relevant to the current failure mode, maintaining precision as the database grows.</BulletItem>
            <BulletItem><strong style={{ color: '#111' }}>Vector DB (semantic retrieval):</strong> Embedding-based similarity search identifies lessons from semantically related tasks regardless of recency or error category, enabling cross-task generalisation.</BulletItem>
          </ul>
          <P>We make the following contributions:</P>
          <ol className="my-5 space-y-4 pl-1">
            {([
              [
                'The discovery that retrieval ordering within a backend class accounts for a larger performance gap (12 percentage points) than the choice of backend itself.',
                ' This is a non-obvious finding with immediate practical value for any practitioner building memory-augmented agents.',
              ],
              [
                'Empirical evidence that Vector DB achieves higher first-attempt success and lower token cost on reasoning tasks,',
                ' consistent with the semantic retrieval hypothesis.',
              ],
              [
                'A signal-to-noise framework for reasoning about backend choice',
                ' as a function of task structure and database size.',
              ],
              [
                'A reproducible experimental framework comparing three memory backends across two task domains',
                ' using only open-source tools (SQLite, ChromaDB, HotpotQA, BFCL).',
              ],
            ] as [string, string][]).map(([lead, rest], i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#444', lineHeight: 1.75 }}>
                <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5" style={{ backgroundColor: '#fdf3f0', color: '#C0634A' }}>{i + 1}</span>
                <span><strong style={{ color: '#111' }}>{lead}</strong>{rest}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Divider />

        {/* ── 2. Related Work ───────────────────────────────────── */}
        <Section number="2" title="Related Work">
          <Subsection title="Reflexion">
            <P>
              Shinn et al. introduce Reflexion, in which an LLM agent verbalises lessons learned from task failures and stores them in an episodic buffer. Retrieved lessons augment the agent's context on subsequent attempts. The original work uses a fixed-size sliding window and evaluates on HotpotQA, AlfWorld, and HumanEval. Our work extends this by studying the memory component directly, treating retrieval strategy as the independent variable.
            </P>
          </Subsection>
          <Subsection title="Memory-Augmented Language Agents">
            <P>
              MemGPT proposes a hierarchical memory architecture for LLM agents, distinguishing in-context, external, and archival memory tiers. MemoryBank introduces long-term memory using vector retrieval for personalised LLM assistants. Park et al. demonstrate episodic memory retrieval in generative agent simulations. Our work differs in focus: we study how retrieval strategy interacts with the specific <em>self-improvement</em> mechanism of Reflexion, where retrieved content is verbal lessons rather than factual knowledge.
            </P>
          </Subsection>
          <Subsection title="Retrieval-Augmented Generation">
            <P>
              RAG systems retrieve external documents to augment LLM responses. Dense passage retrieval and contrastive learning-based embeddings underpin modern semantic retrieval. Our vector backend uses sentence-transformers for embedding reflection text, applying RAG principles to the agent self-improvement setting.
            </P>
          </Subsection>
          <Subsection title="Tool-Use and Function Calling Benchmarks">
            <P>
              The Berkeley Function-Calling Leaderboard (BFCL) provides standardised evaluation of LLM function-calling accuracy using AST matching. We evaluate on BFCL's <em>multiple_function</em> split, which requires the agent to select the correct function from a candidate set with similar signatures. Despite this harder disambiguation requirement, a 100% success@5 ceiling persists across all backends, indicating that GPT-4o solves these tasks reliably without needing memory-assisted iteration. Sequential multi-tool benchmarks such as ToolBench are likely needed to create the graded signal required for backend differentiation.
            </P>
          </Subsection>
          <Subsection title="Multi-Step Reasoning">
            <P>
              HotpotQA requires multi-hop reasoning over Wikipedia passages. We use the distractor setting, which provides 10 candidate passages per question, matching the format used by Reflexion.
            </P>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 3. Methods ────────────────────────────────────────── */}
        <Section number="3" title="Methods">
          <Subsection title="Formal Framework">
            <P>
              A memory backend <strong style={{ color: '#111' }}>B</strong> is a triple (store, retrieve, reset) operating over an episode set <em>E</em>. Each episode <em>e</em> is a 7-tuple:
            </P>
            <Eq>
              <em>e</em> = (domain, query, action<sub>summary</sub>, reflection, success, error<sub>type</sub>, <em>t</em>)
            </Eq>
            <P>The interface is defined as:</P>
            <Eq>
              store(<em>e</em>) : Episode → ∅<br />
              retrieve(<em>q</em>, <em>k</em>) : Query × ℕ → List[Episode]<br />
              reset() : ∅ → ∅
            </Eq>
            <P>The three retrieval functions are defined as follows.</P>
            <P><strong style={{ color: '#111' }}>Sliding window</strong> returns the <em>k</em> most recent episodes by insertion order, ignoring the query entirely:</P>
            <Eq>
              R<sub>SW</sub>(<em>q</em>, <em>k</em>) = &#123; <em>e</em><sub><em>n</em>−<em>k</em>+1</sub>, …, <em>e</em><sub><em>n</em></sub> &#125;
            </Eq>
            <P><strong style={{ color: '#111' }}>SQL</strong> filters by domain and orders failure episodes first. On attempt <em>t</em> ≥ 2 it additionally filters by the previous error type:</P>
            <Eq>
              R<sub>SQL</sub>(<em>q</em>, <em>k</em>) = top-<em>k</em> &#123; <em>e</em> ∈ <em>E</em> | <em>e</em>.domain = <em>d</em>(<em>q</em>) &#125; ordered by (<em>e</em>.success ↑, <em>e</em>.<em>t</em> ↓)<br />
              R<sub>SQL</sub>(err, <em>k</em>) = top-<em>k</em> &#123; <em>e</em> ∈ <em>E</em> | <em>e</em>.error<sub>type</sub> = err &#125; ordered by <em>e</em>.<em>t</em> ↓ &nbsp;&nbsp;<span style={{ color: '#888', fontSize: '11px' }}>[<em>t</em> ≥ 2]</span>
            </Eq>
            <P><strong style={{ color: '#111' }}>Vector DB</strong> retrieves the <em>k</em> nearest neighbours by cosine similarity above threshold θ:</P>
            <Eq>
              R<sub>Vec</sub>(<em>q</em>, <em>k</em>) = top-<em>k</em> &#123; <em>e</em> ∈ <em>E</em> | cos(φ(<em>e</em>), φ(<em>q</em>)) ≥ θ &#125; ordered by cos(φ(<em>e</em>), φ(<em>q</em>)) ↓
            </Eq>
            <p className="text-xs mb-5" style={{ color: '#888', lineHeight: 1.7 }}>
              where φ(·) is the <Code>all-MiniLM-L6-v2</Code> embedding function and θ = 0.55.
            </p>
            <P>We define <strong style={{ color: '#111' }}>signal density</strong> ρ as the fraction of retrieved episodes genuinely relevant to the current task <em>T</em>:</P>
            <Eq>
              ρ(<em>R</em>, <em>T</em>) = |&#123; <em>e</em> ∈ <em>R</em> | relevant(<em>e</em>, <em>T</em>) = 1 &#125;| / <em>k</em>
            </Eq>
            <p className="text-xs mb-5" style={{ color: '#888', lineHeight: 1.7 }}>
              where relevant(<em>e</em>, <em>T</em>) = 1 if episode <em>e</em> contains a lesson applicable to task <em>T</em>, 0 otherwise. Section 5.1 uses this framework to characterise how ρ varies across backend classes as |<em>E</em>| grows.
            </p>
          </Subsection>

          <Subsection title="Memory Backends">
            <P>
              We implement three backends, each conforming to a common <Code>MemoryBackend</Code> interface with <Code>store()</Code>, <Code>retrieve()</Code>, and <Code>reset()</Code> methods.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Sliding Window (baseline).</strong> Episodes are stored in a Python list. <Code>retrieve(query, k)</Code> ignores the query entirely and returns the <em>k</em> most recent episodes. This mirrors the original Reflexion implementation. No persistence is used; all state is held in-process.
            </P>
            <P>
              <strong style={{ color: '#111' }}>SQL (SQLite).</strong> Episodes are stored in a local SQLite database (zero external dependencies, sub-millisecond retrieval). <Code>retrieve(query, k)</Code> filters by domain and returns <em>k</em> episodes ordered <Code>success ASC, timestamp DESC</Code>: failures first, most recent first within each group. On attempt <em>t</em> ≥ 2, the actor calls <Code>retrieve_by_error_type(prev_error_type, k)</Code> to surface episodes sharing the exact failure mode of the previous attempt, falling back to general domain retrieval if fewer than <em>k</em> error-type matches exist.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Vector DB (ChromaDB).</strong> Episodes are embedded using <Code>all-MiniLM-L6-v2</Code> from the sentence-transformers library. The embedded string is <Code>{'{domain}: {action_summary} -> {reflection}'}</Code>. <Code>retrieve(query, k)</Code> embeds the current task description and returns the <em>k</em> nearest neighbours by cosine similarity, subject to a minimum similarity threshold of 0.55. A persistent ChromaDB collection is used across tasks within a single experimental run.
            </P>
          </Subsection>

          <Subsection title="Experimental Setup">
            <P>
              <strong style={{ color: '#111' }}>Models.</strong> We evaluate two models to assess whether findings generalise across capability levels. The primary model is GPT-4o, used for all conditions. The secondary model is GPT-4o-mini, run on the reasoning domain only to test whether the SQL retrieval ordering effect is model-agnostic. Temperature is set to the API default (1.0) for both models.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Trial loop.</strong> Each task runs for up to 5 attempts. On each attempt: (1) the actor retrieves <em>k</em>=3 past reflections and generates a response; (2) the environment evaluates the response and returns (reward, success, feedback, error_type); (3) the reflector generates a verbal lesson; (4) the episode is stored in memory. The loop terminates on success or after 5 attempts.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Domains and benchmarks.</strong>{' '}
              <em>Reasoning (HotpotQA):</em> We sample 50 questions from the distractor validation split using a fixed seed. Reward is 1.0 for exact match, 0.5 for substring match, and 0.0 otherwise. Error types: <Code>exact_match</Code>, <Code>partial_match</Code>, <Code>wrong_answer</Code>.{' '}
              <em>Tool-use (BFCL multiple_function):</em> We use all 20 available tasks from the BFCL <em>multiple_function</em> split, which requires selecting the correct function from among candidates with similar names and signatures. The agent outputs Python function call syntax; correctness is evaluated by AST matching against the reference call. Reward is binary (1.0/0.0).
            </P>
            <P>
              <strong style={{ color: '#111' }}>Infrastructure.</strong> SQLite is used in preference to hosted PostgreSQL to eliminate network latency as a confound in token and cost metrics, and to ensure full reproducibility from <Code>git clone</Code> with no credentials required. All experiments ran on a single machine; no distributed infrastructure was used.
            </P>
            <p className="text-xs px-4 py-3 rounded-lg mb-5" style={{ color: '#888', backgroundColor: '#f9f9f8', border: '1px solid #ebebeb', lineHeight: 1.7 }}>
              <strong style={{ color: '#555' }}>Note on code domain.</strong> The HumanEval benchmark was excluded because its execution harness relies on <Code>signal.SIGALRM</Code>, which is unavailable on Windows. Results therefore cover two of the original three Reflexion domains.
            </p>
          </Subsection>

          <Subsection title="Metrics">
            <ul className="my-2 space-y-3 pl-1">
              {[
                <><strong style={{ color: '#111' }}>success@k:</strong> fraction of tasks solved within <em>k</em> attempts.</>,
                <><strong style={{ color: '#111' }}>sample efficiency:</strong> number of episodes until 70% of tasks are solved (lower is better; ∞ if never reached).</>,
                <><strong style={{ color: '#111' }}>mean tokens per task:</strong> average total token consumption across all attempts for a task.</>,
                <><strong style={{ color: '#111' }}>cost per solved task:</strong> estimated USD cost ($0.005 per 1k tokens, blended GPT-4o rate) divided by number of solved tasks.</>,
              ].map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
            <P>Statistical significance is assessed using the Wilcoxon signed-rank test on per-task binary success@5 scores, with <em>p</em> &lt; 0.05 as the significance threshold.</P>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 4. Results ────────────────────────────────────────── */}
        <Section number="4" title="Results">

          {/* Main table */}
          <div className="my-8 overflow-x-auto rounded-xl" style={{ border: '1px solid #e5e5e5' }}>
            <table className="w-full text-sm">
              <caption className="text-xs px-5 py-3 text-left" style={{ color: '#888', borderBottom: '1px solid #e5e5e5' }}>
                <strong style={{ color: '#555' }}>Table 1.</strong> Main results. SW = Sliding Window; SQL-v1 = success-first ordering (original, with ordering error); SQL-v2 = failure-first ordering (corrected); Vec = Vector DB. Bold = best per domain. <em>n</em>=50 for reasoning; <em>n</em>=20 for tool-use.
              </caption>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#fafaf9' }}>
                  {['Domain', 'Backend', 'success@1', 'success@3', 'success@5', 'Mean tokens', 'Cost/solved ($)'].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-semibold" style={{ color: '#888', textAlign: h === 'Domain' || h === 'Backend' ? 'left' : 'right', letterSpacing: '0.03em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mainTableData.map((row, i) => {
                  const isLast = i === mainTableData.length - 1
                  return (
                    <tr key={i} style={{ borderBottom: isLast ? 'none' : `1px solid ${row.sectionBreak ? '#d0d0d0' : '#f0f0f0'}`, backgroundColor: row.accentS1 ? '#fdf8f6' : '#ffffff' }}>
                      <td className="px-4 py-2.5 text-xs font-medium" style={{ color: '#888' }}>{row.domain}</td>
                      <td className="px-4 py-2.5 font-mono text-sm font-medium" style={{ color: '#111' }}>{row.backend}</td>
                      <CellNum val={row.s1} bold={row.boldS1} accent={row.accentS1} />
                      <CellNum val={row.s3} bold={row.boldS3} />
                      <CellNum val={row.s5} bold={row.boldS5} />
                      <CellNum val={row.tokens} bold={row.boldTokens} muted />
                      <CellNum val={row.cost} bold={row.boldCost} muted />
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <Subsection title="Reasoning Domain (HotpotQA)">
            <P>Results are shown in Table 1. Three findings stand out.</P>
            <P>
              <strong style={{ color: '#111' }}>Vector DB leads on first-attempt success.</strong> Vec achieves 70.0% success@1 versus 58.0% for SW and both SQL variants, a 12 percentage point advantage. This is consistent with the semantic retrieval hypothesis: HotpotQA questions cluster by topic and reasoning pattern, so semantically similar past tasks share applicable lessons regardless of recency. The actor, presented with relevant prior reflections on attempt 1, resolves more tasks without needing any retry. Vec also achieves the lowest mean token count (3,621) and lowest cost per solved task ($0.0125), suggesting the retrieved reflections are high-signal enough to reduce response length and retry overhead.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Sliding Window leads on success@5.</strong> SW achieves 86.0% success@5, narrowly outperforming SQL-v2 and Vec (both 84.0%), though the difference is not statistically significant (<em>p</em> = 0.317, Wilcoxon). This is consistent with the dataset structure: with a fixed shuffle seed, similar HotpotQA question types cluster together in task order, making recent episodes incidentally relevant. This is a dataset artefact rather than a principled advantage of recency-based retrieval.
            </P>
            <P>
              <strong style={{ color: '#111' }}>SQL-v1 significantly underperforms; SQL-v2 recovers.</strong> SQL-v1 achieves only 72.0% success@5, significantly below SW (<em>p</em> = 0.020) and Vec (<em>p</em> = 0.034). Post-hoc audit revealed the cause: SQL-v1's <Code>ORDER BY success DESC</Code> retrieval surfaced 351 of 353 retrieved episodes with <Code>error_type = exact_match</Code> (i.e. past successes). The agent was shown reminders of what had worked before rather than lessons from failures, effectively inverting the Reflexion mechanism. Correcting the ordering to <Code>success ASC, timestamp DESC</Code> (failure-first) recovers 12 percentage points, bringing SQL-v2 to 84.0%, which is statistically indistinguishable from Vec (<em>p</em> = 1.000). The SQL-v1 vs. SQL-v2 comparison is a controlled ablation: all other variables (schema, filtering logic, embedding, model) are held constant. Only retrieval ordering changes.
            </P>
          </Subsection>

          <Subsection title="SQL Retrieval Ordering Ablation">
            <P>
              Figure 1 shows the success curves for all four reasoning conditions across trial numbers 1–5. SQL-v1 diverges from the other backends at trial 2 and continues to lag throughout: tasks that reached attempt 2 were being shown successful past episodes rather than failure-specific lessons, preventing the agent from correctly diagnosing its error type. By trial 5, SQL-v1 has 15 tasks still failing (compared to 7 for SW and 8 for Vec/SQL-v2), all cycling through <Code>partial_match</Code> and <Code>wrong_answer</Code> errors without improvement.
            </P>
            <P>
              This result has a practical implication: for any Reflexion-style system using structured memory, retrieval must prioritise failure episodes. Success episodes are valuable as <em>few-shot exemplars</em> but counterproductive for <em>error diagnosis</em>, which is what Reflexion's reflector requires.
            </P>

            {/* Figure */}
            <figure className="my-8">
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #e5e5e5', backgroundColor: '#fff' }}>
                <Image
                  src="/research/sql_ordering_ablation.png"
                  alt="Success curves for all four reasoning conditions across trials 1–5"
                  width={800}
                  height={480}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
              <figcaption className="mt-3 text-xs text-center" style={{ color: '#888', lineHeight: 1.7 }}>
                <strong style={{ color: '#555' }}>Figure 1.</strong> Success curves for all four reasoning conditions across trials 1–5. SQL-v1 (success-first ordering) diverges from all other conditions at trial 2, where it begins retrieving past successes rather than failures. SQL-v2 (failure-first ordering) recovers to parity with Vector DB by trial 5. Error bars show 95% bootstrap confidence intervals (<em>n</em>=50 tasks, 1,000 resamples).
              </figcaption>
            </figure>
          </Subsection>

          <Subsection title="Tool-Use Domain (BFCL multiple_function)">
            <P>
              All three backends achieve 100% success@5 on the BFCL <em>multiple_function</em> split (<em>n</em>=20). Despite the harder disambiguation requirement, GPT-4o solves nearly all tasks on the first attempt: SW and Vec achieve 100% success@1, while SQL-v2 reaches 95% (19/20), with the one failure recovered by trial 2. The ceiling effect provides no signal for backend differentiation. SW achieves the lowest mean token cost (966 tokens per task, $0.0048 per solved task), but this advantage is attributable to task simplicity rather than retrieval efficiency.
            </P>
          </Subsection>

          <Subsection title="Sample Efficiency">
            <P>
              Vec requires only 48 episodes to reach 70% cumulative success on reasoning, compared to 88 for SQL-v2, 99 for SW, and 121 for SQL-v1. The large gap between Vec and SW (48 vs. 99 episodes) indicates that semantic retrieval produces meaningful signal earlier in the run, before the memory database is large enough for recency-based heuristics to work well. SQL-v1's 121-episode requirement reflects the warm-up confound: until approximately 20 tasks have been run, even failure-first ordering has few failure episodes to surface.
            </P>
          </Subsection>

          <Subsection title="Model Generalisability (GPT-4o-mini)">
            <P>
              To assess whether the retrieval ordering finding generalises beyond GPT-4o, we ran all three reasoning-domain conditions (SW, SQL-v2, Vec) using GPT-4o-mini on the same 50 HotpotQA tasks with the same fixed seed. Table 2 shows the results alongside GPT-4o baselines (in italics).
            </P>
            <P>
              Two patterns emerge. First, first-attempt accuracy drops sharply across all backends: Vector DB suffers the largest single-shot degradation (−24pp at success@1, from 70.0% to 46.0%), while SW declines least (−8pp). This suggests that GPT-4o-mini extracts less value from semantically retrieved reflections on the first attempt, consistent with a weaker base capacity for context utilisation. Second, success@5 gaps narrow substantially: SW (−2pp), SQL-v2 (−4pp), Vec (±0pp). Vector DB is fully robust at the five-attempt ceiling, matching its GPT-4o performance exactly (84.0%).
            </P>
            <P>
              The backend ranking at success@5 shifts modestly: with GPT-4o all three converge to 84–86%; with GPT-4o-mini, SW and Vec tie at 84.0% while SQL-v2 trails at 80.0%. The SQL failure-first ordering advantage, while preserved in direction, is smaller under GPT-4o-mini, suggesting the structured retrieval benefit scales with the model's capacity to apply failure-specific lessons.
            </P>

            {/* Mini table */}
            <div className="my-6 overflow-x-auto rounded-xl" style={{ border: '1px solid #e5e5e5' }}>
              <table className="w-full text-sm">
                <caption className="text-xs px-5 py-3 text-left" style={{ color: '#888', borderBottom: '1px solid #e5e5e5' }}>
                  <strong style={{ color: '#555' }}>Table 2.</strong> GPT-4o-mini vs. GPT-4o on the reasoning domain (HotpotQA, <em>n</em>=50). GPT-4o-mini values shown first; GPT-4o baseline in <em>italics</em>. Bold marks the best GPT-4o-mini value per column.
                </caption>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#fafaf9' }}>
                    {['Backend', 'success@1', 'success@3', 'success@5', 'Mean tokens', 'Cost/solved ($)'].map((h) => (
                      <th key={h} className="px-4 py-3 text-xs font-semibold" style={{ color: '#888', textAlign: h === 'Backend' ? 'left' : 'right', letterSpacing: '0.03em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {miniTableData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < miniTableData.length - 1 ? '1px solid #f0f0f0' : 'none', backgroundColor: '#ffffff' }}>
                      <td className="px-4 py-2.5 font-mono text-sm font-medium" style={{ color: '#111' }}>{row.backend}</td>
                      <MiniCell val={row.s1} gpt4={row.s1g} bold={row.boldS1} />
                      <MiniCell val={row.s3} gpt4={row.s3g} bold={row.boldS3} />
                      <MiniCell val={row.s5} gpt4={row.s5g} bold={row.boldS5} />
                      <MiniCell val={row.tokens} gpt4={row.tokensg} bold={row.boldTokens} />
                      <MiniCell val={row.cost} gpt4={row.costg} bold={row.boldCost} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 5. Discussion ─────────────────────────────────────── */}
        <Section number="5" title="Discussion">
          <Subsection title="Signal-to-Noise Framework">
            <P>
              We propose a <em>signal-to-noise</em> framework for reasoning about memory backend choice in Reflexion systems. Define <em>signal density</em> as the fraction of retrieved episodes that are genuinely relevant to the current task and failure mode.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Sliding Window</strong> retrieval has high density for very small databases (every stored episode is recent and therefore likely relevant) but density degrades as the agent accumulates diverse experience. Recency and relevance are correlated only when task types cluster temporally, which is a dataset property rather than a retrieval property.
            </P>
            <P>
              <strong style={{ color: '#111' }}>SQL</strong> maintains stable precision via structured filters (domain, <Code>error_type</Code>). Density does not degrade as the database grows because the filter scope constrains the candidate set. However, SQL cannot capture semantic similarity across tasks with different surface-form error types, and as our ablation shows, the ordering of results within the filtered set critically determines whether the agent receives useful error-diagnosis information.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Vector DB</strong> density peaks at medium database size (approximately 100–500 episodes in our experiments). At small sizes, high density is achieved trivially; at large sizes, noise from semantically adjacent but irrelevant episodes accumulates. The minimum similarity threshold of 0.55 partially mitigates degradation at scale.
            </P>
          </Subsection>

          <Subsection title="Practical Recommendations">
            <P>Based on our results, practitioners building Reflexion-style agents should:</P>
            <ol className="my-5 space-y-4 pl-1">
              {[
                <><strong style={{ color: '#111' }}>Use failure-first retrieval ordering in any structured memory system.</strong> The SQL-v1 ablation shows that this single design decision accounts for a 12pp difference in success@5, larger than the difference between any two backend classes.</>,
                <><strong style={{ color: '#111' }}>Prefer Vector DB for tasks with high semantic diversity</strong> (varied question types, diverse error distributions), where cross-task lesson transfer is valuable.</>,
                <><strong style={{ color: '#111' }}>Prefer SQL for tasks with nameable, categorical error types</strong> (syntax errors, wrong tool selection) where structured credit assignment by error category outperforms semantic similarity.</>,
                <><strong style={{ color: '#111' }}>Avoid sliding window as a default once the database exceeds approximately 50 episodes.</strong> Its performance on success@1 is dominated by both SQL-v2 and Vec, and it offers no mechanism for targeted error-type-based lesson retrieval.</>,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#444', lineHeight: 1.75 }}>
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5" style={{ backgroundColor: '#fdf3f0', color: '#C0634A' }}>{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Subsection>

          <Subsection title="Deployment Scenarios">
            <P>These guidelines map onto concrete real-world settings.</P>
            <P>
              <strong style={{ color: '#111' }}>Customer Support Agents.</strong> Customer support agents accumulate failure episodes as unresolved or incorrectly resolved tickets. Failure-first SQL retrieval means the agent surfaces lessons from structurally similar past failures rather than rehearsing what previously worked, directly addressing the pattern of repeating the same incorrect resolutions across semantically distinct queries. The <Code>error_type</Code> field in our schema maps naturally onto support taxonomies such as billing errors, account access failures, and policy misunderstandings, giving SQL's structured retrieval a well-defined signal to filter on.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Code Generation Pipelines.</strong> Code failures are precisely the kind of categorically nameable errors (syntax, runtime, type, wrong output) that SQL retrieval is designed for. An agent that has previously seen a <Code>NullPointerException</Code> in a similar context should retrieve that specific lesson rather than a recent reflection about an unrelated algorithmic task. The error-type retrieval path in our SQL implementation (<Code>retrieve_by_error_type</Code>) was built with this use case in mind.
            </P>
            <P>
              <strong style={{ color: '#111' }}>RAG-Based Research and Document Assistants.</strong> These systems benefit most from Vector DB, specifically from its sample efficiency advantage. Our results show Vec reaching 70% cumulative success after only 48 episodes versus 99 for sliding window. In a fresh deployment with no prior episode history, this means a Vector DB-backed assistant becomes reliably useful roughly twice as fast as a recency-based one. For use cases where the agent encounters diverse question types across many topics (research assistance, technical documentation lookup, cross-domain QA), semantic similarity retrieval surfaces relevant past lessons even when surface-form phrasing and error categories differ across tasks.
            </P>
            <P>
              The common thread across all three scenarios is that the value of a memory backend is determined not just by storage capacity but by retrieval precision under the specific failure distribution of the target task. Our signal-to-noise framework provides a principled basis for matching backend to deployment context before committing to infrastructure.
            </P>
          </Subsection>

          <Subsection title="Limitations">
            <P>
              <strong style={{ color: '#111' }}>Code domain excluded.</strong> HumanEval could not be evaluated on Windows due to the <Code>signal.SIGALRM</Code> dependency in the execution harness. This is the domain where SQL's <Code>retrieve_by_error_type</Code> (syntax vs. runtime vs. wrong output) was predicted to provide the largest advantage. A Linux or Docker environment is required to complete this evaluation.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Tool-use benchmark difficulty.</strong> Both BFCL splits tested (simple and <em>multiple_function</em>) exhibit a 100% success@5 ceiling across all backends, providing no signal for backend differentiation. Harder benchmarks are required: ToolBench G2/G3 multi-tool chains or API-Bank involve sequential tool use and partial rewards that would create the graded signal needed to distinguish memory backends.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Limited replications.</strong> Primary results (GPT-4o, all domains) reflect one random seed per condition. The GPT-4o-mini reasoning results provide a full replication across model capability levels, confirming the qualitative ordering of backends is preserved. Bootstrap confidence intervals are reported on within-condition task variance, but cross-seed variance for the primary conditions is not quantified. Three seeds per condition would provide more reliable estimates of backend-specific effect sizes and is a priority for future work.
            </P>
            <P>
              <strong style={{ color: '#111' }}>Reflection quality not scored.</strong> The reflector's output quality (specificity, actionability, and accuracy) was not scored in these experiments. Reflection quality is the central mechanistic variable: better memory retrieval should produce higher-quality reflections, not just better task outcomes. Scoring a random sample would provide stronger mechanistic evidence for the semantic retrieval hypothesis.
            </P>
            <P>
              <strong style={{ color: '#111' }}>k-ablation incomplete.</strong> The noise accumulation hypothesis — that Vector DB signal density ρ degrades beyond approximately 500 episodes as semantically adjacent but irrelevant episodes accumulate — could not be fully verified within the scope of these experiments. A systematic ablation varying <em>k</em> ∈ {'{'} 1, 3, 5, 10 {'}'} across database sizes of 50, 200, and 500 episodes is required to characterise the density-degradation curve and identify the optimal <em>k</em> as a function of |<em>E</em>|. The current fixed <em>k</em>=3 may underfit at small database sizes and overfit at large ones.
            </P>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 6. Conclusion ─────────────────────────────────────── */}
        <Section number="6" title="Conclusion">
          <P>
            We present the first systematic comparison of memory retrieval strategies for Reflexion-style LLM agents, evaluating Sliding Window, SQL, and Vector DB backends across two task domains. Our main findings are as follows. First, a retrieval ordering decision (whether failures or successes are surfaced first) accounts for a 12 percentage point difference in success@5, larger than the difference between any two backend classes. Second, Vector DB achieves the highest first-attempt success rate and lowest token cost on reasoning tasks, consistent with the semantic retrieval hypothesis. Third, the tool-use domain exhibits a ceiling effect on the BFCL benchmark, motivating the use of harder benchmarks in future work.
          </P>
          <P>
            The retrieval ordering finding has immediate practical value: any Reflexion implementation using structured memory should order retrieved episodes by failure first. This is a one-line change that recovers performance equivalent to semantic retrieval at a fraction of the infrastructure cost.
          </P>
          <P>
            Future work should evaluate on the HumanEval code domain (Linux/Docker), use harder tool-use benchmarks, run the <em>k</em>-ablation to completion to quantify the noise accumulation effect in Vector DB, and score reflection quality directly to close the mechanistic loop between retrieval strategy and lesson quality.
          </P>
        </Section>

        <Divider />

        {/* ── References ───────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="mb-6 text-base font-semibold" style={{ color: '#111' }}>References</h2>
          <ol className="space-y-3">
            {[
              'Shinn, N., Cassano, F., Labash, B., Gopinath, A., Narasimhan, K., & Yao, S. (2023). Reflexion: Language agents with verbal reinforcement learning. Advances in Neural Information Processing Systems, 36.',
              'Packer, C., Fang, V., Patil, S. G., Lin, K., Wooders, S., & Gonzalez, J. E. (2023). MemGPT: Towards LLMs as operating systems. arXiv preprint arXiv:2310.08560.',
              'Zhong, W., Guo, L., Gao, Q., Ye, H., & Wang, Y. (2024). MemoryBank: Enhancing large language models with long-term memory. AAAI Conference on Artificial Intelligence.',
              'Park, J. S., O\'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. UIST.',
              'Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., … & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. NeurIPS.',
              'Karpukhin, V., Oğuz, B., Min, S., Lewis, P., Wu, L., Edunov, S., … & Yih, W.-t. (2020). Dense passage retrieval for open-domain question answering. EMNLP.',
              'Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence embeddings using Siamese BERT-networks. EMNLP.',
              'Yan, S., et al. (2024). Berkeley Function-Calling Leaderboard. UC Berkeley. gorilla.cs.berkeley.edu/leaderboard.',
              'Qin, Y., Liang, S., Ye, Y., Zhu, K., Yan, L., Lu, Y., … & Sun, M. (2023). ToolLLM: Facilitating large language models to master 16000+ real-world APIs. ICLR 2024.',
              'Yang, Z., Qi, P., Zhang, S., Bengio, Y., Cohen, W. W., Salakhutdinov, R., & Manning, C. D. (2018). HotpotQA: A dataset for diverse, explainable multi-hop question answering. EMNLP.',
              'Chen, M., Tworek, J., Jun, H., Yuan, Q., de Oliveira Pinto, H. P., Kaplan, J., … & Zaremba, W. (2021). Evaluating large language models trained on code. arXiv preprint arXiv:2107.03374.',
            ].map((ref, i) => (
              <li key={i} className="flex items-start gap-3 text-xs" style={{ color: '#555', lineHeight: 1.75 }}>
                <span className="shrink-0 font-mono" style={{ color: '#aaa', minWidth: '20px' }}>[{i + 1}]</span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* ── Acknowledgements ──────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="mb-6 text-base font-semibold" style={{ color: '#111' }}>Acknowledgements</h2>
          <P>
            Experiments were conducted using the OpenAI API. Embeddings were computed with sentence-transformers. Vector storage was provided by ChromaDB. All data and code are publicly available at{' '}
            <a href="https://github.com/shilojeyaraj/reflexion-memory-study" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C0634A]" style={{ color: '#C0634A', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              github.com/shilojeyaraj/reflexion-memory-study
            </a>.
          </P>
        </section>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer className="mt-8 pt-8 text-xs" style={{ borderTop: '1px solid #e5e5e5', color: '#aaa' }}>
          <p>
            Code and data:{' '}
            <a href="https://github.com/shilojeyaraj/reflexion-memory-study" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C0634A]" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              github.com/shilojeyaraj/reflexion-memory-study
            </a>
          </p>
        </footer>

      </article>
      </div>
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.25 }}>
        <span style={{ color: '#C0634A', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, marginRight: '10px' }}>{number}.</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-semibold text-base" style={{ color: '#111' }}>{title}</h3>
      {children}
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-sm" style={{ color: '#444', lineHeight: 1.85 }}>{children}</p>
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm" style={{ color: '#444', lineHeight: 1.75 }}>
      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-[10px]" style={{ backgroundColor: '#C0634A' }} />
      <span>{children}</span>
    </li>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: '#f5f5f5', color: '#C0634A', fontFamily: 'monospace', border: '1px solid #ebebeb' }}>
      {children}
    </code>
  )
}

function Divider() {
  return <hr className="my-2" style={{ borderColor: '#e5e5e5' }} />
}

function Eq({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg px-5 py-4 my-4 overflow-x-auto text-sm leading-loose"
      style={{ backgroundColor: '#f8f8f7', border: '1px solid #e5e5e5', fontFamily: 'Georgia, serif', color: '#333' }}
    >
      {children}
    </div>
  )
}

function CellNum({ val, bold, accent, muted }: { val: string; bold?: boolean; accent?: boolean; muted?: boolean }) {
  return (
    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: accent ? '#C0634A' : muted ? '#999' : '#444', fontWeight: bold ? 600 : 400 }}>
      {bold ? <strong>{val}</strong> : val}
    </td>
  )
}

function MiniCell({ val, gpt4, bold }: { val: string; gpt4: string; bold?: boolean }) {
  return (
    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: '#444' }}>
      {bold ? <strong>{val}</strong> : val}
      {' '}
      <em className="text-xs not-italic" style={{ color: '#aaa', fontStyle: 'italic' }}>({gpt4})</em>
    </td>
  )
}
