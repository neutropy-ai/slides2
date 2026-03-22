import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 60% at 20% 80%, rgba(6,182,212,0.06), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(14,165,233,0.03), transparent), #000'

const steps = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: 'Patient visit',
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'AI follow-up',
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: 'Review request',
    highlighted: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: 'Google ranking',
    highlighted: true,
  },
]

function StarRating({ rating = 4.9 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill={i < fullStars ? 'var(--teal)' : (i === fullStars && hasHalf ? 'var(--teal)' : 'none')}
            stroke="var(--teal)"
            strokeWidth="1.5"
            style={{ opacity: i < fullStars || (i === fullStars && hasHalf) ? 1 : 0.3 }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-[clamp(24px,2.5vw,40px)] font-sans font-bold text-white">4.9</span>
      <span className="text-[clamp(12px,1vw,16px)] font-sans" style={{ color: 'var(--muted)' }}>(127 reviews)</span>
    </div>
  )
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center px-1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </div>
  )
}

export default function ReviewAutomationsSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={slideIndex + 1} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        {/* Header */}
        <div className="mb-[clamp(12px,1.5vw,20px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Review Automations
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>Happy patients talk.</SlideUpLine>
            <br />
            <SlideUpLine delay={0.3}>
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #0ea5e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Google listens.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        {/* Body copy */}
        <BlurReveal delay={0.45}>
          <p className="max-w-[560px] mb-[clamp(16px,2vw,28px)]" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', color: 'var(--muted)', lineHeight: 1.65 }}>
            After every positive interaction, the AI sends a review prompt. Timed right. Personalised. Patients who had a good experience are asked while it's fresh.
          </p>
        </BlurReveal>

        {/* Star rating */}
        <FadeUp delay={0.55}>
          <StarRating />
        </FadeUp>

        {/* Flow steps */}
        <FadeUp delay={0.7} className="flex items-stretch gap-[clamp(8px,1vw,16px)] mt-[clamp(24px,3vw,44px)] max-w-[700px]">
          {steps.map((step, i) => (
            <div key={i} className="contents">
              {i > 0 && <FlowArrow />}
              <div className="flex-1">
                <GlassCard variant={step.highlighted ? 'teal' : 'default'} className="h-full">
                  <div className="flex flex-col items-center text-center gap-2.5 py-1">
                    <div style={{ color: step.highlighted ? 'var(--teal)' : 'var(--muted)' }}>
                      {step.icon}
                    </div>
                    <span
                      className="font-sans text-[clamp(11px,0.9vw,14px)] font-medium"
                      style={{ color: step.highlighted ? 'var(--teal)' : 'var(--muted)' }}
                    >
                      {step.label}
                    </span>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </Slide>
  )
}
