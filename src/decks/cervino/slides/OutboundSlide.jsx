import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 75% 55%, rgba(6,182,212,0.05), transparent), #000'

const bullets = [
  'Calls patients 48 hours before appointment to confirm or reschedule',
  'Offers open slots to waitlisted patients immediately on cancellation',
  'Follows up on incomplete GP referrals and collects missing patient details',
  'Sends WhatsApp confirmation after every outbound interaction',
]

export default function OutboundSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={7} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <div className="mb-[clamp(12px,1.5vw,20px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Outbound
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>
              Your AI follows up so your team{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                doesn't have to.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        <BlurReveal delay={0.4}>
          <p className="max-w-[620px] mb-[clamp(24px,3vw,44px)]" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', color: 'var(--muted)', lineHeight: 1.65 }}>
            Reminders. Confirmations. Referral chasing. Waitlist offers. The calls your receptionist queues up and never gets to — handled automatically, before the slot is lost.
          </p>
        </BlurReveal>

        <div className="flex flex-col gap-[clamp(10px,1.2vw,16px)] max-w-[700px]">
          {bullets.map((item, i) => (
            <FadeUp key={i} delay={0.5 + i * 0.1}>
              <div
                className="flex gap-3 items-start rounded-xl px-[clamp(14px,1.5vw,20px)] py-[clamp(12px,1.2vw,16px)]"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <span className="text-[clamp(12px,1vw,15px)] font-semibold flex-shrink-0" style={{ color: 'var(--teal)' }}>+</span>
                <p className="font-sans text-[clamp(13px,1.1vw,16px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{item}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
