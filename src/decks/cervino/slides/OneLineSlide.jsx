import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassPhone, { PhoneCallHeader, PhoneTranscript, TranscriptMsg, RoutingTag } from '../../../components/glass/GlassPhone'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6,182,212,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.03), transparent), #000'

export default function OneLineSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={6} />} />
      <GlassDivider />

      <div className="flex-1 flex px-[5%] py-[3%] pb-[5%] gap-[5%]">
        <div className="flex-1 flex flex-col justify-center max-w-[55%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              One Line. One Agent.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 56px)', lineHeight: 1.04 }}>
              One phone line. One agent.{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Always on.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3.5 max-w-[480px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              Each consultant has a dedicated AI agent on their line. It answers, books, and follows up. The consultant's secretary handles only what needs a human.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.8}>
            <p className="mt-5 max-w-[480px] text-[clamp(11px,0.9vw,14px)] leading-relaxed italic" style={{ color: 'var(--muted-2)' }}>
              AI that always escalates isn't autonomous. AI that never escalates is reckless. These agents have clear protocols and handoff thresholds on every call.
            </p>
          </BlurReveal>
        </div>

        <FadeUp delay={0.4} className="flex items-center justify-center">
          <GlassPhone>
            <PhoneCallHeader
              avatar="CM"
              name="Dr. [Name], Gastroenterology"
              status="AI Agent Active"
            />
            <PhoneTranscript>
              <TranscriptMsg role="caller">
                Hi, I sent a colonoscopy referral about two weeks ago. Just checking if it was received?
              </TranscriptMsg>
              <TranscriptMsg role="ai">
                Yes, I can confirm your referral has been received. Let me check the next available slots for you.
              </TranscriptMsg>
              <TranscriptMsg role="ai">
                I have next Wednesday at 11am or Thursday at 2:30pm available. Would either of those work?
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                Wednesday works.
              </TranscriptMsg>
              <RoutingTag>Booked · WhatsApp Confirmation Sent</RoutingTag>
            </PhoneTranscript>
          </GlassPhone>
        </FadeUp>
      </div>
    </Slide>
  )
}
