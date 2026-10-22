// Língua de fogo que separa o topo (azul) do resto da página (branco).
function tonguesPath(width: number, count: number, offset: number) {
  const w = width / count
  let d = `M0 90`
  for (let i = 0; i < count; i++) {
    const x = i * w + offset
    const peak = 14 + ((i * 5) % 4) * 12
    d += ` C ${x + w * 0.2} 90, ${x + w * 0.32} ${peak + 34}, ${x + w * 0.5} ${peak}`
    d += ` C ${x + w * 0.68} ${peak + 34}, ${x + w * 0.8} 90, ${x + w} 90`
  }
  d += ` L ${width + w} 120 L 0 120 Z`
  return d
}

export default function FlameDivider() {
  return (
    <svg
      className="divider"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="divider-fire" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8a1f" />
          <stop offset="1" stopColor="#e8480c" />
        </linearGradient>
      </defs>
      <path className="divider__back" d={tonguesPath(1200, 16, -30)} fill="url(#divider-fire)" />
      <path d={tonguesPath(1200, 20, 0)} fill="currentColor" />
    </svg>
  )
}
