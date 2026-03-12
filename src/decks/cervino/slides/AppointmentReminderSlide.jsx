import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassPhone, { PhoneCallHeader, PhoneTranscript, TranscriptMsg, RoutingTag } from '../../../components/glass/GlassPhone'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 75% 55%, rgba(99,102,241,0.05), transparent), #000'

export default function AppointmentReminderSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={5} />} />
      <GlassDivider />

      <div className="flex-1 flex px-[5%] py-[3%] pb-[5%] gap-[5%]">
        <div className="flex-1 flex flex-col justify-center max-w-[55%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Outbound Voice Agent
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 56px)', lineHeight: 1.04 }}>
              Your AI calls patients.<br />
              <i style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))' }}>Before they forget.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3.5 max-w-[480px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              No-shows cost clinics thousands per month. Instead of relying on texts patients ignore, the AI calls ahead to confirm, reschedule, or backfill the slot.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.7}>
            <div className="flex flex-col gap-2 mt-5">
              {[
                'Calls patients 48h before appointment',
                'Confirms attendance or reschedules',
                'Offers open slots to waitlisted patients',
                'Sends follow-up WhatsApp confirmation',
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-[clamp(12px,1vw,14px)]" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: '#04B2BB' }}>+</span> {item}
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>

        <FadeUp delay={0.4} className="flex items-center justify-center">
          <GlassPhone>
            <PhoneCallHeader
              avatar="AI"
              name="Calling: Michael Brennan"
              status="Outbound · Appointment Reminder"
              duration="00:32"
            />
            <PhoneTranscript>
              <TranscriptMsg role="ai">
                Hi Michael, I'm calling from Cervino Medical to confirm your neurology appointment with Prof Widdess-Walsh this Thursday at 10am. Will you be able to attend?
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                Oh right, I actually need to reschedule — I've a conflict Thursday morning.
              </TranscriptMsg>
              <TranscriptMsg role="ai">
                No problem. I have Friday at 2:30pm available with the same consultant. Would that work?
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                Friday works perfectly, thanks.
              </TranscriptMsg>
              <RoutingTag>Rescheduled · Slot Released</RoutingTag>
            </PhoneTranscript>
          </GlassPhone>
        </FadeUp>
      </div>
    </Slide>
  )
}
