import { contact, navItems } from '../data/content'
import Embers from './Embers'
import Flame from './Flame'
import Reveal from './Reveal'

export default function Footer() {
  const mail = (subject: string) =>
    `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`

  return (
    <>
      <section id="contato" className="cta">
        <Embers count={10} />
        <div className="container cta__inner">
          <Reveal>
            <Flame className="cta__flame" />
            <h2>
              Quer fazer parte da <span className="fire-text">Blaze</span>?
            </h2>
            <p>
              Seja para investir no projeto ou para garantir ovos caipiras de qualidade,
              queremos conversar com você.
            </p>
            <div className="cta__actions">
              <a className="btn btn--fire" href={mail('Quero investir na Blaze Granja')}>
                Quero investir
              </a>
              <a className="btn btn--ghost" href={mail('Quero comprar ovos da Blaze')}>
                Quero comprar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#inicio" className="brand">
            <span className="brand__flame">
              <Flame />
            </span>
            <span className="brand__text">
              <strong>Blaze</strong>
              <small>Granja</small>
            </span>
          </a>
          <nav className="footer__nav" aria-label="Rodapé">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <p className="footer__copy">
            © {new Date().getFullYear()} Blaze Granja · Projeto em desenvolvimento
          </p>
        </div>
      </footer>
    </>
  )
}
