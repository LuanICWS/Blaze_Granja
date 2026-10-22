import { useId } from 'react'

const OUTER =
  'M52 2 C58 26 84 38 84 64 C84 85 69 98 50 98 C31 98 16 85 16 64 C16 49 26 41 33 29 C36 38 41 42 46 41 C43 28 46 13 52 2 Z'
const INNER = 'M50 52 C54 62 66 68 66 80 C66 90 59 96 50 96 C41 96 34 90 34 80 C34 71 42 66 50 52 Z'

interface FlameProps {
  className?: string
}

// A chama da marca: aparece na logo, nos cartões e nas seções.
export default function Flame({ className = '' }: FlameProps) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  return (
    <svg viewBox="0 0 100 100" className={`flame ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e8480c" />
          <stop offset="0.55" stopColor="#ff8a1f" />
          <stop offset="1" stopColor="#ffd36b" />
        </linearGradient>
      </defs>
      <path d={OUTER} fill={`url(#${id})`} />
      <path d={INNER} fill="#fff3c4" opacity="0.9" />
    </svg>
  )
}
