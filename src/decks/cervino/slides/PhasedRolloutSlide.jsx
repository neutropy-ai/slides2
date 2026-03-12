import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 75% 55%, rgba(6,182,212,0.05), transparent), #000'

const phases = [
  {
    n: 1, tag: 'GO LIVE', title: 'Week 1 to 2',
    desc: 'AI Receptionist trained on all 7 specialties. Intelligent routing live on inbound calls. WhatsApp reminders configured per department.',
  },
  {
    n: 2, tag: 'LAYER ON', title: 'Week 3 to 4',
    desc: 'GP referral agent goes live. Waitlist backfill activated. Specialty-specific prep instructions and post-visit follow-ups.',
  },
  {
    n: 3, tag: 'SCALE', title: 'Month 2+',
    desc: 'Deploy to your first consulting client. Template the setup. Build the repeatable model. AI communication as a standard deliverable.',
  },
]

export default function PhasedRolloutSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={9} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <BlurReveal delay={0.15}>
          <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            Phased Rollout
          </p>
        </BlurReveal>
        <BlurReveal delay={0.25}>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 52px)', lineHeight: 1.04 }}>
            Your clinic first. Then your <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>clients.</i>
          </h2>
        </BlurReveal>

        <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)] mt-[clamp(28px,3vw,40px)] max-w-[1000px]">
          {phases.map((p, i) => (
            <FadeUp key={i} delay={0.5 + i * 0.1}>
              <div
                className="rounded-2xl overflow-hidden relative"
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
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-2))' }}
                    >
                      {p.n}
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: 'var(--teal)' }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-[clamp(14px,1.2vw,18px)] text-white mb-1.5">{p.title}</h3>
                  <p className="font-sans text-[clamp(12px,1vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
