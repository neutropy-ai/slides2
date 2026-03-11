import { useState, useEffect } from 'react'

/**
 * Base Slide component. Handles:
 * - Background layer (persists across activations)
 * - Content wrapper (re-mounts via key to re-trigger animations)
 * - Activation counting for animation re-trigger
 */
export default function Slide({
  isActive = false,
  slideIndex = 0,
  background,
  atmosphere,
  children,
  className = '',
}) {
  const [activationCount, setActivationCount] = useState(0)

  useEffect(() => {
    if (isActive) {
      setActivationCount((c) => c + 1)
    }
  }, [isActive])

  return (
    <div className={`w-full h-full flex flex-col relative overflow-hidden ${className}`}>
      {/* Background layer - persists */}
      {background && (
        <div className="absolute inset-0 w-full h-full z-0">
          {background}
        </div>
      )}

      {/* Atmosphere gradient + noise */}
      {atmosphere && (
        <div className="absolute inset-0 z-0 noise" style={{ background: atmosphere }}>
        </div>
      )}

      {/* Content wrapper - re-mounts on each activation to re-trigger animations */}
      <div
        key={activationCount}
        className="relative z-10 flex flex-col w-full h-full"
        data-active={isActive ? 'true' : 'false'}
      >
        {typeof children === 'function' ? children({ isActive, activationCount }) : children}
      </div>
    </div>
  )
}
