import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(6,182,212,0.05), transparent 50%), #000'

const cards = [
  {
    title: "Missed calls don't come back",
    desc: "A referral that hits voicemail rarely rings twice. The patient moves on.",
  },
  {
    title: 'Repetitive work crowds out everything else',
    desc: "Confirmations, prep queries, chasing referrals. The same calls, every day.",
  },
  {
    title: 'Empty slots are silent revenue loss',
    desc: "Late cancellations stay empty. Nobody has time to work the waitlist in the moment.",
  },
]

export default function ProblemSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={2} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-between py-[4%] px-[5%]">
        <div className="max-w-[85%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              The Problem
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2
              className="font-serif font-normal text-white mt-3"
              style={{ fontSize: 'clamp(22px, 3.5vw, 56px)', lineHeight: 1.04 }}
            >
              The routine calls handle themselves. The team handles the rest.
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.4}>
            <p className="mt-4 max-w-[640px]" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', color: 'var(--muted)', lineHeight: 1.65 }}>
              Specialist clinics run on high call volume and lean front desks. Calls get missed. Admin repeats itself daily. And none of it needs a human to do it.
            </p>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)] w-full">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={0.6 + i * 0.1}>
              <GlassCard hover className="h-full">
                <h3 className="font-sans font-semibold text-[clamp(14px,1.2vw,18px)] text-white mb-2">{c.title}</h3>
                <p className="font-sans text-[clamp(12px,0.95vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{c.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        <BlurReveal delay={0.95}>
          <p className="mt-[clamp(12px,1.5vw,20px)] text-[clamp(11px,0.9vw,14px)] italic" style={{ color: 'var(--muted-2)' }}>
            Available 24/7. Never on lunch. Never off sick.
          </p>
        </BlurReveal>
      </div>
    </Slide>
  )
}
