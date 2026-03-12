import { useRef, useEffect } from 'react'
import Hls from 'hls.js'

/**
 * HLS video player component for Mux streams.
 * Attaches hls.js when needed, falls back to native HLS on Safari.
 */
export default function HlsVideo({ src, className = '' }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src) return

    let hls

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = src
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}
