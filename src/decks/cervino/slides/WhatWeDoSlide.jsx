import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(6,182,212,0.04), transparent), #000'

const features = [
  {
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
    title: 'AI Receptionist',
    desc: 'Answers every call. Natural voice. Routes by specialty. Books appointments. Handles FAQs. Escalates when it should.',
  },
  {
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    title: 'WhatsApp Automation',
    desc: 'Confirmations, specialty-specific prep, reminders, waitlist backfill, and post-visit follow-ups.',
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: 'Outbound Voice Agents',
    desc: 'AI calls GP practices to confirm referrals, chase missing details, manage waitlists. No more phone tag.',
  },
  {
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    title: 'Intelligent Routing',
    desc: 'Patient describes symptoms. AI triages to the right department. No transfers. No hold music.',
  },
]

function FeatureIcon({ children }) {
  return (
    <div
      className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-3"
      style={{ background: 'var(--teal-glow)' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  )
}

export default function WhatWeDoSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={3} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col gap-[clamp(20px,3vw,36px)] px-[5%] py-[3%]">
        <div className="max-w-[55%]">
          <BlurReveal delay={0.15}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--muted)' }}>
              What Neutropy Does
            </p>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(20px, 3vw, 48px)', lineHeight: 1.04 }}>
              Done-for-you AI voice and messaging for healthcare practices
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="mt-3 max-w-[90%]" style={{ fontSize: 'clamp(12px, 1vw, 16px)', color: 'var(--muted)', lineHeight: 1.6 }}>
              We audit, build, and manage everything. Not a platform you learn. A managed service that runs.
            </p>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] mt-auto">
          {features.map((f, i) => (
            <FadeUp key={i} delay={0.5 + i * 0.1}>
              <GlassCard hover>
                <FeatureIcon>{f.icon}</FeatureIcon>
                <h3 className="font-sans font-semibold text-[clamp(14px,1.2vw,18px)] text-white mb-1.5">{f.title}</h3>
                <p className="font-sans text-[clamp(12px,1vw,15px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{f.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
