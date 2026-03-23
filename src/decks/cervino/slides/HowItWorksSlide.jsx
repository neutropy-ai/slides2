import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(6,182,212,0.04), transparent), #000'

const steps = [
  {
    n: 1,
    title: 'We audit your setup',
    desc: "We map your consultants, phone lines, and patient journey. Understand what's being missed and where.",
  },
  {
    n: 2,
    title: 'We build and configure',
    desc: "Each consultant gets a dedicated AI agent. Trained on their specialty, their schedule, their protocols.",
  },
  {
    n: 3,
    title: 'It goes live',
    desc: "Calls are answered. Appointments booked. Follow-ups sent. Your team handles the exceptions.",
  },
]

export default function HowItWorksSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={3} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <div className="mb-[clamp(12px,1.5vw,20px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--teal)' }}>
              How It Works
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>
              Three steps.{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Then it runs.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)] mt-[clamp(24px,3vw,40px)]">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.12}>
              <div
                className="rounded-2xl overflow-hidden relative h-full"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderTop: '2px solid var(--teal)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.15) 50%, transparent)' }}
                />
                <div className="p-[clamp(18px,2vw,28px)]">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-2))' }}
                    >
                      {s.n}
                    </div>
                  </div>
                  <h3 className="font-sans font-semibold text-[clamp(15px,1.3vw,20px)] text-white mb-2">{s.title}</h3>
                  <p className="font-sans text-[clamp(12px,1vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
