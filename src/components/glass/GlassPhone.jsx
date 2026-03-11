/**
 * Liquid glass phone mockup.
 * Frosted glass frame with inner content area.
 */
export default function GlassPhone({ children, className = '' }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: 'clamp(220px, 20vw, 280px)',
        borderRadius: '28px',
        padding: '6px',
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 24px 64px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Top highlight */}
      <div
        className="absolute top-0 left-4 right-4 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 70%, transparent)',
        }}
      />

      {/* Notch */}
      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 z-20">
        <div
          className="h-[4px] rounded-b-lg"
          style={{
            width: '80px',
            background: 'rgba(0, 0, 0, 0.8)',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        />
      </div>

      {/* Inner screen */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: '24px',
          background: '#080808',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * Phone call UI header
 */
export function PhoneCallHeader({ name, status, avatar, duration }) {
  return (
    <div className="text-center py-5 px-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold text-white"
        style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-2))' }}
      >
        {avatar}
      </div>
      <div className="text-xs font-semibold text-white">{name}</div>
      <div className="text-[10px] font-medium mt-0.5" style={{ color: 'var(--teal)' }}>{status}</div>
      {duration && <div className="text-[10px] mt-1" style={{ color: 'var(--muted-2)' }}>{duration}</div>}
      <div className="flex gap-[3px] justify-center mt-2.5">
        {[14, 20, 28, 18, 12].map((h, i) => (
          <i
            key={i}
            className="block rounded-sm"
            style={{
              width: '3px',
              height: `${h}px`,
              background: 'var(--teal)',
              animation: `wave 0.8s ease-in-out ${i * 0.1}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <style>{`@keyframes wave{0%{transform:scaleY(.35)}100%{transform:scaleY(1)}}`}</style>
    </div>
  )
}

/**
 * Phone transcript area
 */
export function PhoneTranscript({ children }) {
  return (
    <div className="px-4 py-3.5 text-[11.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>
      {children}
    </div>
  )
}

/**
 * Transcript message
 */
export function TranscriptMsg({ role, children }) {
  const isAI = role === 'ai'
  return (
    <p className="mb-2" style={{ maxWidth: 'none' }}>
      <span
        className="font-bold"
        style={{ color: isAI ? 'var(--teal)' : 'white' }}
      >
        {isAI ? 'AI:' : 'Caller:'}
      </span>{' '}
      {children}
    </p>
  )
}

/**
 * Routing tag badge
 */
export function RoutingTag({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-semibold mt-1"
      style={{
        background: 'var(--teal-dim)',
        border: '1px solid rgba(6, 182, 212, 0.15)',
        color: 'var(--teal)',
      }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      {children}
    </span>
  )
}
