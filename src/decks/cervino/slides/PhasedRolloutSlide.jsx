import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 40% 60%, rgba(6,182,212,0.05), transparent 50%), radial-gradient(ellipse 40% 40% at 90% 20%, rgba(14,165,233,0.03), transparent), #000'

const phases = [
  {
    phase: 'Phase 1',
    timeline: 'Weeks 1–3',
    title: 'Discovery & Audit',
    items: ['Map call flows per specialty', 'Identify referral bottlenecks', 'Baseline metrics capture'],
  },
  {
    phase: 'Phase 2',
    timeline: 'Weeks 4–6',
    title: 'Build & Test',
    items: ['Deploy AI receptionist (1 specialty)', 'WhatsApp confirmation flow', 'Staff shadow testing period'],
  },
  {
    phase: 'Phase 3',
    timeline: 'Weeks 7–10',
    title: 'Scale & Optimize',
    items: ['Roll out to all specialties', 'Activate outbound referral agent', 'Performance review & tuning'],
  },
]

export default function PhasedRolloutSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={9} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%] gap-[clamp(16px,2.5vw,28px)]">
        <div className="max-w-[60%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Rollout Plan
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3vw, 48px)', lineHeight: 1.04 }}>
              Live in 10 weeks. <i style={{ color: 'var(--teal)' }}>No disruption.</i>
            </h2>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)] mt-auto flex-1">
          {phases.map((p, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.12}>
              <GlassCard variant="elevated" hover className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-sans text-[clamp(10px,0.8vw,13px)] font-bold tracking-widest" style={{ color: 'var(--teal)' }}>
                    {p.phase}
                  </span>
                  <span className="font-sans text-[clamp(10px,0.8vw,12px)]" style={{ color: 'var(--muted-2)' }}>
                    {p.timeline}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-[clamp(15px,1.3vw,20px)] text-white mb-3">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--teal)' }} />
                      <span className="font-sans text-[clamp(11px,0.9vw,14px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
