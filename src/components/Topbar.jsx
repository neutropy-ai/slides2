import BlurReveal from './anim/BlurReveal'

/**
 * Topbar with Neutropy logo and right-side content (slide number or metadata).
 */
export default function Topbar({ right, delay = 0.05 }) {
  return (
    <BlurReveal delay={delay} className="flex justify-between items-start px-[5%] pt-[3.5%] relative z-10">
      <Logo />
      {right && <div>{right}</div>}
    </BlurReveal>
  )
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ background: 'linear-gradient(180deg, #00E5F5 0%, #06B6D4 50%, #0891B2 100%)' }}
      >
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 26V6l16 20V6" />
        </svg>
      </div>
      <span className="font-semibold text-[15px] text-white tracking-tight">Neutropy</span>
    </div>
  )
}

export function SlideNumber({ n }) {
  return (
    <span className="text-xl font-normal leading-relaxed" style={{ color: 'var(--muted-2)' }}>
      {String(n).padStart(2, '0')}
    </span>
  )
}

export function MetadataRow({ items }) {
  return (
    <div className="flex gap-[clamp(16px,3vw,40px)]">
      {items.map(({ label, value }, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <span className="text-[13px]" style={{ color: 'var(--muted-2)' }}>{label}</span>
          <span className="text-[13px] text-white">{value}</span>
        </div>
      ))}
    </div>
  )
}
