import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(6,182,212,0.04), transparent), #000'

const preps = [
  { dept: 'Gastroenterology', msg: 'Fast 12 hours before endoscopy. No food or drink after 8pm.' },
  { dept: 'Neurology', msg: 'Bring current medication list and any previous scans or test results.' },
  { dept: 'Respiratory', msg: 'Avoid using your inhaler 4 hours before lung function test if safe.' },
]

function WAMockup({ name, children }) {
  return (
    <div className="rounded-xl overflow-hidden w-full" style={{ border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 16px 48px rgba(0,0,0,0.4)' }}>
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: '#075E54' }}>
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white font-semibold" style={{ background: 'rgba(255,255,255,0.15)' }}>CM</div>
        <span className="text-[10px] font-semibold text-white">{name}</span>
      </div>
      <div className="p-2.5" style={{ background: '#0b141a' }}>
        <div className="rounded-[0_8px_8px_8px] px-2.5 py-2 text-[10px] leading-snug" style={{ background: '#1f2c34', color: 'rgba(255,255,255,0.85)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function PatientJourneySlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={6} />} />
      <GlassDivider />

      <div className="flex-1 flex px-[5%] py-[3%] pb-[4%] gap-[4%]">
        {/* Left: heading + prep cards */}
        <div className="flex-1 flex flex-col justify-center">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              Patient Journey
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3vw, 48px)', lineHeight: 1.04 }}>
              Reminders that <i style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.4) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 12px rgba(6,182,212,0.2))' }}>reduce no-shows.</i>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.45}>
            <p className="mt-3 max-w-[90%]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              Every touchpoint automated by specialty. Patients get the right prep instructions, at the right time, on the channel they actually check.
            </p>
          </BlurReveal>

          <div className="flex flex-col gap-2 mt-5">
            {preps.map((p, i) => (
              <FadeUp key={i} delay={0.5 + i * 0.08}>
                <GlassCard>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-semibold tracking-[0.1em] uppercase shrink-0" style={{ color: 'var(--teal)', minWidth: '110px' }}>{p.dept}</span>
                    <span className="text-[clamp(11px,0.9vw,13px)]" style={{ color: 'var(--muted)' }}>{p.msg}</span>
                  </div>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Right: WhatsApp mockups */}
        <FadeUp delay={0.4} className="flex flex-col items-center justify-center gap-3" style={{ width: 'clamp(210px, 20vw, 270px)' }}>
          <WAMockup name="Cervino Medical">
            Hi Michael, reminder for your neurology appointment.<br /><br />
            <strong className="text-white">Prof Peter Widdess-Walsh</strong><br />
            Thursday 20th March, 10:00am<br />
            Suite 16, Beacon Court, Sandyford<br /><br />
            Please bring your medication list and previous MRI scans.<br /><br />
            <span style={{ color: '#53bdeb', fontWeight: 600 }}>Confirm</span> | <span style={{ color: '#53bdeb', fontWeight: 600 }}>Reschedule</span>
            <div className="text-[8px] text-right mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>9:15 am</div>
          </WAMockup>

          <WAMockup name="Cervino Medical">
            Hi Sarah, a slot has opened for your respiratory appointment with Dr Sahadevan.<br /><br />
            <strong className="text-white">Tomorrow at 2:30pm</strong><br />
            Beacon Court, Sandyford<br /><br />
            <span style={{ color: '#53bdeb', fontWeight: 600 }}>Yes, book me in</span> | <span style={{ color: '#53bdeb', fontWeight: 600 }}>Keep original date</span>
            <div className="text-[8px] text-right mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>11:42 am</div>
          </WAMockup>
        </FadeUp>
      </div>
    </Slide>
  )
}
