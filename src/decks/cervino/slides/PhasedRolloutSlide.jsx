import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 75% 55%, rgba(6,182,212,0.05), transparent), #000'

const phases = [
  {
    num: '01', tag: 'Go Live', title: 'Week 1–2',
    items: [
      'AI Receptionist trained on all 7 specialties',
      'Intelligent routing live on inbound calls',
      'WhatsApp reminders configured per department',
    ],
  },
  {
    num: '02', tag: 'Layer On', title: 'Week 3–4',
    items: [
      'GP referral agent goes live',
      'Waitlist backfill activated',
      'Specialty-specific prep and follow-ups',
    ],
  },
  {
    num: '03', tag: 'Scale', title: 'Month 2+',
    items: [
      'Deploy to first consulting client',
      'Template the setup for repeatable rollout',
      'AI comms as a standard deliverable',
    ],
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
            Your clinic first. Then your <i style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))' }}>clients.</i>
          </h2>
        </BlurReveal>

        <FadeUp delay={0.5} className="mt-[clamp(28px,4vw,48px)]">
          <div className="grid grid-cols-3 gap-[clamp(24px,3vw,48px)] max-w-[1000px]">
            {phases.map((p, i) => (
              <div key={i} className="flex flex-col">
                {/* Number + line */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-[clamp(11px,0.9vw,13px)] font-semibold tracking-wide"
                    style={{ color: i === 2 ? 'var(--teal)' : 'var(--muted-2)' }}
                  >
                    {p.num}
                  </span>
                  <div className="flex-1 h-px" style={{ background: i === 2 ? 'linear-gradient(90deg, var(--teal), transparent)' : 'rgba(255,255,255,0.08)' }} />
                </div>
                {/* Tag */}
                <span
                  className="text-[9px] font-semibold tracking-[0.12em] uppercase mb-1.5"
                  style={{ color: i === 2 ? 'var(--teal)' : 'var(--muted)' }}
                >
                  {p.tag}
                </span>
                {/* Title */}
                <h3 className="font-sans font-semibold text-[clamp(16px,1.4vw,22px)] text-white mb-3">{p.title}</h3>
                {/* Items */}
                <div className="flex flex-col gap-1.5">
                  {p.items.map((item, j) => (
                    <div key={j} className="flex gap-2 text-[clamp(11px,0.9vw,14px)]" style={{ color: 'var(--muted)', lineHeight: 1.5 }}>
                      <span className="shrink-0" style={{ color: i === 2 ? 'var(--teal)' : 'var(--muted-2)' }}>+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Slide>
  )
}
