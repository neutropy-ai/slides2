import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 60% at 25% 70%, rgba(6,182,212,0.07), transparent), radial-gradient(ellipse 40% 30% at 80% 15%, rgba(14,165,233,0.03), transparent), #080a0f'

const flow = [
  { emoji: '\u{1F3E5}', title: 'Client Practice', desc: 'Has communication gaps', variant: 'default' },
  { emoji: '\u{1F4CB}', title: 'Cervino Audit', desc: 'You identify the problems', variant: 'teal' },
  { emoji: '\u26A1', title: 'Neutropy Deploys', desc: 'We build and manage the AI', variant: 'solid' },
]

export default function ConsultingPlaySlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={8} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        <BlurReveal delay={0.15}>
          <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
            The Consulting Play
          </p>
        </BlurReveal>
        <BlurReveal delay={0.25}>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 4vw, 64px)', lineHeight: 1.04 }}>
            A new service line.<br />
            <i style={{ color: 'var(--teal)' }}>Recurring revenue.</i>
          </h2>
        </BlurReveal>
        <BlurReveal delay={0.5}>
          <p className="mt-3.5 max-w-[600px]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
            Every practice Cervino consults for is a potential deployment. You own the relationship. We handle the technology.
          </p>
        </BlurReveal>

        <FadeUp delay={0.7} className="flex items-center gap-0 mt-[clamp(24px,3vw,36px)] max-w-[900px]">
          {flow.map((f, i) => (
            <div key={i} className="contents">
              {i > 0 && (
                <div className="px-2 text-lg flex-shrink-0" style={{ color: 'var(--muted-2)' }}>{'\u2192'}</div>
              )}
              <div className="flex-1">
                <GlassCard variant={f.variant}>
                  <div className="text-center">
                    <div className="text-xl mb-1.5">{f.emoji}</div>
                    <h4 className="font-sans font-semibold text-[clamp(12px,1vw,15px)] text-white">{f.title}</h4>
                    <p className="text-[clamp(10px,0.85vw,13px)] mt-1" style={{ color: f.variant === 'solid' ? 'rgba(255,255,255,0.8)' : 'var(--muted)' }}>{f.desc}</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </Slide>
  )
}
