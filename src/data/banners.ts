export interface HeroBanner {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgGradient: string;
  image: string;
  badge: string;
}

export const HERO_BANNERS: HeroBanner[] = [
  {
    id: 'hero-1',
    tag: 'THE PARFUMS EDIT',
    title: 'Find Your Signature',
    highlight: 'French Scent',
    subtitle: 'Infused with Grasse Damask Rose, Royal Mysore Oud, and Madagascar Vanilla. Long-lasting luxury projection.',
    ctaText: 'EXPLORE FRAGRANCES',
    ctaLink: '/collection/fragrances',
    bgGradient: 'from-[#FFF0F4] via-[#FFE4EC] to-[#FCE7F0]',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    badge: 'UP TO 30% OFF',
  },
  {
    id: 'hero-2',
    tag: 'AURIC RADIANCE',
    title: 'Glow Every Day with',
    highlight: '24K Gold & Vit C',
    subtitle: 'Fade dark spots, boost collagen, and unlock illuminated glass perfection in just 14 days.',
    ctaText: 'SHOP GLOW RITUALS',
    ctaLink: '/collection/skincare?concern=Glass Skin Glow',
    bgGradient: 'from-[#FFF8F0] via-[#FDEEE3] to-[#FCEAE0]',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    badge: 'BESTSELLER DROP',
  },
  {
    id: 'hero-3',
    tag: 'THE LUXURY GIFT STORE',
    title: 'Celebrate Loved Ones with',
    highlight: 'Artisanal Hampers',
    subtitle: 'Curated skincare boxes, his & her fragrance sets, and velvet-lined keepsake coffrets.',
    ctaText: 'EXPLORE GIFT HAMPERS',
    ctaLink: '/collection/gifting',
    bgGradient: 'from-[#FDF2F4] via-[#FBE6EC] to-[#F5DDE6]',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80',
    badge: 'FREE LUXURY PACKAGING',
  },
  {
    id: 'hero-4',
    tag: 'NEW BEAUTY DROP',
    title: 'Weightless Sun Defense',
    highlight: '0% White Cast',
    subtitle: 'SPF 50+ PA++++ broad-spectrum dewy sunscreen enriched with Niacinamide & Aloe Hydrosol.',
    ctaText: 'DISCOVER SUN CARE',
    ctaLink: '/collection/skincare?sub=Sunscreen',
    bgGradient: 'from-[#F3F8FA] via-[#E9F3F7] to-[#DFEEF4]',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    badge: 'NEW ARRIVAL',
  },
];

export const EDITORIAL_BANNERS = [
  {
    title: 'The Glass Skin Ritual',
    subtitle: 'Cleanse, Hydrate, Brighten & Protect',
    offer: 'Save Flat ₹800 on the 4-Step Regimen',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    link: '/collection/skincare',
    cta: 'SHOP ROUTINE',
  },
  {
    title: 'Rare Artisanal Parfums',
    subtitle: 'Hand-blended in Grasse & Mysore with pure attars',
    offer: 'Complimentary Discovery Set on orders ₹2,499+',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    link: '/collection/fragrances',
    cta: 'EXPLORE SCENTS',
  },
];
