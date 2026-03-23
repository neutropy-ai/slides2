import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'

const ATM = 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6,182,212,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.03), transparent), #000'

export default function CloseSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={13} />} />
      <GlassDivider />

      <div className="flex-1 flex items-end px-[5%] pb-[8%]">
        <div>
          <h2
            className="font-serif font-normal text-white"
            style={{ fontSize: 'clamp(40px, 9vw, 120px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}
          >
            <SlideUpLine delay={0.3}>One conversation</SlideUpLine>
            <br />
            <SlideUpLine delay={0.4}>
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>to get started.</i>
            </SlideUpLine>
          </h2>
          <BlurReveal delay={0.7}>
            <p className="mt-5 max-w-[500px]" style={{ fontSize: 'clamp(13px, 1.2vw, 20px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              Twenty minutes. We go through your current setup, map the consultants, and confirm which line goes live first. No obligation.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.85}>
            <p className="mt-5" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', color: 'var(--teal)' }}>
              Pick a time this week at neutropy.ai
            </p>
          </BlurReveal>
          <BlurReveal delay={0.95}>
            <p className="mt-4" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted-2)' }}>
              Luke Murphy · luke@neutropy.ai · neutropy.ai
            </p>
          </BlurReveal>
        </div>
      </div>
    </Slide>
  )
}
