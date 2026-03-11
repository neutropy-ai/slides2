import { useRef, useEffect, useState } from 'react'

/**
 * Blur-reveal animation.
 * Animates from opacity:0 + blur(8px) + translateY(6px) to clear.
 */
export default function BlurReveal({
  children,
  delay = 0,
  duration = 0.9,
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
        filter: visible ? 'blur(0px)' : 'blur(8px)',
        transform: visible ? 'translateY(0px)' : 'translateY(6px)',
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, filter ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
        willChange: 'opacity, filter, transform',
      }}
    >
      {children}
    </Tag>
  )
}
