import { horizons } from '../data/content'
import Embers from './Embers'
import Flame from './Flame'
import Reveal from './Reveal'

export default function Expansion() {
  return (
    <section id="expansao" className="section expansion">
      <Embers count={12} />
      <div className="container expansion__inner">
        <Reveal className="section__head section__head--dark">
          <span className="eyebrow eyebrow--dark">Visão de futuro</span>
          <h2>Pensado para crescer</h2>
          <p>
            A Blaze começa com passos curtos e firmes. Cada etapa só acontece quando a
            anterior se prova, e o objetivo é construir algo grande.
          </p>
        </Reveal>

        <div className="horizons">
          {horizons.map((h, i) => (
            <Reveal key={h.title} delay={i * 160} className={`horizon horizon--${i + 1}`}>
              <article className="horizon__card">
                <div className="horizon__flames">
                  {Array.from({ length: i + 1 }, (_, k) => (
                    <Flame key={k} className="horizon__flame" />
                  ))}
                </div>
                <span className="horizon__tag">{h.tag}</span>
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
