import { useMemo, useState } from 'react'
import type { PointerEvent } from 'react'
import { useInView } from '../hooks/useInView'
import { BIRDS, production } from '../data/production'

const W = 640
const H = 300
const PAD = { top: 24, right: 20, bottom: 36, left: 44 }
const RANGES = [7, 15, 30] as const
type Range = (typeof RANGES)[number]

export default function ProductionChart() {
  const [range, setRange] = useState<Range>(30)
  const [hover, setHover] = useState<number | null>(null)
  const { ref, inView } = useInView<HTMLDivElement>(0.25)

  const data = useMemo(() => production.slice(-range), [range])

  const geometry = useMemo(() => {
    const values = data.map((d) => d.eggs)
    const yMin = Math.max(0, Math.floor((Math.min(...values) - 4) / 10) * 10)
    const yMax = Math.ceil((Math.max(...values) + 1) / 10) * 10
    const innerW = W - PAD.left - PAD.right
    const innerH = H - PAD.top - PAD.bottom
    const stepX = innerW / (data.length - 1)
    const x = (i: number) => PAD.left + i * stepX
    const y = (v: number) => PAD.top + innerH * (1 - (v - yMin) / (yMax - yMin))

    let line = `M ${x(0)} ${y(values[0])}`
    for (let i = 1; i < values.length; i++) {
      const mid = (x(i - 1) + x(i)) / 2
      line += ` C ${mid} ${y(values[i - 1])}, ${mid} ${y(values[i])}, ${x(i)} ${y(values[i])}`
    }
    const baseY = PAD.top + innerH
    const area = `${line} L ${x(values.length - 1)} ${baseY} L ${x(0)} ${baseY} Z`

    const ticks: number[] = []
    for (let t = yMin; t <= yMax; t += 10) ticks.push(t)

    return { x, y, line, area, ticks, stepX, baseY }
  }, [data])

  const { x, y, line, area, ticks, stepX, baseY } = geometry
  const labelEvery = Math.ceil(data.length / 6)
  const activeIndex = hover ?? data.length - 1
  const point = data[activeIndex]
  const rate = Math.round((point.eggs / BIRDS) * 100)
  const average = Math.round(data.reduce((sum, d) => sum + d.eggs, 0) / data.length)
  const best = Math.max(...data.map((d) => d.eggs))

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    const i = Math.round((px - PAD.left) / stepX)
    setHover(Math.min(Math.max(i, 0), data.length - 1))
  }

  const tipW = 128
  const tipX = Math.min(Math.max(x(activeIndex) - tipW / 2, PAD.left), W - PAD.right - tipW)
  const tipY = Math.max(y(point.eggs) - 62, 4)

  return (
    <div ref={ref} className="chart">
      <div className="chart__head">
        <div>
          <h3>Produção diária de ovos</h3>
          <p>Evolução ao longo do lote-piloto</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Período">
          {RANGES.map((r) => (
            <button
              key={r}
              type="button"
              role="tab"
              aria-selected={range === r}
              className={`tab ${range === r ? 'is-active' : ''}`}
              onClick={() => {
                setRange(r)
                setHover(null)
              }}
            >
              {r} dias
            </button>
          ))}
        </div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="chart__svg"
        role="img"
        aria-label="Gráfico da produção diária de ovos"
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff7a1a" stopOpacity="0.35" />
            <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffb347" />
            <stop offset="1" stopColor="#e8480c" />
          </linearGradient>
        </defs>

        {ticks.map((t) => (
          <g key={t}>
            <line className="chart__grid" x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} />
            <text className="chart__tick" x={PAD.left - 10} y={y(t) + 4} textAnchor="end">
              {t}
            </text>
          </g>
        ))}

        <g key={range}>
          <path d={area} fill="url(#chart-area)" className={`chart__area ${inView ? 'is-drawn' : ''}`} />
          <path
            d={line}
            pathLength={1}
            fill="none"
            stroke="url(#chart-line)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className={`chart__line ${inView ? 'is-drawn' : ''}`}
          />
        </g>

        {data.map((d, i) =>
          i % labelEvery === 0 || i === data.length - 1 ? (
            <text key={d.day} className="chart__tick" x={x(i)} y={H - 10} textAnchor="middle">
              Dia {d.day}
            </text>
          ) : null,
        )}

        <line className="chart__guide" x1={x(activeIndex)} x2={x(activeIndex)} y1={PAD.top} y2={baseY} />
        <circle className="chart__dot-halo" cx={x(activeIndex)} cy={y(point.eggs)} r="10" />
        <circle className="chart__dot" cx={x(activeIndex)} cy={y(point.eggs)} r="5" />

        <g className="chart__tip" transform={`translate(${tipX} ${tipY})`}>
          <rect width={tipW} height="46" rx="10" />
          <text x="12" y="19" className="chart__tip-title">
            Dia {point.day}
          </text>
          <text x="12" y="36" className="chart__tip-text">
            {point.eggs} ovos · {rate}%
          </text>
        </g>
      </svg>

      <div className="chart__foot">
        <span>
          Média do período: <strong>{average} ovos/dia</strong>
        </span>
        <span>
          Melhor dia: <strong>{best} ovos</strong>
        </span>
      </div>
    </div>
  )
}
