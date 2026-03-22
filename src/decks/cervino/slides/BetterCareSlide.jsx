import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 70% at 40% 60%, rgba(6,182,212,0.06), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(14,165,233,0.03), transparent), #000'

const benefits = [
  { title: 'Higher NPS', desc: 'Patients rate the experience, not the wait.' },
  { title: 'Better reviews', desc: 'Automated prompts after every good interaction.' },
  { title: 'Zero churn', desc: 'No sick days. No training costs. No notice period.' },
  { title: 'Never tired', desc: 'Same quality at call 1 and call 500.' },
]

export default function BetterCareSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={slideIndex + 1} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%]">
        {/* Header */}
        <div>
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--teal)' }}>
              Better Care
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>
              Make happy patients your{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                north star.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        {/* Big stat */}
        <FadeUp delay={0.45} className="flex-1 flex items-center">
          <div className="flex items-end gap-[clamp(16px,2vw,32px)]">
            <span
              className="font-serif font-normal leading-none"
              style={{
                fontSize: 'clamp(80px, 14vw, 200px)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              95%
            </span>
            <div className="pb-[clamp(10px,1.5vw,24px)]">
              <p className="font-sans font-semibold text-[clamp(14px,1.3vw,20px)] text-white leading-snug">
                reduction in patient wait times
              </p>
              <p className="font-sans text-[clamp(12px,1vw,15px)] mt-1" style={{ color: 'var(--muted)' }}>
                Every call answered first ring. No queue. No hold.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Bottom cards */}
        <div className="grid grid-cols-4 gap-[clamp(10px,1.2vw,16px)]">
          {benefits.map((b, i) => (
            <FadeUp key={i} delay={0.7 + i * 0.08}>
              <GlassCard hover>
                <h3 className="font-sans font-semibold text-[clamp(13px,1.1vw,17px)] text-white mb-1.5">{b.title}</h3>
                <p className="font-sans text-[clamp(11px,0.9vw,14px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{b.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
