import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 50% at 30% 70%, rgba(6,182,212,0.05), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(99,102,241,0.03), transparent), #000'

const outcomes = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'Drive More',
    accent: 'Bookings',
    desc: 'Capture after-hours calls and reduce abandonment.',
  },
  {
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: 'Achieve Higher',
    accent: 'Show Rates',
    desc: 'Smart reminders and easy rescheduling.',
  },
  {
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Create Happier',
    accent: 'Patients',
    desc: 'Quick answers about insurance, prep, and directions.',
  },
  {
    num: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94" />
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Deliver Shorter',
    accent: 'Waits',
    desc: 'Instant responses across phone, SMS, and chat.',
  },
]

function OutcomeCard({ num, icon, title, accent, desc, delay }) {
  return (
    <FadeUp delay={delay}>
      <GlassCard hover className="h-full">
        <div className="flex flex-col h-full">
          {/* Number + line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[clamp(11px,0.9vw,14px)] font-medium" style={{ color: 'var(--muted-2)' }}>{num}</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.12)' }}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="font-sans font-semibold text-[clamp(16px,1.4vw,22px)] text-white leading-tight mb-2">
            {title} <span style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{accent}</span>
          </h3>

          {/* Description */}
          <p className="font-sans text-[clamp(12px,1vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
        </div>
      </GlassCard>
    </FadeUp>
  )
}

export default function OutcomesSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={slideIndex + 1} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%]">
        {/* Header */}
        <div className="mb-[clamp(20px,3vw,40px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Outcomes
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>Outcomes that</SlideUpLine>
            <br />
            <SlideUpLine delay={0.3}>
              <i style={{ background: 'linear-gradient(135deg, #80838e 0%, #5a5d68 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                move access, cost, and safety
              </i>
            </SlideUpLine>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] mt-auto">
          {outcomes.map((o, i) => (
            <OutcomeCard key={i} {...o} delay={0.45 + i * 0.1} />
          ))}
        </div>
      </div>
    </Slide>
  )
}
