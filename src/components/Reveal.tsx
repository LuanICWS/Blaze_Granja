import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

// Faz o conteúdo "entrar" suavemente quando aparece na tela.
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const style = { '--delay': `${delay}ms` } as CSSProperties
  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
