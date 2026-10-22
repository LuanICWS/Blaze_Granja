import { stats } from '../data/content'
import Reveal from './Reveal'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="stat">
            <strong className="fire-text">{s.value}</strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
