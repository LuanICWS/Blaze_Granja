import type { CSSProperties } from 'react'

interface EmbersProps {
  count?: number
}

// Faíscas subindo, como brasas de uma fogueira.
export default function Embers({ count = 14 }: EmbersProps) {
  const items = Array.from({ length: count }, (_, i) => {
    const style = {
      '--x': `${(i * 37 + 11) % 100}%`,
      '--s': `${3 + ((i * 7) % 5)}px`,
      '--d': `${6 + ((i * 13) % 50) / 10}s`,
      '--delay': `${-((i * 9) % 60) / 10}s`,
      '--drift': `${((i % 5) - 2) * 26}px`,
    } as CSSProperties
    return <span key={i} className="ember" style={style} />
  })
  return (
    <div className="embers" aria-hidden="true">
      {items}
    </div>
  )
}
