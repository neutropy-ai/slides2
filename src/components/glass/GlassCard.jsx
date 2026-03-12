/**
 * Premium liquid glass card with multi-layer backdrop blur, animated shimmer,
 * gradient borders, specular highlights, and deep inner/outer shadows.
 *
 * Props:
 * - variant: 'default' | 'elevated' | 'teal' | 'solid'
 * - hover: boolean - enable hover lift
 * - glow: boolean - add teal glow on hover
 * - children, className, style
 */

const shimmerKeyframes = `
@keyframes glassShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
`;

let shimmerInjected = false;
function ensureShimmerStyles() {
  if (shimmerInjected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.textContent = shimmerKeyframes;
  document.head.appendChild(style);
  shimmerInjected = true;
}

export default function GlassCard({
  children,
  variant = 'default',
  hover = false,
  glow = false,
  className = '',
  style = {},
  ...props
}) {
  ensureShimmerStyles();

  /* ── Variant base styles (background, backdrop, shadow) ── */

  const base = {
    default: {
      background: `
        radial-gradient(ellipse 60% 50% at 15% 10%, rgba(255,255,255,0.045), transparent 70%),
        linear-gradient(165deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 50%, rgba(0,0,0,0.02) 100%),
        rgba(255, 255, 255, 0.025)
      `.trim(),
      backdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
      boxShadow: `
        0 8px 32px rgba(0,0,0,0.4),
        0 2px 8px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.1),
        inset 0 -1px 0 rgba(0,0,0,0.2)
      `.trim(),
    },
    elevated: {
      background: `
        radial-gradient(ellipse 50% 40% at 20% 5%, rgba(255,255,255,0.07), transparent 60%),
        linear-gradient(165deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 50%, rgba(0,0,0,0.03) 100%),
        rgba(255, 255, 255, 0.04)
      `.trim(),
      backdropFilter: 'blur(28px) saturate(200%) brightness(1.15)',
      WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(1.15)',
      boxShadow: `
        0 12px 48px rgba(0,0,0,0.5),
        0 4px 12px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.15),
        inset 0 -1px 0 rgba(0,0,0,0.25)
      `.trim(),
    },
    teal: {
      background: `
        radial-gradient(ellipse 60% 50% at 15% 10%, rgba(6,182,212,0.12), transparent 70%),
        radial-gradient(ellipse 80% 60% at 80% 90%, rgba(14,165,233,0.06), transparent 70%),
        linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(14,165,233,0.06) 50%, rgba(6,182,212,0.03) 100%),
        rgba(6, 182, 212, 0.04)
      `.trim(),
      backdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
      boxShadow: `
        0 8px 32px rgba(0,0,0,0.4),
        0 2px 8px rgba(6,182,212,0.15),
        inset 0 1px 0 rgba(6,182,212,0.15),
        inset 0 -1px 0 rgba(0,0,0,0.2),
        inset 0 0 20px rgba(6,182,212,0.04)
      `.trim(),
    },
    solid: {
      background: 'linear-gradient(135deg, var(--teal), var(--teal-2))',
      backdropFilter: 'none',
      boxShadow: `
        0 8px 32px rgba(0,0,0,0.4),
        0 2px 8px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.2),
        inset 0 -1px 0 rgba(0,0,0,0.15)
      `.trim(),
    },
  };

  const v = base[variant] || base.default;

  /* ── Border gradient styles per variant ── */

  const borderGradients = {
    default:
      'linear-gradient(160deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.02) 70%, transparent 100%)',
    elevated:
      'linear-gradient(160deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.03) 70%, transparent 100%)',
    teal:
      'linear-gradient(160deg, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0.2) 35%, rgba(14,165,233,0.08) 65%, transparent 100%)',
    solid: 'none',
  };

  /* ── Specular highlight (top edge) ── */

  const highlightGradients = {
    default:
      'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 75%, transparent 95%)',
    elevated:
      'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.2) 75%, transparent 95%)',
    teal:
      'linear-gradient(90deg, transparent 5%, rgba(6,182,212,0.25) 25%, rgba(6,182,212,0.4) 50%, rgba(6,182,212,0.25) 75%, transparent 95%)',
    solid:
      'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 75%, transparent 95%)',
  };

  const showShimmer = variant !== 'solid';
  const showBorder = variant !== 'solid';

  return (
    <div
      className={`rounded-2xl relative overflow-hidden ${hover ? 'transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}
      style={{
        ...v,
        border: 'none',
        ...style,
      }}
      {...props}
    >
      {/* ── Gradient border (::before equivalent) ── */}
      {showBorder && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: '1px',
            background: borderGradients[variant] || borderGradients.default,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}

      {/* ── Specular top-edge highlight ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: highlightGradients[variant] || highlightGradients.default,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── Solid variant specular shine overlay ── */}
      {variant === 'solid' && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background:
              'linear-gradient(165deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      )}

      {/* ── Animated shimmer streak (::after equivalent) ── */}
      {showShimmer && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40%',
            overflow: 'hidden',
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              background:
                variant === 'teal'
                  ? 'linear-gradient(105deg, transparent 0%, rgba(6,182,212,0.04) 30%, rgba(6,182,212,0.08) 50%, rgba(6,182,212,0.04) 70%, transparent 100%)'
                  : 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 70%, transparent 100%)',
              animation: 'glassShimmer 8s ease-in-out infinite',
            }}
          />
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 p-[clamp(18px,2vw,28px)]">
        {children}
      </div>

      {/* ── Glow effect on hover ── */}
      {glow && (
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)',
            zIndex: 0,
          }}
        />
      )}
    </div>
  );
}
