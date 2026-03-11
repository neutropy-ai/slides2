import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import FrostedOverlay from '../../../components/glass/FrostedOverlay'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(6,182,212,0.05), transparent), #000'

const pillars = [
  { title: 'Audit', desc: 'We map every call flow, specialty, and admin bottleneck before writing a single line of code.' },
  { title: 'Build', desc: 'Custom AI agents tuned to your specialties, consultants, and booking systems.' },
  { title: 'Manage', desc: 'Ongoing monitoring, prompt tuning, and escalation handling. We run it so you don\'t.' },
]

export default function ConsultingPlaySlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={8} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%] gap-[clamp(16px,2.5vw,28px)]">
        <div className="max-w-[60%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              The Consulting Model
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3vw, 48px)', lineHeight: 1.04 }}>
              Not a platform. A <i style={{ color: 'var(--teal)' }}>managed service.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3 max-w-[480px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              No logins to learn. No dashboards to check. We embed into your operations and handle everything end to end.
            </p>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)] mt-auto">
          {pillars.map((p, i) => (
            <FadeUp key={i} delay={0.5 + i * 0.12}>
              <GlassCard variant="elevated" hover>
                <div className="font-sans text-[clamp(10px,0.8vw,13px)] font-bold tracking-widest mb-3" style={{ color: 'var(--teal)' }}>
                  0{i + 1}
                </div>
                <h3 className="font-sans font-semibold text-[clamp(16px,1.4vw,22px)] text-white mb-2">{p.title}</h3>
                <p className="font-sans text-[clamp(12px,1vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.9}>
          <FrostedOverlay tealAccent>
            <p className="font-sans text-[clamp(12px,1vw,16px)] leading-relaxed" style={{ color: 'var(--muted)' }}>
              <span className="text-white font-medium">Zero internal IT dependency.</span> We integrate with your existing phone system, PAS, and booking tools. No infrastructure changes required.
            </p>
          </FrostedOverlay>
        </FadeUp>
      </div>
    </Slide>
  )
}
