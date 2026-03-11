import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 60% at 30% 70%, rgba(6,182,212,0.06), transparent 50%), #000'

const metrics = [
  { value: '97%', label: 'Calls answered within 3 rings' },
  { value: '40%', label: 'Reduction in no-shows with reminders' },
  { value: '3x', label: 'Faster referral turnaround' },
  { value: '€0', label: 'Additional headcount required' },
]

export default function ProofSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={7} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-between px-[5%] py-[4%]">
        <div className="max-w-[70%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Proof of Concept
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(22px, 3.5vw, 56px)', lineHeight: 1.04 }}>
              The numbers from early deployments speak for <i style={{ color: 'var(--teal)' }}>themselves.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3.5 max-w-[520px]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              Measured across pilot clinics within the first 90 days of deployment. These are real results, not projections.
            </p>
          </BlurReveal>
        </div>

        <div className="flex gap-[clamp(16px,2.5vw,32px)] w-full">
          {metrics.map((m, i) => (
            <FadeUp key={i} delay={0.6 + i * 0.1} className="flex-1 min-w-0">
              <div
                className="font-serif font-normal text-white tracking-tighter"
                style={{ fontSize: 'clamp(36px, 7vw, 96px)', lineHeight: 0.92 }}
              >
                {m.value}
              </div>
              <div
                className="font-sans text-white mt-2"
                style={{ fontSize: 'clamp(13px, 1.2vw, 20px)', lineHeight: 1.4 }}
              >
                {m.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
