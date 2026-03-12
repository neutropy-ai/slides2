import Slide from '../../../components/Slide'
import Topbar, { MetadataRow } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import HlsVideo from '../../../components/HlsVideo'

const ATM = 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(6,182,212,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(14,165,233,0.06), transparent), rgba(0,0,0,0.55)'

export default function HeroSlide({ isActive, slideIndex }) {
  return (
    <Slide
      isActive={isActive}
      slideIndex={slideIndex}
      atmosphere={ATM}
      background={
        <HlsVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />
      }
    >
      <Topbar
        right={
          <MetadataRow items={[
            { label: 'Prepared for', value: 'Cervino Medical' },
            { label: 'Date', value: 'March 2026' },
            { label: 'Type', value: 'Proposal' },
            { label: 'Sector', value: 'Healthcare AI' },
          ]} />
        }
      />
      <GlassDivider />

      <div className="flex-1 flex items-end px-[5%] pb-[8%]">
        <h1
          className="font-serif font-light text-white tracking-tighter"
          style={{ fontSize: 'clamp(48px, 10vw, 140px)', lineHeight: 0.9 }}
        >
          <SlideUpLine delay={0.3}>AI communication</SlideUpLine>
          <br />
          <SlideUpLine delay={0.4}>
            for <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>healthcare.</i>
          </SlideUpLine>
        </h1>
      </div>
    </Slide>
  )
}
