/**
 * Liquid glass navigation dots.
 * Frosted pill container with active dot highlight.
 */
export default function GlassNav({ current, total, goTo }) {
  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-3 py-2 rounded-full"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className="border-none outline-none p-0 rounded-full transition-all duration-300"
          style={{
            width: i === current ? '24px' : '8px',
            height: '8px',
            background: i === current
              ? 'linear-gradient(90deg, var(--teal), var(--teal-2))'
              : 'rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  )
}
