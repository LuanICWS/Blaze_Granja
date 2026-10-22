const OUTER =
  'M52 2 C58 26 84 38 84 64 C84 85 69 98 50 98 C31 98 16 85 16 64 C16 49 26 41 33 29 C36 38 41 42 46 41 C43 28 46 13 52 2 Z'
const INNER = 'M50 52 C54 62 66 68 66 80 C66 90 59 96 50 96 C41 96 34 90 34 80 C34 71 42 66 50 52 Z'

// Cada chama é desenhada a partir de um ponto de base (x, y), com ângulo e tamanho.
function flame(x: number, y: number, angle: number, scale: number) {
  return `translate(${x} ${y}) rotate(${angle}) scale(${scale}) translate(-50 -98)`
}

export default function HenIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="hen"
      role="img"
      aria-label="Galinha da Blaze, com crista e cauda em chamas"
    >
      <defs>
        <radialGradient id="hen-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ff8a1f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff8a1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hen-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e8480c" />
          <stop offset="0.55" stopColor="#ff8a1f" />
          <stop offset="1" stopColor="#ffd36b" />
        </linearGradient>
        <linearGradient id="hen-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dce6f5" />
        </linearGradient>
        <g id="hen-fl">
          <path d={OUTER} fill="url(#hen-flame)" />
          <path d={INNER} fill="#fff3c4" opacity="0.9" />
        </g>
      </defs>

      {/* fundo: brilho + discos azuis + anel girando */}
      <circle cx="200" cy="200" r="198" fill="url(#hen-glow)" className="hen__glow" />
      <circle cx="200" cy="200" r="150" fill="#14305A" />
      <circle cx="200" cy="200" r="118" fill="#1B3F73" opacity="0.65" />
      <circle
        cx="200"
        cy="200"
        r="162"
        fill="none"
        stroke="#ff8a1f"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeDasharray="3 12"
        strokeLinecap="round"
        className="hen__ring"
      />

      <ellipse cx="205" cy="338" rx="120" ry="12" fill="#07152b" opacity="0.55" className="hen__shadow" />

      <g className="hen__bob">
        {/* cauda em chamas */}
        <g className="flick flick--2">
          <use href="#hen-fl" transform={flame(122, 198, -82, 1.0)} />
        </g>
        <g className="flick flick--1">
          <use href="#hen-fl" transform={flame(120, 188, -52, 1.12)} />
        </g>
        <g className="flick flick--3">
          <use href="#hen-fl" transform={flame(126, 180, -22, 0.85)} />
        </g>

        {/* corpo */}
        <ellipse cx="205" cy="230" rx="100" ry="85" fill="url(#hen-body)" />

        {/* asa */}
        <path d="M150 215 C150 180 215 175 245 215 C240 255 175 270 150 215 Z" fill="#E3EAF5" />
        <path d="M170 225 C190 215 220 218 235 228" stroke="#B9C8E0" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M175 240 C195 232 215 234 228 242" stroke="#B9C8E0" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* pescoço e cabeça */}
        <path d="M255 190 C270 150 280 130 285 112 L318 118 C312 150 300 185 290 215 Z" fill="#FFFFFF" />
        <circle cx="300" cy="110" r="34" fill="#FFFFFF" />

        {/* crista em chamas */}
        <g className="flick flick--2">
          <use href="#hen-fl" transform={flame(284, 90, -26, 0.34)} />
        </g>
        <g className="flick flick--3">
          <use href="#hen-fl" transform={flame(316, 90, 26, 0.34)} />
        </g>
        <g className="flick flick--1">
          <use href="#hen-fl" transform={flame(300, 92, 0, 0.52)} />
        </g>

        {/* bico, barbela e olho */}
        <path d="M330 106 L360 116 L330 126 Z" fill="#F4B942" />
        <path d="M326 128 C334 148 322 158 314 148 C312 140 316 132 320 128 Z" fill="#E5484D" />
        <circle cx="312" cy="106" r="5.5" fill="#0B1F3A" />
        <circle cx="314" cy="104" r="1.8" fill="#FFFFFF" />

        {/* pernas */}
        <g stroke="#F4B942" strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M185 308 L185 336 M185 336 L168 342 M185 336 L186 346 M185 336 L202 342" />
          <path d="M235 308 L235 336 M235 336 L218 342 M235 336 L236 346 M235 336 L252 342" />
        </g>
      </g>

      {/* ovos dourados */}
      <ellipse cx="92" cy="330" rx="14" ry="18" fill="#FFD36B" />
      <ellipse cx="92" cy="330" rx="14" ry="18" fill="url(#hen-glow)" opacity="0.6" />
      <ellipse cx="117" cy="337" rx="14" ry="18" fill="#FFF3DC" />
    </svg>
  )
}
