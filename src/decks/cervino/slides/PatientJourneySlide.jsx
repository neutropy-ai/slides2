import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(6,182,212,0.04), transparent), #000'

const steps = [
  { num: '01', title: 'Patient Calls', desc: 'AI answers instantly. No hold queue. Natural conversation.' },
  { num: '02', title: 'Symptom Intake', desc: 'AI gathers symptoms, history, and urgency in under 60 seconds.' },
  { num: '03', title: 'Smart Routing', desc: 'Matched to the right consultant and time slot automatically.' },
  { num: '04', title: 'Confirmation', desc: 'WhatsApp confirmation with prep instructions sent immediately.' },
  { num: '05', title: 'Reminder', desc: '48hr and same-day reminders. Waitlist backfill if cancelled.' },
  { num: '06', title: 'Follow-Up', desc: 'Post-visit check-in and next appointment scheduling via WhatsApp.' },
]

export default function PatientJourneySlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={6} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col px-[5%] py-[3%] gap-[clamp(16px,2.5vw,28px)]">
        <div className="max-w-[60%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Patient Journey
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3vw, 48px)', lineHeight: 1.04 }}>
              End-to-end, from first call to <i style={{ color: 'var(--teal)' }}>follow-up.</i>
            </h2>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(10px,1.2vw,16px)] mt-auto">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.08}>
              <GlassCard hover>
                <div className="font-sans text-[clamp(10px,0.8vw,13px)] font-bold tracking-widest mb-2" style={{ color: 'var(--teal)' }}>
                  {s.num}
                </div>
                <h3 className="font-sans font-semibold text-[clamp(13px,1.1vw,17px)] text-white mb-1.5">{s.title}</h3>
                <p className="font-sans text-[clamp(11px,0.9vw,14px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
