import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(6,182,212,0.04), transparent), #000'

const setup = [
  'Dedicated AI agent per consultant line',
  'Outbound reminder and referral agent',
  'WhatsApp automation configured',
  'Specialty-specific prep messaging',
  'Waitlist management',
]

const monthly = [
  'All agents live 24/7',
  'Outbound referral processing',
  'Appointment reminders',
  'Ongoing optimisation',
  'WhatsApp and SMS included',
]

export default function WhatsIncludedSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={11} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <BlurReveal delay={0.15}>
          <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            What's Included
          </p>
        </BlurReveal>
        <BlurReveal delay={0.25}>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 52px)', lineHeight: 1.04 }}>
            Everything you need.<br />
            <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nothing you don't.</i>
          </h2>
        </BlurReveal>

        <FadeUp delay={0.5} className="grid grid-cols-2 gap-[clamp(12px,1.5vw,24px)] mt-[clamp(24px,3vw,36px)] max-w-[900px]">
          <GlassCard>
            <h3 className="text-[clamp(10px,0.85vw,12px)] font-bold tracking-[0.12em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
              One-Time Setup
            </h3>
            <ul className="flex flex-col gap-2">
              {setup.map((item, i) => (
                <li key={i} className="flex gap-2 text-[clamp(12px,1vw,15px)] leading-snug" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--teal)' }}>+</span> {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard variant="teal">
            <h3 className="text-[clamp(10px,0.85vw,12px)] font-bold tracking-[0.12em] uppercase mb-4" style={{ color: 'var(--teal)' }}>
              Ongoing Monthly
            </h3>
            <ul className="flex flex-col gap-2">
              {monthly.map((item, i) => (
                <li key={i} className="flex gap-2 text-[clamp(12px,1vw,15px)] leading-snug" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--teal)' }}>+</span> {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeUp>
      </div>
    </Slide>
  )
}
