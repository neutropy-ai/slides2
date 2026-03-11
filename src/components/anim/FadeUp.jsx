import { useRef, useEffect, useState } from 'react'

/**
 * Fade-up animation for cards, stats, and UI elements.
 * Animates from y:30px + opacity:0 to neutral.
 */
export default function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      const slide = el.closest('[data-active]')
      if (slide?.dataset.active === 'true') setVisible(true)
    }
    requestAnimationFrame(check)
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : `translateY(${distance}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}
