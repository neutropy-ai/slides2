/**
 * Frosted glass overlay panel.
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
          ? 'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(14,165,233,0.03))'
          : 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: tealAccent
          ? '1px solid rgba(6,182,212,0.12)'
          : '1px solid rgba(255,255,255,0.05)',
        ...style,
      }}
    >
      {/* Top edge highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: tealAccent
            ? 'linear-gradient(90deg, transparent, rgba(6,182,212,0.15) 50%, transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
        }}
      />

      {/* Left accent bar for teal variant */}
      {tealAccent && (
        <div
          className="absolute top-2 bottom-2 left-0 w-[2px] rounded-full"
          style={{
            background: 'linear-gradient(to bottom, var(--teal), var(--teal-2))',
          }}
        />
      )}

      <div className="relative z-10 px-6 py-4">
        {children}
      </div>
    </div>
  )
}
