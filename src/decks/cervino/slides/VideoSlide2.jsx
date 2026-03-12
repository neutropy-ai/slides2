import Slide from '../../../components/Slide'
import HlsVideo from '../../../components/HlsVideo'

const ATM = 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.04), transparent 60%), transparent'

export default function VideoSlide2({ isActive, slideIndex }) {
  return (
    <Slide
      isActive={isActive}
      slideIndex={slideIndex}
      atmosphere={ATM}
      background={
        <HlsVideo src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8" />
      }
    />
  )
}
