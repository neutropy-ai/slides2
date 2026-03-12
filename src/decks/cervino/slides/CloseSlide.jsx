import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import HlsVideo from '../../../components/HlsVideo'

const ATM = 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6,182,212,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.06), transparent), rgba(0,0,0,0.55)'

export default function CloseSlide({ isActive, slideIndex }) {
  return (
    <Slide
      isActive={isActive}
      slideIndex={slideIndex}
      atmosphere={ATM}
      background={
        <HlsVideo src="https://stream.mux.com/PkFsoKeakRLgL01gjf02CRcSbsJ600Z00NvLr9eRZ92pLbA.m3u8" />
      }
    >
      <Topbar right={<SlideNumber n={12} />} />
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
              <i
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))',
                }}
              >simple.</i>
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
