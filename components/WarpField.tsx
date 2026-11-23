'use client'

import {useEffect, useRef} from 'react'

type Star = {x: number; y: number; z: number}

const CRUISE = 0.07 // depth units per second at rest
const WARP = 0.55 // while the card is pointed at

/**
 * Star field flying toward a vanishing point at the centre — the same "warp" as the image
 * editor's landing page. Stars stretch into streaks while `boost` is on. Pauses when off-screen
 * or in a hidden tab, and stays still with reduced motion.
 */
export function WarpField({boost}: {boost: boolean}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const boostRef = useRef(boost)
  boostRef.current = boost

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let stars: Star[] = []
    const spawn = (s: Star, z = 1) => {
      s.x = (Math.random() * 2 - 1) * 1.4
      s.y = (Math.random() * 2 - 1) * 1.4
      s.z = z
      return s
    }
    const layout = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      const count = Math.round(Math.min(900, Math.max(240, (w * h) / 380)))
      stars = Array.from({length: count}, () => spawn({x: 0, y: 0, z: 0}, 0.05 + Math.random() * 0.95))
    }

    let speed = CRUISE
    const draw = (dt: number) => {
      const target = boostRef.current ? WARP : CRUISE
      speed += (target - speed) * Math.min(1, dt * (target > speed ? 2.4 : 1.4))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      ctx.lineCap = 'round'
      ctx.strokeStyle = '#ffffff'
      const cx = w / 2
      const cy = h / 2
      const f = Math.max(w, h) * 0.5
      const trail = 0.004 + speed * 0.09
      for (const s of stars) {
        s.z -= speed * dt
        const x = cx + (s.x / s.z) * f
        const y = cy + (s.y / s.z) * f
        if (s.z <= 0.02 || x < -40 || x > w + 40 || y < -40 || y > h + 40) {
          spawn(s)
          continue
        }
        const zt = Math.min(1, s.z + trail)
        const near = 1 - s.z
        ctx.globalAlpha = Math.min(1, 0.35 + near * 1.3)
        ctx.lineWidth = 0.8 + near * near * 2.2
        ctx.beginPath()
        ctx.moveTo(cx + (s.x / zt) * f, cy + (s.y / zt) * f)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = true
    let raf = 0
    let last = 0
    const loop = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0
      last = now
      draw(dt)
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      cancelAnimationFrame(raf)
      last = 0
      if (reduce.matches || document.hidden || !visible) {
        draw(0)
        return
      }
      raf = requestAnimationFrame(loop)
    }

    layout()
    start()
    const ro = new ResizeObserver(() => {
      layout()
      if (reduce.matches) draw(0)
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      start()
    })
    io.observe(canvas)
    document.addEventListener('visibilitychange', start)
    reduce.addEventListener('change', start)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', start)
      reduce.removeEventListener('change', start)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden={'true'}
      style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
    />
  )
}
