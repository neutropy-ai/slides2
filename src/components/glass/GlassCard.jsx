/**
 * Liquid glass card with backdrop blur, refraction highlight, and subtle border gradient.
 *
 * Props:
 * - variant: 'default' | 'elevated' | 'teal' | 'solid'
 * - hover: boolean - enable hover lift
 * - glow: boolean - add teal glow on hover
 * - children, className
 */
export default function GlassCard({
  children,
  variant = 'default',
  hover = false,
  glow = false,
  className = '',
  style = {},
  ...props
}) {
  const variants = {
    default: {
      background: 'rgba(255, 255, 255, 0.025)',
      border: '1px solid rgba(255, 255, 255, 0.07)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    },
    elevated: {
      background: 'rgba(255, 255, 255, 0.035)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
    },
    teal: {
      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(14, 165, 233, 0.04))',
      border: '1px solid rgba(6, 182, 212, 0.2)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    },
    solid: {
      background: 'linear-gradient(135deg, var(--teal), var(--teal-2))',
      border: 'none',
      backdropFilter: 'none',
    },
  }

  const v = variants[variant] || variants.default

  return (
    <div
      className={`rounded-2xl relative overflow-hidden ${hover ? 'transition-all duration-300 hover:-translate-y-0.5' : ''} ${className}`}
      style={{
        ...v,
        ...(glow && hover ? {} : {}),
        ...style,
      }}
      {...props}
    >
      {/* Top highlight edge - liquid glass refraction line */}
      {variant !== 'solid' && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 70%, transparent)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-[clamp(18px,2vw,28px)]">
        {children}
      </div>

      {/* Glow effect */}
      {glow && (
        <div
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)',
          }}
        />
      )}
    </div>
  )
}
