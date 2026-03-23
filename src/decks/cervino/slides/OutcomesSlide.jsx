import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 80% 50% at 30% 70%, rgba(6,182,212,0.05), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(99,102,241,0.03), transparent), #000'

const outcomes = [
  {
    num: '01',
    title: 'Calls answered',
    desc: 'No missed referrals. No voicemails left unheard.',
  },
  {
    num: '02',
    title: 'Slots filled',
    desc: 'Cancellations backfilled before the day is out.',
  },
  {
    num: '03',
    title: 'Referrals processed',
    desc: 'Incomplete details chased automatically.',
  },
  {
    num: '04',
    title: 'Admin time freed',
    desc: 'Receptionists handle the calls that need them.',
  },
]

function OutcomeCard({ num, title, desc, delay }) {
  return (
    <FadeUp delay={delay}>
      <GlassCard hover className="h-full">
        <div className="flex flex-col h-full">
          {/* Number + line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[clamp(11px,0.9vw,14px)] font-medium" style={{ color: 'var(--muted-2)' }}>{num}</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          {/* Title */}
          <h3 className="font-sans font-semibold text-[clamp(16px,1.4vw,22px)] text-white leading-tight mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="font-sans text-[clamp(12px,1vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
        </div>
      </GlassCard>
    </FadeUp>
  )
}

export default function OutcomesSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={8} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%]">
        {/* Header */}
        <div className="mb-[clamp(20px,3vw,40px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Outcomes
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>Fewer missed calls.</SlideUpLine>
            <br />
            <SlideUpLine delay={0.3}>
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Fuller calendars. Lower costs.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] mt-auto">
          {outcomes.map((o, i) => (
            <OutcomeCard key={i} {...o} delay={0.45 + i * 0.1} />
          ))}
        </div>
      </div>
    </Slide>
  )
}
