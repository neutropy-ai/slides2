import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'

const ATM = 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6,182,212,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.03), transparent), #000'

export default function CloseSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={11} />} />
      <GlassDivider />

      <div className="flex-1 flex items-end px-[5%] pb-[8%]">
        <div>
          <h2
            className="font-serif font-normal text-white"
            style={{ fontSize: 'clamp(40px, 9vw, 120px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}
          >
            <SlideUpLine delay={0.3}>Next step is</SlideUpLine>
            <br />
            <SlideUpLine delay={0.4}>
              <i style={{ color: 'var(--teal)' }}>simple.</i>
            </SlideUpLine>
          </h2>
          <BlurReveal delay={0.7}>
            <p className="mt-5 max-w-[500px]" style={{ fontSize: 'clamp(13px, 1.2vw, 20px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              A 20-minute discovery call. We walk through your clinic setup, map the specialties, and plan the first deployment.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.9}>
            <p className="mt-7" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted-2)' }}>
              Luke Murphy · luke@neutropy.ai · neutropy.ai
            </p>
          </BlurReveal>
        </div>
      </div>
    </Slide>
  )
}
