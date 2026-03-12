import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassPhone, { PhoneCallHeader, PhoneTranscript, TranscriptMsg, RoutingTag } from '../../../components/glass/GlassPhone'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 75% 55%, rgba(6,182,212,0.05), transparent), #000'

export default function GPReferralSlide({ isActive, slideIndex }) {
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
              Your AI calls the GP.<br />
              <i style={{ color: 'var(--teal)' }}>Not the other way around.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3.5 max-w-[480px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              Referrals arrive with missing details. Instead of your admin spending hours on phone tag, the AI handles the follow-up.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.7}>
            <div className="flex flex-col gap-2 mt-5">
              {[
                'Calls GP to confirm referral details',
                'Collects missing medical history',
                'Confirms correct specialist assignment',
                'Schedules patient, sends all confirmations',
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-[clamp(12px,1vw,14px)]" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--teal)' }}>+</span> {item}
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>

        <FadeUp delay={0.4} className="flex items-center justify-center">
          <GlassPhone>
            <PhoneCallHeader
              avatar="AI"
              name="Calling: Dr. Murphy's Practice"
              status="Outbound · Referral Follow-up"
              duration="00:47"
            />
            <PhoneTranscript>
              <TranscriptMsg role="ai">
                Good afternoon, I'm calling from Cervino Medical regarding a neurology referral for a patient of Dr. Murphy's.
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                Yes, what do you need?
              </TranscriptMsg>
              <TranscriptMsg role="ai">
                The referral letter didn't include the patient's current medication list. Could someone send that through? I can provide the secure email.
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                Sure, I'll get that over today.
              </TranscriptMsg>
              <RoutingTag>Referral Complete</RoutingTag>
            </PhoneTranscript>
          </GlassPhone>
        </FadeUp>
      </div>
    </Slide>
  )
}
