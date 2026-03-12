import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'
import HlsVideo from '../../../components/HlsVideo'

const ATM = 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(6,182,212,0.1), transparent 50%), rgba(0,0,0,0.55)'

const stats = [
  { value: '73%', label: "of patients won't leave a voicemail" },
  { value: '36', label: 'month wait for a public neurologist' },
  { value: '15-30%', label: 'specialist clinic no-show rate' },
]

export default function ProblemSlide({ isActive, slideIndex }) {
  return (
    <Slide
      isActive={isActive}
      slideIndex={slideIndex}
      atmosphere={ATM}
      background={
        <HlsVideo src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8" />
      }
    >
      <Topbar right={<SlideNumber n={2} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-between py-[4%] px-[5%]">
        <div className="max-w-[85%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              The Communication Gap
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2
              className="font-serif font-normal text-white mt-3"
              style={{ fontSize: 'clamp(22px, 3.5vw, 56px)', lineHeight: 1.04 }}
            >
              Every practice you consult for loses patients to the same problem. The phone rings. Nobody picks up. Revenue walks out the door.
            </h2>
          </BlurReveal>
        </div>

        <div className="flex gap-[clamp(16px,2.5vw,32px)] w-full">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={0.6 + i * 0.1} className="flex-1 min-w-0">
              <div
                className="font-serif font-normal text-white tracking-tighter"
                style={{ fontSize: 'clamp(36px, 7vw, 96px)', lineHeight: 0.92 }}
              >
                {s.value}
              </div>
              <div
                className="font-sans text-white mt-2"
                style={{ fontSize: 'clamp(13px, 1.2vw, 20px)', lineHeight: 1.4 }}
              >
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
