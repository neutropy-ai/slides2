import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import GlassNav from './glass/GlassNav'

const DeckContext = createContext(null)

export function useDeck() {
  return useContext(DeckContext)
}

export default function Deck({ children, className = '' }) {
  const slides = Array.isArray(children) ? children : [children]
  const total = slides.length
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((n) => {
    if (n < 0 || n >= total) return
    setCurrent(n)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  // Touch swipe
  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = e.touches[0].clientX }
    const onEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 50) {
        dx < 0 ? next() : prev()
      }
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev])

  return (
    <DeckContext.Provider value={{ current, total, goTo, next, prev }}>
      <div className={`relative w-full h-full overflow-hidden font-sans bg-black ${className}`}>
        {/* SVG filters for glass effects - mounted once */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="glass-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        {/* All slides rendered simultaneously */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 w-full h-full transition-opacity duration-[400ms]"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 10 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            {/* Clone slide element with isActive prop */}
            {typeof slide.type === 'function'
              ? <slide.type {...slide.props} isActive={i === current} slideIndex={i} />
              : slide
            }
          </div>
        ))}

        {/* Navigation dots */}
        <GlassNav current={current} total={total} goTo={goTo} />
      </div>
    </DeckContext.Provider>
  )
}
