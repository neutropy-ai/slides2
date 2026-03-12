/**
 * Liquid glass divider line.
 * Gradient-faded horizontal line with teal underglow and travelling shimmer.
 */
export default function GlassDivider({ className = '' }) {
  return (
    <div className={`mx-[5%] mt-6 relative ${className}`}>
      {/* ── Base line (more visible white gradient) ── */}
      <div
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.14) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.14) 80%, rgba(255,255,255,0.05))',
        }}
      />

      {/* ── Wider teal underglow ── */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(6,182,212,0.14) 30%, rgba(6,182,212,0.18) 50%, rgba(6,182,212,0.14) 70%, transparent)',
          filter: 'blur(5px)',
        }}
      />

      {/* ── Secondary softer glow layer for depth ── */}
      <div
        className="absolute -top-px left-[15%] right-[15%] h-[3px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(6,182,212,0.06) 30%, rgba(6,182,212,0.09) 50%, rgba(6,182,212,0.06) 70%, transparent)',
          filter: 'blur(8px)',
        }}
      />

      {/* ── Travelling shimmer highlight ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        style={{ maskImage: 'linear-gradient(90deg, transparent 5%, black 20%, black 80%, transparent 95%)' }}
      >
        <div
          style={{
            width: '200%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.35) 48%, rgba(6,182,212,0.25) 50%, rgba(255,255,255,0.35) 52%, transparent 60%, transparent 100%)',
            animation: 'glassDividerShimmer 10s ease-in-out infinite',
          }}
        />
      </div>

      {/* Keyframes injected once via <style> */}
      <style>{`
        @keyframes glassDividerShimmer {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  )
}
