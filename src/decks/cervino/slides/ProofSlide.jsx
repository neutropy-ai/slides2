import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(6,182,212,0.05), transparent 50%), #000'

const today = [
  'One receptionist, seven specialties',
  'GP referrals chased manually',
  'No automated reminders',
  'Cancellations leave empty slots',
  'After-hours calls go to voicemail',
]

const withNeutropy = [
  'AI answers and routes every call 24/7',
  'Outbound agent chases referral details',
  'Specialty-specific WhatsApp prep + reminders',
  'Waitlist patients get instant offers',
  'Every missed call recovered',
]

export default function ProofSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={7} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <BlurReveal delay={0.15}>
          <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            Proof of Concept
          </p>
        </BlurReveal>
        <BlurReveal delay={0.25}>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 4vw, 64px)', lineHeight: 1.04 }}>
            We build it for your clinic <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>first.</i>
          </h2>
        </BlurReveal>
        <BlurReveal delay={0.5}>
          <p className="mt-3.5 max-w-[550px]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
            10+ consultants. 7 specialties. One phone line. Real patients. If it works here, it works anywhere you consult.
          </p>
        </BlurReveal>

        <FadeUp delay={0.6} className="grid grid-cols-2 gap-[clamp(12px,1.5vw,24px)] mt-[clamp(24px,3vw,36px)] max-w-[900px]">
          <GlassCard>
            <h3 className="text-[clamp(10px,0.85vw,12px)] font-bold tracking-[0.12em] uppercase mb-3.5" style={{ color: 'var(--muted)' }}>
              Your Clinic Today
            </h3>
            <ul className="flex flex-col gap-2">
              {today.map((item, i) => (
                <li key={i} className="flex gap-2 text-[clamp(12px,1vw,15px)] leading-snug" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--muted-2)' }}>-</span> {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard variant="teal">
            <h3 className="text-[clamp(10px,0.85vw,12px)] font-bold tracking-[0.12em] uppercase mb-3.5" style={{ color: 'var(--teal)' }}>
              With Neutropy
            </h3>
            <ul className="flex flex-col gap-2">
              {withNeutropy.map((item, i) => (
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
