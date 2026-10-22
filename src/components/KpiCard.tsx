import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import type { KpiData } from '../types'
import Icon from './Icon'

export default function KpiCard({ kpi }: { kpi: KpiData }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const value = useCountUp(kpi.value, inView)
  const decimals = kpi.decimals ?? 0
  const text = value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <div ref={ref} className="kpi">
      <span className="kpi__icon">
        <Icon name={kpi.icon} />
      </span>
      <span className="kpi__label">{kpi.label}</span>
      <strong className="kpi__value">
        {text}
        {kpi.suffix}
      </strong>
      <span className="kpi__hint">{kpi.hint}</span>
    </div>
  )
}
