import { useEffect, useState } from 'react'
import Flame from './Flame'
import Icon from './Icon'
import { navItems } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navItems.map((item) => item.id)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="brand" onClick={close}>
          <span className="brand__flame">
            <Flame />
          </span>
          <span className="brand__text">
            <strong>Blaze</strong>
            <small>Granja</small>
          </span>
        </a>

        <nav className="nav" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn--fire btn--small header__cta">
          Fale conosco
        </a>

        <button
          type="button"
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'x' : 'menu'} />
        </button>
      </div>

      <div className={`mobile ${open ? 'is-open' : ''}`}>
        <div className="container mobile__inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile__link ${active === item.id ? 'is-active' : ''}`}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" className="btn btn--fire" onClick={close}>
            Fale conosco
          </a>
        </div>
      </div>
    </header>
  )
}
