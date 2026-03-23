import Slide from '../../../components/Slide'
import Topbar, { SlideNumber } from '../../../components/Topbar'
import GlassDivider from '../../../components/glass/GlassDivider'
import GlassCard from '../../../components/glass/GlassCard'
import SlideUpLine from '../../../components/anim/SlideUpLine'
import BlurReveal from '../../../components/anim/BlurReveal'
import FadeUp from '../../../components/anim/FadeUp'

const ATM = 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(99,102,241,0.04), transparent), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(6,182,212,0.04), transparent), #000'

const services = [
  {
    title: 'Inbound receptionist',
    desc: 'Every call answered and routed, around the clock',
  },
  {
    title: 'Outbound caller',
    desc: 'Reminders, confirmations, referral follow-up',
  },
  {
    title: 'WhatsApp messaging',
    desc: 'Prep instructions, reactivation, follow-ups',
  },
  {
    title: 'Review automations',
    desc: 'More reviews, better Google visibility',
  },
]

export default function WhatWeDoSlide({ isActive, slideIndex }) {
  return (
    <Slide isActive={isActive} slideIndex={slideIndex} atmosphere={ATM}>
      <Topbar right={<SlideNumber n={4} />} />
      <GlassDivider />

      <div className="flex-1 flex flex-col justify-center px-[5%]">
        {/* Header */}
        <div className="mb-[clamp(12px,1.5vw,20px)]">
          <BlurReveal delay={0.1}>
            <p className="font-sans text-[clamp(11px,1vw,16px)] font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--teal)' }}>
              What Neutropy Does
            </p>
          </BlurReveal>
          <h2 className="font-serif font-normal text-white mt-3" style={{ fontSize: 'clamp(28px, 4.5vw, 72px)', lineHeight: 1.0 }}>
            <SlideUpLine delay={0.2}>
              AI voice and messaging.{' '}
              <i style={{ background: 'linear-gradient(135deg, #00E7F7 0%, #04B2BB 45%, #6366F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Managed for you.
              </i>
            </SlideUpLine>
          </h2>
        </div>

        <BlurReveal delay={0.4}>
          <p className="max-w-[580px] mb-[clamp(24px,3vw,44px)]" style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', color: 'var(--muted)', lineHeight: 1.65 }}>
            We build and run everything. Not a platform to learn. A managed service that handles the calls your team can't get to.
          </p>
        </BlurReveal>

        {/* 4 service cards in a row */}
        <div className="grid grid-cols-4 gap-[clamp(10px,1.2vw,16px)]">
          {services.map((s, i) => (
            <FadeUp key={i} delay={0.5 + i * 0.1}>
              <GlassCard variant="teal" hover>
                <h3 className="font-sans font-semibold text-[clamp(14px,1.2vw,18px)] text-white mb-2">{s.title}</h3>
                <p className="font-sans text-[clamp(11px,0.9vw,14px)] leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </Slide>
  )
}
