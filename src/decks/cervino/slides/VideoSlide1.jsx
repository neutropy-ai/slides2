import Slide from '../../../components/Slide'
import HlsVideo from '../../../components/HlsVideo'

const ATM = 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.04), transparent 60%), transparent'

export default function VideoSlide1({ isActive, slideIndex }) {
  return (
    <Slide
      isActive={isActive}
      slideIndex={slideIndex}
      atmosphere={ATM}
      background={
        <HlsVideo src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />
      }
    />
  )
}
