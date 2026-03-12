/**
 * Frosted glass overlay panel — premium liquid glass effect.
 * Used for callouts, highlighted sections, and overlay content.
 */
export default function FrostedOverlay({
  children,
  className = '',
  tealAccent = false,
  style = {},
}) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: tealAccent
          ? 'linear-gradient(135deg, rgba(6,182,212,0.10), rgba(14,165,233,0.05))'
          : 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        backdropFilter: 'blur(20px) saturate(180%) brightness(1.05)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.05)',
        border: '1px solid transparent',
        borderImage: tealAccent
          ? 'linear-gradient(to bottom, rgba(6,182,212,0.30), rgba(6,182,212,0.08)) 1'
          : 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.04)) 1',
        boxShadow: tealAccent
          ? 'inset 0 1px 1px rgba(255,255,255,0.05), inset 0 -1px 2px rgba(0,0,0,0.15), 0 0 20px rgba(6,182,212,0.08), 0 0 40px rgba(6,182,212,0.04)'
          : 'inset 0 1px 1px rgba(255,255,255,0.05), inset 0 -1px 2px rgba(0,0,0,0.15)',
        ...style,
      }}
    >
      {/* Top edge specular highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: tealAccent
            ? 'linear-gradient(90deg, transparent 10%, rgba(6,182,212,0.35) 50%, transparent 90%)'
            : 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.18) 50%, transparent 90%)',
        }}
      />

      {/* Secondary softer glow line just below the specular edge */}
      <div
        className="absolute top-px left-0 right-0 h-[2px]"
        style={{
          background: tealAccent
            ? 'linear-gradient(90deg, transparent 15%, rgba(6,182,212,0.10) 50%, transparent 85%)'
            : 'linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.06) 50%, transparent 85%)',
        }}
      />

      {/* Left accent bar for teal variant — now with glow */}
      {tealAccent && (
        <div
          className="absolute top-2 bottom-2 left-0 w-[2px] rounded-full"
          style={{
            background: 'linear-gradient(to bottom, var(--teal), var(--teal-2))',
            boxShadow: '0 0 6px rgba(6,182,212,0.4), 0 0 12px rgba(6,182,212,0.15)',
          }}
        />
      )}

      <div className="relative z-10 px-6 py-4">
        {children}
      </div>
    </div>
  )
}
