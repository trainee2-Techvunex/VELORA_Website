export interface MegaMenuColumn {
  title: string;
  items: { name: string; link: string; badge?: string }[];
}

export interface MegaMenuData {
  columns: MegaMenuColumn[];
  promoCard?: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    tag: string;
  };
}

export interface NavItem {
  id: string;
  label: string;
  link: string;
  badge?: string;
  hasMegaMenu?: boolean;
  megaMenu?: MegaMenuData;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    id: 'category',
    label: 'SHOP BY CATEGORY',
    link: '/collection/all',
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: 'Top Categories',
          items: [
            { name: 'Fine Fragrances & Perfumes', link: '/collection/fragrances', badge: 'Hot' },
            { name: 'Active Serums & Toners', link: '/collection/skincare?sub=Serum' },
            { name: 'Moisturisers & Cloud Creams', link: '/collection/skincare?sub=Moisturiser' },
            { name: 'Invisible Sunscreens SPF 50', link: '/collection/skincare?sub=Sunscreen', badge: 'Trending' },
            { name: 'Glazed Lip Treatments', link: '/collection/skincare?sub=Lip Care' },
            { name: 'Whipped Body Butters & Washes', link: '/collection/bodycare' },
          ],
        },
        {
          title: 'Specialty Care',
          items: [
            { name: 'Scalp & Hair Density Serums', link: '/collection/haircare' },
            { name: 'Men’s Grooming & Colognes', link: '/collection/men' },
            { name: 'Overnight Recovery Masks', link: '/collection/skincare?sub=Face Mask' },
            { name: 'Gentle Amino Cleansers', link: '/collection/skincare?sub=Face Wash' },
            { name: 'Luxury Scented Soy Candles', link: '/collection/gifting' },
          ],
        },
        {
          title: 'Curated Sets',
          items: [
            { name: 'Royal 24K Gold Ritual Set', link: '/product/royal-glow-ritual-gift-box', badge: '50% Off' },
            { name: 'Parfums Discovery Wardrobe', link: '/product/parisian-perfume-discovery-set' },
            { name: 'Gentleman’s Connoisseur Hamper', link: '/product/gentlemans-luxury-grooming-hamper' },
            { name: 'View All Gift Hampers', link: '/collection/gifting' },
          ],
        },
      ],
      promoCard: {
        title: 'The Parisian Glow Drop',
        subtitle: '24K Gold Flakes + Grasse Damask Rose',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
        link: '/collection/skincare',
        tag: 'NEW ARRIVAL',
      },
    },
  },
  {
    id: 'skincare',
    label: 'SKINCARE',
    link: '/collection/skincare',
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: 'Shop by Product',
          items: [
            { name: 'Face Wash & Cleansers', link: '/collection/skincare?sub=Face Wash' },
            { name: 'Targeted Serums', link: '/collection/skincare?sub=Serum', badge: 'Bestseller' },
            { name: 'Day & Night Moisturisers', link: '/collection/skincare?sub=Moisturiser' },
            { name: 'Sunscreens (SPF 50+)', link: '/collection/skincare?sub=Sunscreen', badge: 'Zero Cast' },
            { name: 'Sleeping & Clay Face Masks', link: '/collection/skincare?sub=Face Mask' },
            { name: 'Peptide Glazed Lip Care', link: '/collection/skincare?sub=Lip Care' },
          ],
        },
        {
          title: 'Shop by Concern',
          items: [
            { name: 'Acne & Active Blemishes', link: '/collection/skincare?concern=Acne & Blemishes' },
            { name: '72hr Deep Hydration', link: '/collection/skincare?concern=Hydration & Dryness' },
            { name: 'Glass Skin Radiance', link: '/collection/skincare?concern=Glass Skin Glow', badge: 'Viral' },
            { name: 'Dark Spots & Pigmentation', link: '/collection/skincare?concern=Pigmentation & Dark Spots' },
            { name: 'Sun Protection & Anti-Tan', link: '/collection/skincare?concern=Sun Protection' },
            { name: 'Anti-Ageing & Collagen', link: '/collection/skincare?concern=Anti-Ageing & Fine Lines' },
          ],
        },
        {
          title: 'Shop by Skin Type',
          items: [
            { name: 'All Skin Types', link: '/collection/skincare?skinType=All Skin Types' },
            { name: 'Dry & Dehydrated Skin', link: '/collection/skincare?skinType=Dry' },
            { name: 'Oily & Acne-Prone Skin', link: '/collection/skincare?skinType=Oily' },
            { name: 'Combination Skin', link: '/collection/skincare?skinType=Combination' },
            { name: 'Sensitive & Reactive Skin', link: '/collection/skincare?skinType=Sensitive' },
          ],
        },
        {
          title: 'Shop by Price',
          items: [
            { name: 'Under ₹499', link: '/collection/skincare?maxPrice=499' },
            { name: '₹500 – ₹999', link: '/collection/skincare?minPrice=500&maxPrice=999', badge: 'Popular' },
            { name: '₹1,000 – ₹1,999', link: '/collection/skincare?minPrice=1000&maxPrice=1999' },
            { name: 'Luxury Vault (Above ₹2,000)', link: '/collection/skincare?minPrice=2000' },
          ],
        },
      ],
      promoCard: {
        title: 'Glass Skin Routine',
        subtitle: 'Get 4 full-sized products with 25% Off',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
        link: '/product/royal-glow-ritual-gift-box',
        tag: 'LIMITED OFFER',
      },
    },
  },
  {
    id: 'fragrances',
    label: 'FRAGRANCES',
    link: '/collection/fragrances',
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: 'Fragrance Types',
          items: [
            { name: 'Eau de Parfum (EDP)', link: '/collection/fragrances?sub=Perfume', badge: '12h+' },
            { name: 'Fine Fragrance Body Mists', link: '/collection/fragrances?sub=Body Mist' },
            { name: 'Artisan Discovery Sets', link: '/product/parisian-perfume-discovery-set', badge: 'Gift' },
            { name: 'Roll-on Concentrated Attars', link: '/collection/fragrances' },
          ],
        },
        {
          title: 'Fragrance Families',
          items: [
            { name: 'French Damask Floral & Rose', link: '/collection/fragrances?fragrance=Floral & Rose' },
            { name: 'Royal Mysore Sandalwood & Oud', link: '/collection/fragrances?fragrance=Woody & Amber' },
            { name: 'Amalfi Coast Aquatic & Fresh', link: '/collection/fragrances?fragrance=Fresh & Aquatic' },
            { name: 'Italian Bergamot & Citrus Zest', link: '/collection/fragrances?fragrance=Citrus & Zest' },
            { name: 'Madagascar Bourbon Vanilla', link: '/collection/fragrances?fragrance=Gourmand & Vanilla' },
          ],
        },
        {
          title: 'By Recipient',
          items: [
            { name: 'Women’s Signature Scents', link: '/collection/fragrances?recipient=Gifts for Her' },
            { name: 'Men’s Bold Colognes', link: '/collection/men?sub=Men\'s Fragrances' },
            { name: 'Unisex Niche Fragrances', link: '/collection/fragrances' },
            { name: 'Couple Fragrance Boxes', link: '/product/anniversary-couple-scent-duo' },
          ],
        },
      ],
      promoCard: {
        title: 'Velvet Damask Rose',
        subtitle: 'Our #1 globally acclaimed fragrance with Grasse roses',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
        link: '/product/velvet-rose-eau-de-parfum',
        tag: 'ICONIC',
      },
    },
  },
  {
    id: 'bodycare',
    label: 'BODY CARE',
    link: '/collection/bodycare',
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: 'Daily Bath & Shower',
          items: [
            { name: 'Silk Hydrating Shower Gels', link: '/collection/bodycare?sub=Body Wash' },
            { name: 'Aromatherapy Exfoliating Scrubs', link: '/collection/bodycare?sub=Body Wash' },
            { name: 'Mineral Himalayan Bath Salts', link: '/collection/bodycare?sub=Body Wash' },
          ],
        },
        {
          title: 'Body Moisture & Glow',
          items: [
            { name: 'Whipped Shea Body Soufflés', link: '/collection/bodycare?sub=Body Lotion', badge: '48hr' },
            { name: 'AHA + BHA Smoothing Lotions', link: '/collection/bodycare?sub=Body Lotion' },
            { name: 'Gold Shimmer Dry Body Oils', link: '/collection/bodycare?sub=Body Lotion' },
            { name: 'Velvet Hand & Cuticle Creams', link: '/collection/bodycare?sub=Body Lotion' },
          ],
        },
      ],
      promoCard: {
        title: 'Whipped Vanilla Soufflé',
        subtitle: 'Smell like pure Madagascar vanilla all day long',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
        link: '/product/french-vanilla-whipped-body-butter',
        tag: 'BESTSELLER',
      },
    },
  },
  {
    id: 'haircare',
    label: 'HAIR CARE',
    link: '/collection/haircare',
  },
  {
    id: 'men',
    label: 'MEN',
    link: '/collection/men',
    badge: 'NEW',
  },
  {
    id: 'gifting',
    label: 'GIFT STORE',
    link: '/collection/gifting',
    badge: 'OFFERS',
  },
  {
    id: 'bestsellers',
    label: 'BESTSELLERS',
    link: '/collection/all?badge=BESTSELLER',
  },
  {
    id: 'new-launches',
    label: 'NEW LAUNCHES',
    link: '/collection/all?badge=NEW LAUNCH',
  },
];

export const HOME_CATEGORY_CAROUSEL = [
  {
    name: 'Fine Perfumes',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80',
    link: '/collection/fragrances',
    badge: 'Popular',
  },
  {
    name: 'Glow Serums',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
    link: '/collection/skincare?sub=Serum',
    badge: 'Hot',
  },
  {
    name: 'Cloud Moisturisers',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
    link: '/collection/skincare?sub=Moisturiser',
  },
  {
    name: 'Invisible Sunscreens',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    link: '/collection/skincare?sub=Sunscreen',
    badge: 'SPF 50+',
  },
  {
    name: 'Glazed Lip Care',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80',
    link: '/collection/skincare?sub=Lip Care',
  },
  {
    name: 'Whipped Body Lotions',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80',
    link: '/collection/bodycare',
  },
  {
    name: 'Hair Growth Rituals',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    link: '/collection/haircare',
  },
  {
    name: 'Men’s Grooming',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80',
    link: '/collection/men',
  },
  {
    name: 'Luxury Gift Sets',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=400&q=80',
    link: '/collection/gifting',
    badge: 'Save 30%',
  },
  {
    name: 'New Drops',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80',
    link: '/collection/all?badge=NEW LAUNCH',
  },
];
