import { BIRDS, FEED_KG_PER_BIRD, production } from '../data/production'
import type { KpiData } from '../types'
import KpiCard from './KpiCard'
import ProductionChart from './ProductionChart'
import Reveal from './Reveal'
import Routine from './Routine'

export default function Dashboard() {
  const last = production[production.length - 1]

  const kpis: KpiData[] = [
    { icon: 'bird', label: 'Aves em produção', value: BIRDS, hint: 'no lote-piloto' },
    { icon: 'egg', label: 'Ovos no último dia', value: last.eggs, hint: 'coletados e selecionados' },
    {
      icon: 'flame',
      label: 'Taxa de postura',
      value: Math.round((last.eggs / BIRDS) * 100),
      suffix: '%',
      hint: 'ovos por ave no dia',
    },
    {
      icon: 'drop',
      label: 'Ração por dia',
      value: Number((BIRDS * FEED_KG_PER_BIRD).toFixed(1)),
      decimals: 1,
      suffix: ' kg',
      hint: 'consumo estimado',
    },
  ]

  return (
    <section id="dia-a-dia" className="section section--alt">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Nosso dia a dia</span>
          <h2>A granja em números</h2>
          <p>
            Acompanhamos cada ave e cada ovo. Veja como o dia a dia da Blaze é medido e
            como a produção evolui ao longo do lote-piloto.
          </p>
          <span className="demo-badge">Dados ilustrativos de demonstração</span>
        </Reveal>

        <div className="dash">
          <Reveal>
            <ProductionChart />
          </Reveal>
          <Reveal delay={150} className="kpis-wrap">
            <div className="kpis">
              {kpis.map((kpi) => (
                <KpiCard key={kpi.label} kpi={kpi} />
              ))}
            </div>
          </Reveal>
        </div>

        <Routine />
      </div>
    </section>
  )
}
