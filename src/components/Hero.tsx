import Embers from './Embers'
import FlameDivider from './FlameDivider'
import HenIllustration from './HenIllustration'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <Embers count={16} />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="chip">
            <span className="chip__dot" />
            Lote-piloto em implantação
          </span>
          <h1>
            Ovos caipiras com a <span className="fire-text">força da Blaze</span>.
          </h1>
          <p>
            Uma granja de galinhas poedeiras caipiras pensada do início ao fim: estrutura
            bem cuidada, manejo responsável e decisões baseadas em dados. Pequena hoje,
            construída para crescer.
          </p>
          <div className="hero__actions">
            <a href="#dia-a-dia" className="btn btn--fire">
              Ver o dia a dia da granja
              <Icon name="arrow" />
            </a>
            <a href="#lote-piloto" className="btn btn--ghost">
              Conheça o projeto
            </a>
          </div>
          <ul className="hero__points">
            <li>
              <Icon name="leaf" /> Criação ao ar livre
            </li>
            <li>
              <Icon name="chart" /> Rotina monitorada
            </li>
            <li>
              <Icon name="shield" /> Qualidade acompanhada
            </li>
          </ul>
        </div>

        <div className="hero__art">
          <HenIllustration />
        </div>
      </div>
      <FlameDivider />
    </section>
  )
}
