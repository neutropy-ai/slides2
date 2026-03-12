import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(6,182,212,0.04), transparent), #000'

const outcomes = [
  {
    num: '01',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <rect x="8" y="13" width="3" height="3" rx="0.5" />
      </>
    ),
    title: 'Drive More',
    highlight: 'Bookings',
    desc: 'Capture after-hours calls and reduce abandonment.',
  },
  {
    num: '02',
    icon: (
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
    ),
    title: 'Achieve Higher',
    highlight: 'Show Rates',
    desc: 'Smart reminders and easy rescheduling.',
  },
  {
    num: '03',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </>
    ),
    title: 'Create Happier',
    highlight: 'Patients',
    desc: 'Quick answers about insurance, prep, and directions.',
  },
  {
    num: '04',
    icon: (
      <>
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94" />
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </>
    ),
    title: 'Deliver',
    highlight: 'Shorter Waits',
    desc: 'Instant responses across phone, SMS, and chat.',
  },
]

function OutcomeIcon({ children }) {
  return (
    <div
      className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 mb-3"
      style={{ background: 'rgba(255,255,255,0.06)' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  )
}

export default function OutcomesSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={8} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <BlurReveal delay={0.15}>
          <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            Outcomes
          </p>
        </BlurReveal>
        <BlurReveal delay={0.25}>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 52px)', lineHeight: 1.04 }}>
            Outcomes that<br />
            <i style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))' }}>move access, cost, and safety</i>
          </h2>
        </BlurReveal>

        <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] mt-[clamp(24px,3vw,40px)] max-w-[900px]">
          {outcomes.map((o, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.1}>
              <GlassCard hover>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[clamp(10px,0.8vw,12px)] tracking-[0.08em]" style={{ color: 'var(--muted-2)' }}>{o.num}</span>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.12), transparent)' }} />
                </div>
                <OutcomeIcon>{o.icon}</OutcomeIcon>
                <h3 className="font-sans font-semibold text-[clamp(14px,1.3vw,20px)] text-white leading-tight">
                  {o.title} <span style={{ color: 'var(--muted)' }}>{o.highlight}</span>
                </h3>
                <p className="font-sans text-[clamp(11px,0.9vw,14px)] mt-1.5 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {o.desc}
                </p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
