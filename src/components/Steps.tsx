import type { CSSProperties } from 'react'
import { steps } from '../data/content'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'

export default function Steps() {
  const { ref, inView } = useInView<HTMLOListElement>(0.25)

  return (
    <section id="lote-piloto" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Lote-piloto</span>
          <h2>Do planejamento à expansão</h2>
          <p>
            Começamos pequeno, medimos tudo e só crescemos com base em resultados reais.
          </p>
        </Reveal>

        <ol ref={ref} className={`timeline ${inView ? 'is-visible' : ''}`}>
          {steps.map((step, i) => (
            <li key={step.number} className="tstep" style={{ '--i': i } as CSSProperties}>
              <span className="tstep__node">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
