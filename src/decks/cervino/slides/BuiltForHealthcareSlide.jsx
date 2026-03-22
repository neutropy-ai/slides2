import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(99,102,241,0.03), transparent), #000'

const capabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Speaks your patient's language",
    desc: 'Detects the language automatically. Responds in kind. No setup per patient.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'No more 8am phone rush',
    desc: 'On at 3am. On at 3pm. Covers the peaks that burn out your front desk.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: '50 calls at once. Zero wait.',
    desc: 'No patient queues. No engaged tone. Every call answered first ring.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    title: 'Knows when to hand off',
    desc: 'Confidence thresholds on every decision. Escalates to a human when it should. Not before. Not after.',
    highlighted: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Patient data stays off the line',
    desc: 'No medical records discussed over the phone. Books, routes, confirms. Nothing clinical.',
  },
]

function CapabilityCard({ icon, title, desc, highlighted, delay }) {
  return (
    <FadeUp delay={delay}>
      <GlassCard variant={highlighted ? 'teal' : 'default'} hover className="h-full">
        <div className="flex flex-col gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: highlighted ? 'rgba(6,182,212,0.12)' : 'rgba(6,182,212,0.06)',
              border: `1px solid ${highlighted ? 'rgba(6,182,212,0.2)' : 'rgba(6,182,212,0.08)'}`,
            }}
          >
            {icon}
          </div>
          <h3 className="font-sans font-semibold text-[clamp(14px,1.2vw,18px)] text-white leading-snug">{title}</h3>
          <p className="font-sans text-[clamp(12px,0.95vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
        </div>
      </GlassCard>
    </FadeUp>
  )
}

export default function BuiltForHealthcareSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={slideIndex + 1} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%]">
        {/* Header */}
        <div className="mb-[clamp(16px,2.5vw,32px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--teal)' }}>
              Built for Healthcare
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>
              What these agents{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                actually do.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        {/* Cards - 3 top, 2 bottom */}
        <div className="flex flex-col gap-[clamp(12px,1.5vw,20px)] mt-auto">
          <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)]">
            {capabilities.slice(0, 3).map((c, i) => (
              <CapabilityCard key={i} {...c} delay={0.4 + i * 0.1} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)]">
            {capabilities.slice(3).map((c, i) => (
              <CapabilityCard key={i + 3} {...c} delay={0.7 + i * 0.1} />
            ))}
            <div /> {/* Empty cell to keep 2 cards on left */}
          </div>
        </div>

        {/* Footer quote */}
        <BlurReveal delay={1.0}>
          <p className="mt-[clamp(16px,2vw,28px)] max-w-[700px] text-[clamp(12px,0.95vw,14px)] leading-relaxed italic" style={{ color: 'var(--muted-2)' }}>
            AI that escalates everything isn't autonomous. AI that never escalates is reckless. These agents have clear protocols and confidence thresholds on every decision.
          </p>
        </BlurReveal>
      </div>
    </Slide>
  )
}
