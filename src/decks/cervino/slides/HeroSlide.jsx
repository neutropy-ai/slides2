import Slide from '../../../components/Slide'
import Topbar, { MetadataRow } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import SlideUpLine from '../../../components/anim/SlideUpLine'

function CosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space vortex */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% 15%, rgba(6, 182, 212, 0.12), transparent 50%),
            radial-gradient(ellipse 80% 50% at 60% 25%, rgba(14, 165, 233, 0.08), transparent 45%),
            radial-gradient(ellipse 60% 40% at 40% 20%, rgba(99, 102, 241, 0.06), transparent 40%),
            radial-gradient(ellipse 120% 80% at 50% 10%, rgba(0, 30, 50, 0.9), transparent 60%),
            #000
          `,
        }}
      />
      {/* Spiral light streaks */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%]"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 0%,
              transparent 0deg,
              rgba(6, 182, 212, 0.03) 30deg,
              transparent 60deg,
              rgba(14, 165, 233, 0.02) 120deg,
              transparent 150deg,
              rgba(99, 102, 241, 0.02) 210deg,
              transparent 240deg,
              rgba(6, 182, 212, 0.03) 300deg,
              transparent 360deg
            )
          `,
          filter: 'blur(40px)',
        }}
      />
      {/* Central glow */}
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[40%] h-[30%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      {/* Stars */}
      {[
        { x: '15%', y: '20%', s: 2, d: 2.5 },
        { x: '80%', y: '35%', s: 1.5, d: 3.2 },
        { x: '65%', y: '15%', s: 1, d: 4.1 },
        { x: '25%', y: '45%', s: 1.5, d: 2.8 },
        { x: '90%', y: '25%', s: 2, d: 3.5 },
        { x: '45%', y: '55%', s: 1, d: 4.5 },
        { x: '10%', y: '60%', s: 1.5, d: 3 },
        { x: '70%', y: '50%', s: 1, d: 2.2 },
        { x: '35%', y: '30%', s: 1.5, d: 3.8 },
        { x: '55%', y: '40%', s: 1, d: 4.3 },
      ].map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.s}px`,
            height: `${star.s}px`,
            background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#e2e8f0' : '#c4b5fd',
            animation: `twinkle ${star.d}s ease-in-out ${i * 0.3}s infinite`,
            boxShadow: `0 0 ${star.s * 3}px ${star.s}px ${i % 3 === 0 ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.2)'}`,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSlide({ isActive, slideIndex }) {
  return (
    <Slide
      isActive={isActive}
      slideIndex={slideIndex}
      background={<CosmicBackground />}
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
          className="font-serif font-normal text-white tracking-tighter"
          style={{ fontSize: 'clamp(48px, 10vw, 140px)', lineHeight: 0.9 }}
        >
          <SlideUpLine delay={0.3}>AI communication</SlideUpLine>
          <br />
          <SlideUpLine delay={0.4}>
            for{' '}
            <i
              className="font-serif"
              style={{
                background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              healthcare.
            </i>
          </SlideUpLine>
        </h1>
      </div>
    </Slide>
  )
}
