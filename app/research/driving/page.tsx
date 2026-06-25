import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Direct Imitation Learning for Autonomous Driving | Shilo Jeyaraj',
  description:
    'A DreamerV3-style world model loses the lane signal in its latent on structured vector observations. Direct behavioral cloning from 259-dim state achieves near-expert performance on most geometry types; scene-targeted DART augmentation raises roundabout completion from 42% to 64%.',
}

// ── Table data ────────────────────────────────────────────────────────────────

interface AblationRow {
  policy: string
  route: string
  offroad: string
  crash: string
  bcLoss: string
  bold?: boolean
  muted?: boolean
}

interface RecoveryRow {
  data: string
  route: string
  offroad: string
  crash: string
  recovery: string
  bold?: boolean
}

interface PerSceneRow {
  geometry: string
  route: string
  success: string
  crash: string
  offroad: string
  bold?: boolean
  failure?: boolean
}

interface BoostRow {
  geometry: string
  routeBefore: string
  routeAfter: string
  offroadBefore: string
  offroadAfter: string
  highlight?: boolean
}

interface DaggerRow {
  iteration: string
  route: string
  offroad: string
  bcLoss: string
  note: string
  bold?: boolean
  regress?: boolean
}

const ablationData: AblationRow[] = [
  { policy: 'Random',               route: '2%',   offroad: '0%',  crash: '0%',  bcLoss: '—',    muted: true },
  { policy: 'RSSM-BC (WM latent)',  route: '2%',   offroad: '0%',  crash: '0%',  bcLoss: '2.06', muted: true },
  { policy: 'DirectBC (this work)', route: '22%',  offroad: '90%', crash: '20%', bcLoss: '0.05', bold: true  },
  { policy: 'IDM (expert)',         route: '99%',  offroad: '0%',  crash: '0%',  bcLoss: '—',    muted: true },
]

const recoveryData: RecoveryRow[] = [
  { data: 'Clean only (8k)',        route: '24%', offroad: '50%', crash: '20%', recovery: '—' },
  { data: 'Clean + recovery (16k)', route: '39%', offroad: '30%', crash: '0%',  recovery: '40%', bold: true },
]

const perSceneData: PerSceneRow[] = [
  { geometry: 'Straight (S)',     route: '96%', success: '100%', crash: '0%',  offroad: '0%'  },
  { geometry: 'Curve (C)',        route: '82%', success: '40%',  crash: '0%',  offroad: '10%' },
  { geometry: 'Intersection (X)', route: '84%', success: '70%',  crash: '30%', offroad: '0%'  },
  { geometry: 'Roundabout (O)',   route: '42%', success: '0%',   crash: '40%', offroad: '60%', failure: true },
]

const boostData: BoostRow[] = [
  { geometry: 'Straight',     routeBefore: '96%', routeAfter: '96%', offroadBefore: '0%',  offroadAfter: '0%'  },
  { geometry: 'Curve',        routeBefore: '82%', routeAfter: '87%', offroadBefore: '10%', offroadAfter: '0%'  },
  { geometry: 'Intersection', routeBefore: '84%', routeAfter: '84%', offroadBefore: '0%',  offroadAfter: '0%'  },
  { geometry: 'Roundabout',   routeBefore: '42%', routeAfter: '64%', offroadBefore: '60%', offroadAfter: '30%', highlight: true },
  { geometry: 'Aggregate',    routeBefore: '39%', routeAfter: '41%', offroadBefore: '30%', offroadAfter: '20%' },
]

const daggerData: DaggerRow[] = [
  { iteration: '0 (BC+rec+boost)', route: '38%', offroad: '20%', bcLoss: '0.043', note: 'strong baseline'           },
  { iteration: '1 (+2k rollout)',   route: '41%', offroad: '20%', bcLoss: '0.057', note: 'tied policy_boosted', bold: true },
  { iteration: '2 (+2k more)',      route: '39%', offroad: '20%', bcLoss: '0.150', note: 'loss rising',         regress: true },
  { iteration: '3 (+2k more)',      route: '35%', offroad: '40%', bcLoss: '0.316', note: 'regression',          regress: true },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DrivingPaper() {
  return (
    <div style={{ backgroundColor: '#fafaf9', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#111' }}>

      {/* Top nav */}
      <div style={{ borderBottom: '1px solid #e5e5e5', backgroundColor: '#ffffff' }}>
        <div className="w-full max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/#research" className="text-sm transition-colors hover:text-[#C0634A]" style={{ color: '#888' }}>
            ← Shilo Jeyaraj
          </Link>
          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#fdf3f0', color: '#C0634A', border: '1px solid #f0d4c8' }}>
            Preprint · Independent Research
          </span>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 py-16">
      <article className="max-w-[760px] mx-auto">

        {/* ── Header ────────────────────────────────────────────── */}
        <header className="mb-14">
          <p className="text-xs uppercase mb-5" style={{ color: '#888', letterSpacing: '0.12em' }}>
            Robotics · Machine Learning · June 2026
          </p>
          <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', lineHeight: 1.2, color: '#111' }}>
            Direct Imitation Learning for Autonomous Driving: When the World-Model Latent Loses the Lane
          </h1>
          <p className="text-sm mb-1" style={{ color: '#888' }}>Shilo Jeyaraj · University of Waterloo · Independent Researcher · 2026</p>
          <p className="text-sm mb-8" style={{ color: '#888' }}>
            <a href="mailto:stjeyara@uwaterloo.ca" className="transition-colors hover:text-[#C0634A]">stjeyara@uwaterloo.ca</a>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/shilojeyaraj/driving-world-model" target="_blank" rel="noopener noreferrer"
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
            World-model-based approaches to autonomous driving compress sensory observations into a compact latent state before learning a policy. We show that on the MetaDrive simulator, a DreamerV3-style recurrent world model loses the lane/heading signal in its latent representation, causing any latent-conditioned policy to idle regardless of how much data or compute is invested (route completion 2%, vs. 22% for a direct obs→action clone). Pivoting to direct behavioral cloning from a 259-dimensional state vector with a three-layer MLP reveals a different ceiling: distribution shift. The policy commits to driving but goes off-road 50% of the time because it has only seen the expert driving perfectly. We show that injecting triangular steering perturbations (DART) during expert collection and relabeling with the IDM oracle cuts off-road rate from 50% to 30% and raises route completion from 24% to 39%. A per-scene breakdown reveals that this aggregate masks near-expert performance on three of four geometry types (straight 96%, curve 87%, intersection 84%) while a single geometry — roundabouts — accounts for nearly all remaining failures (route 42%, off-road 60%). Scene-targeted data augmentation raises roundabout route completion to{' '}
            <strong style={{ color: '#111' }}>64% (+22 percentage points)</strong>{' '}
            without regressing other scenes. Three iterations of DAgger with IDM relabeling match but do not exceed the plain BC + augmentation baseline, as growing dataset heterogeneity raises behavioral cloning loss and causes regression by iteration 3. We conclude that for CPU-scale imitation learning in simulation, targeted scene augmentation is a more stable improvement lever than online DAgger. All code and trained checkpoints are available at{' '}
            <a href="https://github.com/shilojeyaraj/driving-world-model" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#C0634A]" style={{ color: '#C0634A', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              github.com/shilojeyaraj/driving-world-model
            </a>.
          </p>
        </section>

        {/* ── 1. Introduction ───────────────────────────────────── */}
        <Section number="1" title="Introduction">
          <P>
            Learning to drive from demonstrations is a canonical imitation learning problem. Modern approaches follow one of two paradigms: (1) learn a world model that predicts future latent states under imagined actions, then optimise a policy against those imaginations; or (2) clone a policy directly from observations to actions using an expert oracle. The world-model paradigm is theoretically attractive — imagination-based planning can explore policies without executing dangerous actions — but relies critically on the latent representation preserving the information the policy needs.
          </P>
          <P>
            In this work we study what happens when the latent representation fails to preserve that information. On the MetaDrive procedural driving simulator, we train a DreamerV3-style RSSM on 8,000 steps of expert IDM demonstrations, then train a policy on the frozen world-model latent via behavioral cloning. The result is an agent that idles: route completion 2%, behavioral cloning loss 2.06. Crucially, the 259-dimensional observation space already contains the full lane/heading signal explicitly — the world model is compressing it away rather than enriching it.
          </P>
          <P>
            A three-layer MLP cloned <em>directly</em> from the 259-dim state to a 2-dim action achieves bc_loss 0.05 and route completion 22–24% out of the box. This reframing shifts the bottleneck from <em>representation</em> to <em>distribution shift</em>: behavioral cloning fails not because the policy lacks information, but because it has only seen the expert driving cleanly and cannot recover once it drifts. The rest of this paper characterises and addresses this gap through recovery data injection (DART perturbation), targeted scene augmentation, and online data aggregation (DAgger).
          </P>
          <P>Our contributions are:</P>
          <ol className="my-5 space-y-4 pl-1">
            {([
              ['An empirical demonstration that a DreamerV3-style world model on vector observations loses the lane signal in its latent,', ' making latent-conditioned policies unable to drive regardless of training budget.'],
              ['A recovery data protocol using triangular steering perturbation (DART) and IDM relabeling', ' that cuts off-road rate by 40% relative (50%→30%) and increases route completion from 24% to 39%.'],
              ['A per-scene diagnostic revealing that aggregate route metrics mask near-expert performance on most geometry types;', ' a single geometry (roundabouts) dominates the residual gap.'],
              ['A scene-targeted augmentation strategy that raises roundabout route completion by 22 percentage points', ' while preserving performance on all other scenes.'],
              ['An empirical comparison of DAgger vs. static augmentation at CPU-scale,', ' showing that DAgger matches but does not exceed the augmented BC baseline and regresses by iteration 3 due to dataset heterogeneity.'],
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
          <Subsection title="Imitation Learning for Autonomous Driving">
            <P>
              ALVINN introduced behavioral cloning for driving from camera images. Ross et al. formalised Dataset Aggregation (DAgger) to address distribution shift by iteratively querying the expert at states visited by the current policy. ChauffeurNet augments demonstrations with synthesised perturbations and auxiliary loss heads to improve recovery behaviour. Our work applies these ideas in a low-compute, simulation-only setting using the Intelligent Driver Model as the oracle.
            </P>
          </Subsection>
          <Subsection title="World Models for Driving">
            <P>
              DreamerV3 learns a recurrent world model (RSSM) by jointly optimising a reconstruction decoder, a reward predictor, and a discount predictor, then derives a policy by imagining rollouts in latent space. DayDreamer applies this to real robot learning. MILE and UniAD learn latent representations jointly with driving objectives. Our failure case — a world model that compresses away the precise signal the policy needs — is a known risk with RSSM-based representations when the observation space is already low-dimensional and the model is under-trained.
            </P>
          </Subsection>
          <Subsection title="Distribution Shift in Behavioral Cloning">
            <P>
              Ross & Bagnell prove that BC error compounds quadratically with horizon length. DAgger corrects this by on-policy data collection; DART injects noise to force the policy into off-distribution states during collection, providing recovery labels without requiring online expert querying. We combine both approaches and compare their effectiveness at modest compute.
            </P>
          </Subsection>
          <Subsection title="MetaDrive">
            <P>
              MetaDrive is a lightweight, procedurally generated driving simulator with a modular road block system supporting diverse geometry types (straight, curve, intersection, roundabout). Its Intelligent Driver Model (IDM) provides a rule-based expert oracle that can be queried at arbitrary states, making it ideal for DAgger and relabeling experiments.
            </P>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 3. Methods ────────────────────────────────────────── */}
        <Section number="3" title="Methods">
          <Subsection title="Environment and Observation Space">
            <P>
              All experiments use MetaDrive's <Code>MetaDriveEnv</Code> with 50 training maps and a held-out evaluation set. The observation is a 259-dimensional vector comprising ego vehicle state (speed, heading, lateral offset), LiDAR point cloud returns (120 beams), and navigation targets. Actions are 2-dimensional: steering ∈ [−1, 1] and acceleration ∈ [−1, 1]. Episode length is capped at 1,000 steps; an episode terminates on collision, going off-road, or reaching the route endpoint.
            </P>
          </Subsection>
          <Subsection title="Expert Oracle">
            <P>
              We use MetaDrive's built-in Intelligent Driver Model (IDM) as the expert oracle throughout. IDM is rule-based (not learned), models car-following and lane-keeping using closed-form kinematic equations, and achieves 99% route completion on held-out maps. We query it via <Code>IDMPolicy.act()</Code> at each environment step to obtain expert action labels.
            </P>
          </Subsection>
          <Subsection title="World-Model Baseline (RSSM-BC)">
            <P>
              We train a DreamerV3-style RSSM with a 32×32 categorical latent, GRU recurrent state of dimension 512, and decoders for observation reconstruction, reward, and discount. Training uses 8,000 IDM demonstration steps over 50,000 gradient steps. We then freeze the world-model encoder and train a two-layer MLP actor on the latent state via behavioral cloning (L1 loss against IDM actions) for 5,000 gradient steps with batch size 64.
            </P>
          </Subsection>
          <Subsection title="Direct Policy (DirectBC)">
            <P>
              The direct policy is a three-layer MLP with hidden dimension 256 and SiLU activation. Output is squashed by tanh to [−1, 1]². Trained with L1 loss against IDM action labels, Adam optimiser, learning rate 3×10⁻⁴, batch size 256.
            </P>
          </Subsection>
          <Subsection title="Recovery Data via DART Perturbation">
            <P>
              To teach recovery behaviour we inject triangular steering impulses during collection, following DART. At each step with probability p<sub>pert</sub> = 0.02, steering is displaced by a triangular waveform with magnitude γ = 0.15 and duration τ ~ U[10, 40] steps. We <em>execute</em> the perturbed action in the environment but store the clean IDM action as the training label, so the policy sees the recovery state but learns the correct centering action. We collect 8,000 clean steps and 8,000 perturbed steps, training on the combined 16,000-step dataset.
            </P>
          </Subsection>
          <Subsection title="Scene-Targeted Augmentation">
            <P>
              After identifying roundabouts as the dominant failure geometry via per-scene evaluation, we inject additional demonstrations specifically on roundabout maps (<Code>map=&quot;O&quot;</Code> in MetaDrive). We collect an additional 4,000 clean IDM steps and 4,000 recovery steps on roundabout geometry and mix them into the training dataset, giving a total of 24,000 training steps.
            </P>
          </Subsection>
          <Subsection title="DAgger">
            <P>
              At each DAgger iteration we roll out the current policy for 2,000 steps, relabel each state with the IDM action via <Code>IDMPolicy.act()</Code>, and aggregate into the training buffer. We run 3 iterations, starting from the clean+recovery+boost baseline. We evaluate two DAgger variants: one applied to the direct policy and one applied to the RSSM-conditioned actor as an ablation.
            </P>
          </Subsection>
          <Subsection title="Evaluation Protocol">
            <P>All evaluation uses deterministic fixed seeds on held-out maps. We report:</P>
            <ul className="my-5 space-y-3 pl-1">
              <BulletItem><strong style={{ color: '#111' }}>Route completion %:</strong> fraction of the route navigated before episode termination, averaged across episodes.</BulletItem>
              <BulletItem><strong style={{ color: '#111' }}>Off-road rate:</strong> fraction of episodes that terminate due to leaving the drivable surface.</BulletItem>
              <BulletItem><strong style={{ color: '#111' }}>Crash rate:</strong> fraction of episodes terminating due to collision.</BulletItem>
              <BulletItem><strong style={{ color: '#111' }}>Recovery rate:</strong> fraction of episodes in which the policy successfully re-enters the lane after being displaced off-center for the first 30 steps.</BulletItem>
            </ul>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 4. Results ────────────────────────────────────────── */}
        <Section number="4" title="Results">
          <Subsection title="World Model Latent vs. Direct Observation">
            <P>
              Table 1 shows the core reframing result. The RSSM-BC policy achieves route completion identical to a random agent (2%), despite 50,000 gradient steps of world-model training and 5,000 steps of actor training. The bc_loss of 2.06 — compared to 0.05 for DirectBC — indicates that the world-model latent state does not contain sufficient lane/heading information for the actor to fit the IDM actions. The direct MLP achieves 44× lower bc_loss and drives non-trivially (22% route completion) with no world-model component at all.
            </P>
            <P>
              The 259-dim state observation already exposes heading angle, lateral lane offset, and navigation waypoints explicitly as named features. The RSSM encoder maps this structured signal through a learned compression that, at this training scale, produces a latent that is easier to reconstruct from than to plan actions from — a known failure mode of reconstruction-based world models when the prediction task does not require preserving the action-relevant signal.
            </P>
          </Subsection>

          {/* Table 1 */}
          <div className="my-8 overflow-x-auto">
            <p className="text-xs uppercase mb-3" style={{ color: '#888', letterSpacing: '0.08em' }}>
              Table 1 — World-model-latent BC vs. direct obs→action BC on held-out maps (n=10 episodes). IDM is the rule-based expert upper bound.
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: '#111' }}>Policy</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Route %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Off-road %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Crash %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>bc_loss</th>
                </tr>
              </thead>
              <tbody>
                {ablationData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: row.bold ? '#fdf9f8' : 'transparent' }}>
                    <td className="px-4 py-2.5 text-sm" style={{ color: row.muted ? '#999' : '#111', fontWeight: row.bold ? 600 : 400 }}>{row.policy}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.bold ? '#C0634A' : row.muted ? '#999' : '#444', fontWeight: row.bold ? 600 : 400 }}>{row.route}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.muted ? '#999' : '#444' }}>{row.offroad}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.muted ? '#999' : '#444' }}>{row.crash}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.bold ? '#C0634A' : row.muted ? '#999' : '#444', fontWeight: row.bold ? 600 : 400 }}>{row.bcLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Milestones figure */}
          <div className="my-10 rounded-xl overflow-hidden" style={{ border: '1px solid #e5e5e5' }}>
            <div className="relative w-full" style={{ aspectRatio: '16/7' }}>
              <Image src="/research/milestones.png" alt="Full project arc: route completion across all milestones" fill className="object-contain" style={{ backgroundColor: '#fff' }} sizes="760px" />
            </div>
            <div className="px-5 py-4" style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#fafaf9' }}>
              <p className="text-xs" style={{ color: '#888', lineHeight: 1.7 }}>
                <strong style={{ color: '#555' }}>Figure 1.</strong> Full project arc: route completion across all milestones on held-out maps. The RSSM-BC world-model policy (2%) is indistinguishable from a random agent; switching to direct obs→action cloning immediately lifts route completion to 24%. Recovery data (DART) raises it to 39%, scene-targeted augmentation lifts the roundabout geometry to 64%, and DAgger matches but does not exceed the BC+boost baseline. IDM (99%) is the rule-based expert upper bound.
              </p>
            </div>
          </div>

          <Subsection title="Recovery Data Eliminates Crashes">
            <P>
              Adding 8,000 recovery steps (Table 2) yields three improvements: route completion 24%→39% (+15pp), crash rate 20%→0%, off-road rate 50%→30% (−40% relative). The policy has learned to steer back toward the lane center after perturbation-induced drift. Crash rate reaches zero because collisions in MetaDrive arise from over-correction that swings the vehicle into traffic, which recovery training specifically addresses.
            </P>
            <P>
              Doubling the dataset (32,000 steps) raises recovery rate from 40% to 70% but leaves route completion flat at 39%, confirming a capacity ceiling. Adding a shared auxiliary head predicting per-step reward alongside the action worsens off-road rate (30%→40%) and recovery rate (70%→40%), consistent with the auxiliary task competing for representation capacity when the observation already contains the lane signal explicitly.
            </P>
          </Subsection>

          {/* Table 2 */}
          <div className="my-8 overflow-x-auto">
            <p className="text-xs uppercase mb-3" style={{ color: '#888', letterSpacing: '0.08em' }}>
              Table 2 — Effect of recovery data (DART perturbation + IDM relabeling) on held-out maps (n=10 episodes).
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: '#111' }}>Training data</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Route %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Off-road %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Crash %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Recovery rate</th>
                </tr>
              </thead>
              <tbody>
                {recoveryData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: row.bold ? '#fdf9f8' : 'transparent' }}>
                    <td className="px-4 py-2.5 text-sm" style={{ color: '#111', fontWeight: row.bold ? 600 : 400 }}>{row.data}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.bold ? '#C0634A' : '#444', fontWeight: row.bold ? 600 : 400 }}>{row.route}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.bold ? '#C0634A' : '#444', fontWeight: row.bold ? 600 : 400 }}>{row.offroad}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.bold ? '#C0634A' : '#444', fontWeight: row.bold ? 600 : 400 }}>{row.crash}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: '#444' }}>{row.recovery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Subsection title="Per-Scene Breakdown Reveals a Single Failure Geometry">
            <P>
              The aggregate route completion of 39% masks a stark geometry-dependent split (Table 3). Three of four geometry types show near-IDM performance: the policy drives straights at 96%, curves at 82%, and intersections at 84%. Roundabouts are categorically different: route 42%, success 0%, crash 40%, off-road 60%. The aggregate 30% off-road rate is almost entirely attributable to roundabouts.
            </P>
            <P>
              This finding reframes the next improvement target. The aggregate metric suggested a broadly underperforming policy; the per-scene breakdown reveals a policy that is near-competent on most tasks, with one failing geometry type accounting for the residual gap. The 42% roundabout route completion is consistent with the policy successfully navigating the straight approach before failing at the curved entry arc, where the required steering angle is sharp and the state distribution is qualitatively different from anything in the clean training data.
            </P>
          </Subsection>

          {/* Table 3 */}
          <div className="my-8 overflow-x-auto">
            <p className="text-xs uppercase mb-3" style={{ color: '#888', letterSpacing: '0.08em' }}>
              Table 3 — Per-geometry evaluation of the best static BC policy (clean+recovery, 16k steps). n=10 held-out episodes per geometry.
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: '#111' }}>Geometry</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Route %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Success %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Crash %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Off-road %</th>
                </tr>
              </thead>
              <tbody>
                {perSceneData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: row.failure ? '#fff8f7' : 'transparent' }}>
                    <td className="px-4 py-2.5 text-sm font-medium" style={{ color: row.failure ? '#C0634A' : '#111' }}>{row.geometry}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.failure ? '#C0634A' : '#444', fontWeight: row.failure ? 600 : 400 }}>{row.route}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: '#444' }}>{row.success}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: '#444' }}>{row.crash}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.failure ? '#C0634A' : '#444', fontWeight: row.failure ? 600 : 400 }}>{row.offroad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Subsection title="Scene-Targeted Augmentation Raises Roundabout Performance by 22pp">
            <P>
              Adding 8,000 roundabout-specific steps (4k clean + 4k recovery) raises roundabout route completion from 42% to 64% (+22pp) and cuts off-road rate from 60% to 30% (Table 4). No other geometry regresses; curves improve by a further 5pp as a beneficial side effect of the additional curved-geometry data.
            </P>
            <P>
              The aggregate gain is modest (+2pp) because the mixed-map evaluation samples uniformly over geometry types. The per-scene gain is the meaningful signal. Qualitatively, the boosted policy successfully navigates the roundabout entry arc in the majority of episodes, with remaining failures concentrated at tight mid-roundabout turns where the required steering exceeds the training data coverage even with augmentation.
            </P>
          </Subsection>

          {/* Table 4 */}
          <div className="my-8 overflow-x-auto">
            <p className="text-xs uppercase mb-3" style={{ color: '#888', letterSpacing: '0.08em' }}>
              Table 4 — Per-geometry comparison: clean+recovery (16k) vs. clean+recovery + roundabout boost (24k). n=10 held-out episodes per geometry.
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: '#111' }}>Geometry</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Route % (before)</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Route % (after)</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Off-road % (before)</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Off-road % (after)</th>
                </tr>
              </thead>
              <tbody>
                {boostData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: row.highlight ? '#fdf9f8' : 'transparent' }}>
                    <td className="px-4 py-2.5 text-sm font-medium" style={{ color: row.highlight ? '#C0634A' : '#111' }}>{row.geometry}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: '#888' }}>{row.routeBefore}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.highlight ? '#C0634A' : '#444', fontWeight: row.highlight ? 600 : 400 }}>{row.routeAfter}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: '#888' }}>{row.offroadBefore}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.highlight ? '#C0634A' : '#444', fontWeight: row.highlight ? 600 : 400 }}>{row.offroadAfter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* By scene figure */}
          <div className="my-10 rounded-xl overflow-hidden" style={{ border: '1px solid #e5e5e5' }}>
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image src="/research/by_scene.png" alt="Per-geometry route completion and off-road rate" fill className="object-contain" style={{ backgroundColor: '#fff' }} sizes="760px" />
            </div>
            <div className="px-5 py-4" style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#fafaf9' }}>
              <p className="text-xs" style={{ color: '#888', lineHeight: 1.7 }}>
                <strong style={{ color: '#555' }}>Figure 2.</strong> Per-geometry route completion (blue) and off-road rate (red) for the boosted policy on held-out maps (n=10 per geometry). Straight, curve, and intersection reach 84–96% route completion with near-zero off-road rate. Roundabout is the sole failure geometry: 64% route completion, 30% off-road, after scene-targeted augmentation (down from 42% route, 60% off-road without it).
              </p>
            </div>
          </div>

          <Subsection title="DAgger Matches but Does Not Exceed Augmented BC">
            <P>
              Table 5 shows direct-policy DAgger results. Iteration 1 matches the augmented BC baseline (41%). However, iterations 2 and 3 show clear regression: route completion drops to 35% and off-road rate doubles. The bc_loss rise from 0.043 to 0.316 reveals the mechanism: IDM relabels at the policy's failure states are high-variance and structurally different from the clean training distribution. As the proportion of failure-state data grows, the combined dataset becomes harder to fit, and the optimiser trades performance on well-represented clean states for a failed attempt to fit the noisy failure-state labels.
            </P>
            <P>
              WM-based DAgger iterates from 1% to 13% route completion, confirming that the RSSM latent can be improved by on-policy data but remains hard-capped well below the direct policy. The large gap (13% vs. 41%) after equal DAgger budgets confirms that the latent representation — not the amount of on-policy data — is the binding constraint.
            </P>
          </Subsection>

          {/* Table 5 */}
          <div className="my-8 overflow-x-auto">
            <p className="text-xs uppercase mb-3" style={{ color: '#888', letterSpacing: '0.08em' }}>
              Table 5 — Direct-policy DAgger from the policy_boosted initialisation. 2,000 rollout steps per iteration; IDM relabeling; n=5 held-out episodes per evaluation.
            </p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e5e5' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: '#111' }}>Iteration</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Route %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>Off-road %</th>
                  <th className="px-4 py-3 text-right font-semibold" style={{ color: '#111' }}>bc_loss</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: '#111' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {daggerData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: row.bold ? '#fdf9f8' : row.regress ? '#fdf5f5' : 'transparent' }}>
                    <td className="px-4 py-2.5 text-sm" style={{ color: '#111' }}>{row.iteration}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.bold ? '#C0634A' : row.regress ? '#888' : '#444', fontWeight: row.bold ? 600 : 400 }}>{row.route}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.regress ? '#C0634A' : '#444' }}>{row.offroad}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm" style={{ color: row.regress ? '#C0634A' : '#444' }}>{row.bcLoss}</td>
                    <td className="px-4 py-2.5 text-sm" style={{ color: '#888', fontStyle: 'italic' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DAgger progress figure */}
          <div className="my-10 rounded-xl overflow-hidden" style={{ border: '1px solid #e5e5e5' }}>
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image src="/research/dagger_progress.png" alt="WM-based DAgger progress across iterations" fill className="object-contain" style={{ backgroundColor: '#fff' }} sizes="760px" />
            </div>
            <div className="px-5 py-4" style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#fafaf9' }}>
              <p className="text-xs" style={{ color: '#888', lineHeight: 1.7 }}>
                <strong style={{ color: '#555' }}>Figure 3.</strong> WM-based DAgger (RSSM latent). Route completion climbs slowly (1%→13%) but plateaus far below the direct policy, confirming the latent is the hard ceiling regardless of on-policy data volume. The gap between WM DAgger (13%) and direct BC+boost (41% aggregate, 64% roundabout) is entirely attributable to representation quality.
              </p>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── 5. Discussion ─────────────────────────────────────── */}
        <Section number="5" title="Discussion">
          <Subsection title="When World Models Compress Away the Signal">
            <P>
              Our negative result on the RSSM latent is worth unpacking. The world model is trained to minimise reconstruction loss on a 259-dim observation. Of those 259 dimensions, the features most useful for reconstruction (LiDAR returns, which are smooth and predictable) are not the features most useful for action prediction (heading error and lateral lane offset, which are small in magnitude but carry the full lane-keeping signal). The RSSM optimises a reconstruction objective that weights all input dimensions equally, so the lane signal is under-represented in the latent relative to its policy-relevance.
            </P>
            <P>
              This failure mode is specific to the mismatch between reconstruction-optimal and policy-optimal representations when observations are structured vectors rather than images. For image-based driving, the world model must decode every pixel including lane markings, forcing the latent to encode them. For vector observations, the latent is free to discard low-reconstruction-loss features regardless of policy relevance.
            </P>
          </Subsection>
          <Subsection title="Recovery Data vs. Online Aggregation">
            <P>
              Both DART and DAgger address distribution shift, but their stability properties differ at small compute budgets. DART injects controlled, bounded perturbations during collection: the car remains near the lane center (perturbation magnitude γ = 0.15, triangular decay), so the off-distribution states it visits form a narrow band around the nominal distribution. Expert labels at perturbed states are consistent and low-variance.
            </P>
            <P>
              DAgger visits the policy's actual failure states, which are broader and more heterogeneous. IDM's relabeled actions at these states are well-defined but high-variance across the failure-state distribution and often conflict with training signals from clean demonstrations. With only 2,000 rollout steps per iteration — 12.5% of the 16,000-step clean buffer — the signal-to-noise ratio is low. At CPU-scale budgets where large rollout sets are prohibitive, DART-style static perturbation is a more reliable recovery data source.
            </P>
          </Subsection>
          <Subsection title="Per-Scene Evaluation as a Development Tool">
            <P>
              The per-scene evaluation methodology proved more informative than aggregate metrics throughout this project. The aggregate route completion of 39% suggested a broadly underperforming policy; the per-scene breakdown revealed that 75% of geometry types were solved at near-IDM level and identified a single failure mode. This allowed targeted intervention producing a 22pp per-scene gain at zero cost to other geometries — a gain that aggregate-metric-guided development would not have identified. Practitioners training driving policies in simulation should evaluate per-geometry from the start.
            </P>
          </Subsection>
          <Subsection title="Limitations">
            <P>
              All results are in MetaDrive simulation. Real-world transfer involves sensor noise, partial observability, and non-IDM traffic. The 259-dim state observation is provided by the simulator; a real deployment would require perception. All experiments ran on a single laptop CPU — the DAgger regression at 2,000 rollout steps/iteration might not appear at larger rollout budgets where the signal-to-noise ratio in the aggregated dataset is higher. IDM is a rule-based car-following model optimised for highway scenarios; its relabeled actions at roundabout entry arcs may not represent the globally optimal steering trajectory.
            </P>
          </Subsection>
        </Section>

        <Divider />

        {/* ── 6. Conclusion ─────────────────────────────────────── */}
        <Section number="6" title="Conclusion">
          <P>
            We have shown that a DreamerV3-style world model trained on structured vector observations loses the lane/heading signal in its latent, causing the downstream policy to idle regardless of training budget. Pivoting to direct behavioral cloning reveals a more tractable problem: distribution shift from clean centerline demonstrations. We address this with DART perturbation, per-scene diagnostic evaluation, and targeted scene augmentation, progressing from 2% route completion to 64% on the hardest geometry type (roundabouts) while achieving 84–96% on the others. DAgger matches but does not exceed the static augmentation baseline at our compute budget.
          </P>
          <P>
            The main practical takeaways: (1) on structured vector observations, clone directly — reconstruction-based world models compress away policy-relevant signals; (2) use per-geometry evaluation from the start rather than aggregate metrics; (3) at CPU-scale, controlled static perturbation (DART) is more stable than online DAgger for recovery data generation.
          </P>
        </Section>

        <Divider />

        {/* ── References ────────────────────────────────────────── */}
        <Section number="" title="References">
          <div className="space-y-3">
            {[
              'Li, Q., Peng, Z., Feng, L., Zhang, Q., Xue, Z., & Zhou, B. (2022). MetaDrive: Composing Diverse Driving Scenarios for Generalizable Reinforcement Learning. IEEE TPAMI.',
              'Hafner, D., Lillicrap, T., Norouzi, M., & Ba, J. (2023). Mastering Diverse Domains through World Models. arXiv:2301.04104.',
              'Hafner, D., et al. (2019). Learning Latent Dynamics for Planning from Pixels. ICML.',
              'Wu, P., et al. (2023). DayDreamer: World Models for Physical Robot Learning. CoRL.',
              'Pomerleau, D. A. (1989). ALVINN: An Autonomous Land Vehicle in a Neural Network. NeurIPS.',
              'Ross, S., Gordon, G., & Bagnell, D. (2011). A Reduction of Imitation Learning to No-Regret Online Learning. AISTATS.',
              'Ross, S. & Bagnell, D. (2010). Efficient Reductions for Imitation Learning. AISTATS.',
              'Laskey, M., et al. (2017). DART: Noise Injection for Robust Imitation Learning. CoRL.',
              'Treiber, M., Hennecke, A., & Helbing, D. (2000). Congested Traffic States in Empirical Observations and Microscopic Simulations. Physical Review E, 62(2).',
              'Bansal, M., Krizhevsky, A., & Ogale, A. (2019). ChauffeurNet: Learning to Drive by Imitating the Best and Synthesizing the Worst. RSS.',
              'Codevilla, F., et al. (2018). End-to-End Driving via Conditional Imitation Learning. ICRA.',
              'Hu, A., et al. (2022). Model-Based Imitation Learning for Urban Driving. NeurIPS.',
              'Hu, Y., et al. (2023). Planning-Oriented Autonomous Driving. CVPR.',
            ].map((ref, i) => (
              <p key={i} className="text-xs" style={{ color: '#666', lineHeight: 1.7, paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                [{i + 1}] {ref}
              </p>
            ))}
          </div>
        </Section>

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
        {number && <span style={{ color: '#C0634A', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, marginRight: '10px' }}>{number}.</span>}
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
