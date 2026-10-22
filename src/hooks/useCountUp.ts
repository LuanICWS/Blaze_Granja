import { useEffect, useState } from 'react'

// Faz um número "subir" de 0 até o valor final.
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduce ? 1 : duration
    const startedAt = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / total, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration])

  return value
}
