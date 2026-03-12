import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassPhone, { PhoneCallHeader, PhoneTranscript, TranscriptMsg, RoutingTag } from '../../../components/glass/GlassPhone'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6,182,212,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.03), transparent), #000'

const tags = ['Neurology', 'Respiratory', 'Gastro', 'Nephrology', 'Vascular', 'Endocrinology']

export default function RoutingSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={4} />} />
      <GlassDivider />

      <div className="flex-1 flex px-[5%] py-[3%] pb-[5%] gap-[5%]">
        <div className="flex-1 flex flex-col justify-center max-w-[55%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Live Routing
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3.5vw, 56px)', lineHeight: 1.04 }}>
              The patient describes symptoms. The AI <i style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))' }}>triages.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3.5 max-w-[480px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              No hold music. No transfers. AI matches the query to the right department and books directly or routes to the consultant's secretary.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.7}>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-semibold px-2.5 py-1 rounded"
                  style={{ color: 'var(--teal)', background: 'var(--teal-dim)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </BlurReveal>
        </div>

        <FadeUp delay={0.4} className="flex items-center justify-center">
          <GlassPhone>
            <PhoneCallHeader
              avatar="CM"
              name="Cervino Medical"
              status="AI Receptionist Active"
            />
            <PhoneTranscript>
              <TranscriptMsg role="ai">
                Good morning, Cervino Medical. How can I help?
              </TranscriptMsg>
              <TranscriptMsg role="caller">
                I've been having recurring headaches and dizziness over the past few weeks.
              </TranscriptMsg>
              <TranscriptMsg role="ai">
                Based on what you're describing, our neurology team would be best placed to assess you. Prof Widdess-Walsh has availability next Thursday at 10am, or Dr Shukralla has Friday afternoon. Would either work?
              </TranscriptMsg>
              <RoutingTag>Routed to Neurology</RoutingTag>
            </PhoneTranscript>
          </GlassPhone>
        </FadeUp>
      </div>
    </Slide>
  )
}
