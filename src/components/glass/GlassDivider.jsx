/**
 * Liquid glass divider line.
 * Gradient-faded horizontal line with subtle glow.
 */
export default function GlassDivider({ className = '' }) {
  return (
    <div className={`mx-[5%] mt-6 relative ${className}`}>
      <div
        className="w-full h-px"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.03))',
        }}
      />
      {/* Subtle glow beneath */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.06) 50%, transparent)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  )
}
