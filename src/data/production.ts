import type { DayPoint } from '../types'

// ⚠️ DADOS ILUSTRATIVOS: simulação para mostrar como a granja vai acompanhar a produção.
// Quando o lote-piloto começar, troque estes números pelos registros reais.

export const BIRDS = 40 // aves do lote-piloto (simulação)
export const FEED_KG_PER_BIRD = 0.12 // 120 g por ave/dia (hipótese do plano)

const noise = [0, 0.03, -0.02, 0.02, -0.03, 0.01, -0.01]

export const production: DayPoint[] = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1
  const base = 0.5 + 0.38 * (1 - Math.exp(-day / 10)) // a postura vai subindo e estabiliza
  const rate = base + (noise[i % noise.length] ?? 0)
  return { day, eggs: Math.round(BIRDS * rate) }
})
