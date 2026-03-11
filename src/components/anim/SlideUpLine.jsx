import { useRef, useEffect, useState } from 'react'

/**
 * Clip-reveal slide-up animation for heading lines.
 * Wraps children in an overflow-hidden container.
 * Inner span animates from y:110% to y:0%.
 */
export default function SlideUpLine({
  children,
  delay = 0,
  duration = 0.7,
  className = '',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )

    // Also check if parent has data-active
    const checkActive = () => {
      const slide = el.closest('[data-active]')
      if (slide?.dataset.active === 'true') setVisible(true)
    }

    observer.observe(el)
    // Small delay to let parent mount
    requestAnimationFrame(checkActive)

    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`inline-block overflow-hidden align-bottom ${className}`}
    >
      <span
        className="inline-block"
        style={{
          transform: visible ? 'translateY(0%)' : 'translateY(110%)',
          transition: `transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
          willChange: 'transform',
        }}
      >
        {children}
      </span>
    </span>
  )
}
