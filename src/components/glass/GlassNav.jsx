/**
 * Liquid glass navigation dots.
 * Premium frosted pill with specular highlights, gradient border,
 * inner glow, and glowing active dot.
 */
export default function GlassNav({ current, total, goTo }) {
  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100]"
      style={{ padding: '1px', borderRadius: '9999px',
        /* Gradient border: brighter on top, fading down */
        background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 100%)',
      }}
    >
      {/* Top specular highlight — thin bright line across the top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
          borderRadius: '9999px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Inner pill */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full"
        style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(20px) saturate(180%) brightness(1.05)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.05)',
          boxShadow: [
            /* Outer depth shadow */
            '0 4px 24px rgba(0,0,0,0.4)',
            /* Hairline outer ring */
            '0 0 0 1px rgba(255,255,255,0.06)',
            /* Inner glow for glass depth */
            'inset 0 1px 1px rgba(255,255,255,0.08)',
            'inset 0 -1px 2px rgba(0,0,0,0.15)',
          ].join(', '),
        }}
      >
        {Array.from({ length: total }, (_, i) => {
          const isActive = i === current;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="border-none outline-none p-0 rounded-full transition-all duration-300"
              style={{
                width: isActive ? '24px' : '8px',
                height: '8px',
                background: isActive
                  ? 'linear-gradient(90deg, var(--teal), var(--teal-2))'
                  : 'rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                /* Active dot glow */
                boxShadow: isActive
                  ? '0 0 8px 2px rgba(45, 212, 191, 0.45), 0 0 2px rgba(45, 212, 191, 0.3)'
                  : 'none',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
