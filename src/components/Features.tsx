import { pillars } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Features() {
  return (
    <section id="pilares" className="section section--alt">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Nossos pilares</span>
          <h2>O que sustenta a Blaze</h2>
          <p>Uma granja bem tratada começa pela organização e termina num ovo de confiança.</p>
        </Reveal>

        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 120} className="pillar-cell">
              <article className="pillar">
                <span className="pillar__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="pillar__icon">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
