import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(6,182,212,0.04), transparent 50%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(99,102,241,0.03), transparent), #000'

const included = [
  { title: 'AI Receptionist', desc: 'Custom-trained voice agent for every specialty you run.' },
  { title: 'WhatsApp Flows', desc: 'Confirmations, prep, reminders, follow-ups. All automated.' },
  { title: 'Outbound Referral Agent', desc: 'AI calls GPs to chase referrals and missing docs.' },
  { title: 'Routing Engine', desc: 'Symptom-to-specialty matching with consultant availability.' },
  { title: 'Dashboard & Reporting', desc: 'Call volumes, routing accuracy, no-show rates, and savings.' },
  { title: 'Ongoing Management', desc: 'Prompt tuning, escalation handling, and monthly reviews.' },
]

export default function WhatsIncludedSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={10} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%] gap-[clamp(16px,2.5vw,28px)]">
        <div className="max-w-[55%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              What's Included
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3vw, 48px)', lineHeight: 1.04 }}>
              Everything you need. <i style={{ color: 'var(--teal)' }}>Nothing you don't.</i>
            </h2>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(10px,1.2vw,16px)] mt-auto">
          {included.map((item, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.08}>
              <GlassCard variant="teal" hover>
                <h3 className="font-sans font-semibold text-[clamp(13px,1.1vw,17px)] text-white mb-1.5">{item.title}</h3>
                <p className="font-sans text-[clamp(11px,0.9vw,14px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
