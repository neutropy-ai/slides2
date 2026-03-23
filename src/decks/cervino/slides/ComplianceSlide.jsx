import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(99,102,241,0.03), transparent), #000'

const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'No clinical data on the line',
    desc: 'Agents handle scheduling and routing only. Medical records stay in your systems.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Call recordings deleted after 90 days',
    desc: 'Retention is short by default. Adjusted to your policy on request.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'GDPR-compliant infrastructure',
    desc: 'Data processed under a signed Data Processing Agreement. Available before you go live.',
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
    title: 'You stay in control',
    desc: 'Every agent has a human escalation path. Your team reviews, overrides, and approves at every stage.',
  },
]

export default function ComplianceSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={12} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%]">
        {/* Header */}
        <div className="mb-[clamp(16px,2.5vw,32px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--teal)' }}>
              Data & Compliance
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>
              Built with data compliance{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                from the start.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        <BlurReveal delay={0.35}>
          <p className="max-w-[620px] mb-[clamp(20px,2.5vw,36px)]" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', color: 'var(--muted)', lineHeight: 1.65 }}>
            No patient records are discussed, stored, or processed on the call. The agent books, routes, and confirms. Nothing clinical passes through it.
          </p>
        </BlurReveal>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] mt-auto">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={0.45 + i * 0.1}>
              <GlassCard hover className="h-full">
                <div className="flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(6,182,212,0.06)',
                      border: '1px solid rgba(6,182,212,0.08)',
                    }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-[clamp(14px,1.2vw,18px)] text-white leading-snug">{c.title}</h3>
                  <p className="font-sans text-[clamp(12px,0.95vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{c.desc}</p>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Footer */}
        <BlurReveal delay={0.9}>
          <p className="mt-[clamp(16px,2vw,28px)] max-w-[700px] text-[clamp(12px,0.95vw,14px)] leading-relaxed italic" style={{ color: 'var(--muted-2)' }}>
            We'll sign a DPA before any deployment begins. Compliance questions answered in the discovery call.
          </p>
        </BlurReveal>
      </div>
    </Slide>
  )
}
