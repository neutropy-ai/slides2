import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 60% at 25% 70%, rgba(6,182,212,0.07), transparent), radial-gradient(ellipse 40% 30% at 80% 15%, rgba(14,165,233,0.03), transparent), #080a0f'

const steps = [
  { num: '01', title: 'Client Practice', desc: 'Has communication gaps — missed calls, no-shows, manual follow-ups' },
  { num: '02', title: 'Cervino Audit', desc: 'You identify the problems and recommend AI-powered solutions' },
  { num: '03', title: 'Neutropy Deploys', desc: 'We build, integrate, and manage everything end-to-end' },
]

export default function ConsultingPlaySlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={8} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <BlurReveal delay={0.15}>
          <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            The Consulting Play
          </p>
        </BlurReveal>
        <BlurReveal delay={0.25}>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 4vw, 64px)', lineHeight: 1.04 }}>
            A new service line.<br />
            <i style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))' }}>Recurring revenue.</i>
          </h2>
        </BlurReveal>
        <BlurReveal delay={0.5}>
          <p className="mt-3.5 max-w-[600px]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
            Every practice Cervino consults for is a potential deployment. You own the relationship. We handle the technology.
          </p>
        </BlurReveal>

        <FadeUp delay={0.7} className="mt-[clamp(28px,4vw,48px)]">
          <div className="grid grid-cols-3 gap-[clamp(16px,2vw,32px)] max-w-[900px]">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col">
                {/* Step number + line */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[clamp(11px,0.9vw,13px)] font-semibold tracking-wide"
                    style={{ color: i === 2 ? 'var(--teal)' : 'var(--muted-2)' }}
                  >
                    {s.num}
                  </span>
                  <div className="flex-1 h-px" style={{ background: i === 2 ? 'linear-gradient(90deg, var(--teal), transparent)' : 'rgba(255,255,255,0.08)' }} />
                </div>
                {/* Content */}
                <h4 className="font-sans font-semibold text-[clamp(14px,1.15vw,18px)] text-white mb-1.5">{s.title}</h4>
                <p className="text-[clamp(11px,0.9vw,14px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Slide>
  )
}
