// Centralized verified high-resolution beauty assets and emergency SVG fallbacks

export const FALLBACK_IMAGES = {
  perfume: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
  serum: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
  cream: 'https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80',
  sunscreen: 'https://images.unsplash.com/photo-1629380108574-40c083555579?auto=format&fit=crop&w=800&q=80',
  lipcare: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
  bodycare: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  haircare: 'https://images.unsplash.com/photo-1608571423539-e951b9b3871e?auto=format&fit=crop&w=800&q=80',
  men: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
  gifting: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
  default: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
};

// Pure inline SVG emergency fallback (zero network dependency)
export const createSvgFallback = (title: string = 'VÉLORA Luxury Botanicals'): string => {
  const cleanTitle = title.replace(/[<>&"]/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
    <defs>
      <linearGradient id="veloraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF0F3" />
        <stop offset="50%" stop-color="#FCE7F0" />
        <stop offset="100%" stop-color="#F5D0DE" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#veloraGrad)" />
    <circle cx="300" cy="280" r="140" fill="#FFFFFF" opacity="0.65" />
    <path d="M300 190 C320 230 360 250 360 280 C360 315 333 340 300 340 C267 340 240 315 240 280 C240 250 280 230 300 190 Z" fill="#9F1239" opacity="0.85"/>
    <circle cx="300" cy="280" r="18" fill="#FCE7F0"/>
    <text x="300" y="440" font-family="'Playfair Display', Georgia, serif" font-size="24" font-weight="bold" fill="#9F1239" text-anchor="middle" letter-spacing="4">VÉLORA</text>
    <text x="300" y="470" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#881337" text-anchor="middle" letter-spacing="2">PARFUMS &amp; BOTANICALS</text>
    <text x="300" y="500" font-family="system-ui, sans-serif" font-size="11" fill="#71717A" text-anchor="middle">${cleanTitle}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const getFallbackForCategory = (categoryOrSub?: string): string => {
  if (!categoryOrSub) return FALLBACK_IMAGES.default;
  const lower = categoryOrSub.toLowerCase();
  if (lower.includes('fragrance') || lower.includes('perfume') || lower.includes('cologne') || lower.includes('attar') || lower.includes('mist')) {
    return FALLBACK_IMAGES.perfume;
  }
  if (lower.includes('serum') || lower.includes('elixir') || lower.includes('essence') || lower.includes('oil')) {
    return FALLBACK_IMAGES.serum;
  }
  if (lower.includes('moisturiser') || lower.includes('cream') || lower.includes('gel')) {
    return FALLBACK_IMAGES.cream;
  }
  if (lower.includes('sunscreen') || lower.includes('spf') || lower.includes('sun')) {
    return FALLBACK_IMAGES.sunscreen;
  }
  if (lower.includes('lip')) {
    return FALLBACK_IMAGES.lipcare;
  }
  if (lower.includes('body') || lower.includes('wash') || lower.includes('butter') || lower.includes('scrub') || lower.includes('bath')) {
    return FALLBACK_IMAGES.bodycare;
  }
  if (lower.includes('hair') || lower.includes('scalp') || lower.includes('shampoo')) {
    return FALLBACK_IMAGES.haircare;
  }
  if (lower.includes('men') || lower.includes('beard')) {
    return FALLBACK_IMAGES.men;
  }
  if (lower.includes('gift') || lower.includes('hamper') || lower.includes('box') || lower.includes('set')) {
    return FALLBACK_IMAGES.gifting;
  }
  return FALLBACK_IMAGES.default;
};
