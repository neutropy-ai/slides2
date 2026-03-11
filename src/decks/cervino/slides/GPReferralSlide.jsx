import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassPhone, { PhoneCallHeader, PhoneTranscript, TranscriptMsg, RoutingTag } from '../../../components/glass/GlassPhone'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(6,182,212,0.05), transparent 50%), radial-gradient(ellipse 40% 40% at 10% 85%, rgba(14,165,233,0.04), transparent), #000'

export default function GPReferralSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={5} />} />
      <GlassDivider />

      <div className="flex-1 flex px-[5%] py-[3%] pb-[5%] gap-[5%]">
        <div className="flex-1 flex flex-col justify-center max-w-[55%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Outbound GP Referrals
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 56px)', lineHeight: 1.04 }}>
              AI calls GP practices <i style={{ color: 'var(--teal)' }}>so your staff don't have to.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3.5 max-w-[480px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              Chasing referrals, confirming details, requesting missing scans. The AI handles outbound calls to GP surgeries, freeing your admin team for higher-value work.
            </p>
          </BlurReveal>
        </div>

        <FadeUp delay={0.4} className="flex items-center justify-center">
          <GlassPhone>
            <PhoneCallHeader
              avatar="GP"
              name="Elm Park Surgery"
              status="Outbound · Referral Chase"
            />
            <PhoneTranscript>
              <TranscriptMsg role="ai">
                Hi, this is Cervino Medical's automated referral team. I'm calling about a neurology referral for patient ref CM-4821. We're missing the most recent MRI report — could that be sent across?
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                Sure, I'll send that over to your portal this afternoon.
              </TranscriptMsg>
              <TranscriptMsg role="ai">
                Perfect, thank you. I'll flag it as pending and follow up tomorrow if it hasn't arrived.
              </TranscriptMsg>
              <RoutingTag>Referral Updated · MRI Pending</RoutingTag>
            </PhoneTranscript>
          </GlassPhone>
        </FadeUp>
      </div>
    </Slide>
  )
}
