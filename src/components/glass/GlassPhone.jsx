/**
 * Liquid glass phone mockup.
 * Premium frosted glass frame with gradient border, ambient glow,
 * edge highlights, and depth effects.
 */
export default function GlassPhone({ children, className = '' }) {
  return (
    /* Gradient border wrapper — the background gradient shows through
       the 1px gap between this outer div and the inner glass div */
    <div
      className={`relative ${className}`}
      style={{
        width: 'clamp(220px, 20vw, 280px)',
        borderRadius: '29px',
        padding: '1px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 30%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.01) 100%)',
        boxShadow: '0 0 60px rgba(6,182,212,0.08), 0 24px 64px rgba(0,0,0,0.5)',
      }}
    >
      {/* Glass frame */}
      <div
        className="relative"
        style={{
          borderRadius: '28px',
          padding: '6px',
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(24px) saturate(200%) brightness(1.1)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%) brightness(1.1)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.15)',
        }}
      >
        {/* Top specular highlight — brighter, wider */}
        <div
          className="absolute top-0 left-3 right-3 h-px z-10"
          style={{
            background:
              'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.38) 50%, rgba(255,255,255,0.25) 75%, transparent 95%)',
          }}
        />
        {/* Secondary diffuse top glow */}
        <div
          className="absolute top-0 left-6 right-6 z-10"
          style={{
            height: '6px',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
            borderRadius: '28px 28px 0 0',
          }}
        />

        {/* Left edge highlight */}
        <div
          className="absolute left-0 top-8 bottom-8 z-10 pointer-events-none"
          style={{
            width: '1px',
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.10) 80%, transparent 100%)',
          }}
        />
        {/* Right edge highlight */}
        <div
          className="absolute right-0 top-8 bottom-8 z-10 pointer-events-none"
          style={{
            width: '1px',
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.10) 80%, transparent 100%)',
          }}
        />

        {/* Notch with glass highlight */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 z-20">
          {/* Notch highlight rim */}
          <div
            style={{
              width: '84px',
              height: '6px',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
              padding: '1px 1px 0 1px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderBottomLeftRadius: '9px',
                borderBottomRightRadius: '9px',
                background: 'rgba(0, 0, 0, 0.85)',
              }}
            />
          </div>
        </div>

        {/* Inner screen with inset shadow for depth */}
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: '24px',
            background: '#080808',
            boxShadow:
              'inset 0 2px 6px rgba(0,0,0,0.6), inset 0 0 2px rgba(0,0,0,0.4)',
          }}
        >
          {children}
        </div>
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
