import { Product, Coupon } from '../types';

export const PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "slug": "oud-royal-parfum",
    "name": "Oud Royal Extrait de Parfum",
    "subtitle": "Cambodian Aged Oud with Amber & Damask Rose",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 3499,
    "mrp": 4999,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 312,
    "images": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An opulent fragrance blending 15-year aged Cambodian agarwood with rich dark amber, damask rose petals, and warm Indonesian patchouli.",
    "shortDescription": "Aged Cambodian oud, warm amber & damask rose.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Cambodian Oud Resin",
      "Amber Extract",
      "Rose Damascena Oil"
    ],
    "benefits": [
      "Long-lasting 16+ hour wear",
      "Rich complex sillage",
      "Cruelty-free & phthalate-free"
    ],
    "howToUse": "Spray on pulse points: wrists, inner elbows, and base of neck from 6 inches away.",
    "fragranceFamily": "Oriental & Oud",
    "recipient": [
      "Gifts for Him",
      "For Dad",
      "For Couple"
    ],
    "size": "100ml",
    "variants": [
      {
        "id": "v1-1",
        "size": "50ml",
        "price": 2199,
        "mrp": 2999,
        "inStock": true
      },
      {
        "id": "v1-2",
        "size": "100ml",
        "price": 3499,
        "mrp": 4999,
        "inStock": true
      }
    ],
    "stock": 45,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-2",
    "slug": "rose-damascena-elixir",
    "name": "Rose Damascena Eau de Parfum",
    "subtitle": "Grasse Morning Rose Petals with Lychee & Musk",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 2799,
    "mrp": 3999,
    "discount": 30,
    "rating": 4.8,
    "reviewCount": 245,
    "images": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A velvety, romantic bouquet capturing first-harvest French May roses layered over crisp pink lychee and soft white cashmere musk.",
    "shortDescription": "First-harvest French May roses & crisp pink lychee.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Rosa Centifolia Flower Extract",
      "White Musk Accord"
    ],
    "benefits": [
      "All-day romantic projection",
      "Gentle on sensitive skin",
      "Hand-harvested florals"
    ],
    "howToUse": "Mist lightly over pulse points and collarbone.",
    "fragranceFamily": "Floral & Rose",
    "recipient": [
      "Gifts for Her",
      "For Mom",
      "For Sister"
    ],
    "size": "100ml",
    "variants": [
      {
        "id": "v2-1",
        "size": "50ml",
        "price": 1799,
        "mrp": 2499,
        "inStock": true
      },
      {
        "id": "v2-2",
        "size": "100ml",
        "price": 2799,
        "mrp": 3999,
        "inStock": true
      }
    ],
    "stock": 60,
    "badge": "TRENDING",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-3",
    "slug": "santal-imperial-parfum",
    "name": "Santal Imperial Eau de Parfum",
    "subtitle": "Creamy Mysore Sandalwood & Cardamom Spice",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 3199,
    "mrp": 4499,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 189,
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Pure Mysore sandalwood distilled with crushed green cardamom, powdery violet leaf, and warm cedarwood bark for an earthy, refined signature.",
    "shortDescription": "Pure Mysore sandalwood, crushed cardamom & violet leaf.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Santalum Album Wood Oil",
      "Cardamom Seed Oil"
    ],
    "benefits": [
      "Sophisticated unisex aroma",
      "14+ hours persistence",
      "Aromatherapeutic calm"
    ],
    "howToUse": "Spray on neck and wrists after moisturizing.",
    "fragranceFamily": "Woody & Amber",
    "recipient": [
      "Gifts for Him",
      "Gifts for Her",
      "For Best Friend"
    ],
    "size": "100ml",
    "variants": [
      {
        "id": "v3-1",
        "size": "50ml",
        "price": 1999,
        "mrp": 2799,
        "inStock": true
      },
      {
        "id": "v3-2",
        "size": "100ml",
        "price": 3199,
        "mrp": 4499,
        "inStock": true
      }
    ],
    "stock": 35,
    "badge": "AWARD WINNER",
    "featured": true
  },
  {
    "id": "prod-4",
    "slug": "jasmine-sambac-flacon",
    "name": "Jasmine Sambac & Neroli Bloom",
    "subtitle": "Midnight White Jasmine with Sicilian Neroli",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 799,
    "mrp": 1199,
    "discount": 33,
    "rating": 4.7,
    "reviewCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Night-blooming Madurai jasmine blossoms infused with sparkling Sicilian neroli, golden honeysuckle, and warm benzoin resin.",
    "shortDescription": "Night-blooming Madurai jasmine & Sicilian neroli.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Jasminum Sambac Flower Extract",
      "Neroli Essential Oil"
    ],
    "benefits": [
      "Uplifting floral presence",
      "Sublime spring/summer wear",
      "Artisan botanical distillation"
    ],
    "howToUse": "Mist directly onto clothes and skin at a distance of 15cm.",
    "fragranceFamily": "Floral & Rose",
    "recipient": [
      "Gifts for Her",
      "For Mom"
    ],
    "size": "100ml",
    "variants": [
      {
        "id": "v4-1",
        "size": "50ml",
        "price": 1599,
        "mrp": 2199,
        "inStock": true
      },
      {
        "id": "v4-2",
        "size": "100ml",
        "price": 2599,
        "mrp": 3599,
        "inStock": true
      }
    ],
    "stock": 52,
    "badge": "NEW LAUNCH",
    "newLaunch": true
  },
  {
    "id": "prod-5",
    "slug": "velvet-tuberose-extrait",
    "name": "Velvet Tuberose Extrait",
    "subtitle": "Solar Tuberose Petals with Coconut Nectar",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An intoxicating white floral featuring lush Indian tuberose, creamy coconut nectar, ylang-ylang, and a base of Madagascar vanilla.",
    "shortDescription": "Lush Indian tuberose & creamy coconut nectar.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Polianthes Tuberosa Extract",
      "Vanilla Planifolia Extract"
    ],
    "benefits": [
      "Rich creamy floral trail",
      "Evening signature scent",
      "High fragrance concentration"
    ],
    "howToUse": "Apply 2-3 sprays behind ears and on shoulders.",
    "fragranceFamily": "Floral & Rose",
    "size": "100ml",
    "variants": [
      {
        "id": "v5-1",
        "size": "50ml",
        "price": 1899,
        "mrp": 2599,
        "inStock": true
      },
      {
        "id": "v5-2",
        "size": "100ml",
        "price": 2999,
        "mrp": 4199,
        "inStock": true
      }
    ],
    "stock": 40,
    "badge": "LIMITED EDITION"
  },
  {
    "id": "prod-6",
    "slug": "citrus-bergamot-zest",
    "name": "Calabrian Bergamot & Petitgrain",
    "subtitle": "Sun-Drenched Citrus with Green Vetiver",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 949,
    "mrp": 1399,
    "discount": 32,
    "rating": 4.7,
    "reviewCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Sparkling Calabrian bergamot, crushed petitgrain leaves, tart pink grapefruit, and cooling Haitian vetiver for an invigorating all-day freshness.",
    "shortDescription": "Calabrian bergamot, crushed petitgrain & Haitian vetiver.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Citrus Bergamia Peel Oil",
      "Vetiveria Zizanoides Root Oil"
    ],
    "benefits": [
      "Energizing crisp aroma",
      "Perfect daytime scent",
      "Non-staining formulation"
    ],
    "howToUse": "Spritz generously after morning shower.",
    "fragranceFamily": "Citrus & Zest",
    "size": "100ml",
    "variants": [
      {
        "id": "v6-1",
        "size": "50ml",
        "price": 1499,
        "mrp": 1999,
        "inStock": true
      },
      {
        "id": "v6-2",
        "size": "100ml",
        "price": 2299,
        "mrp": 3199,
        "inStock": true
      }
    ],
    "stock": 75,
    "badge": "BESTSELLER"
  },
  {
    "id": "prod-7",
    "slug": "golden-amber-noir",
    "name": "Golden Amber Noir Parfum",
    "subtitle": "Smoky Amber Resin with Tonka & Labdanum",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 1299,
    "mrp": 1899,
    "discount": 32,
    "rating": 4.9,
    "reviewCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Warm golden resin infused with roasted tonka bean, Spanish cistus labdanum, bourbon vanilla, and aged cedarwood.",
    "shortDescription": "Roasted tonka bean, golden resin & bourbon vanilla.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Ambergris Accord",
      "Dipteryx Odorata Seed Extract"
    ],
    "benefits": [
      "Hypnotic evening fragrance",
      "Ultra-dense base notes",
      "Extrait concentration"
    ],
    "howToUse": "Dab on pulse points and let settle without rubbing.",
    "fragranceFamily": "Woody & Amber",
    "size": "100ml",
    "variants": [
      {
        "id": "v7-1",
        "size": "50ml",
        "price": 2099,
        "mrp": 2899,
        "inStock": true
      },
      {
        "id": "v7-2",
        "size": "100ml",
        "price": 3299,
        "mrp": 4699,
        "inStock": true
      }
    ],
    "stock": 38,
    "badge": "TRENDING"
  },
  {
    "id": "prod-8",
    "slug": "aegean-marine-parfum",
    "name": "Aegean Marine Eau de Parfum",
    "subtitle": "Sea Mineral Breeze with Crisp Sage & Driftwood",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 1499,
    "mrp": 2199,
    "discount": 32,
    "rating": 4.8,
    "reviewCount": 175,
    "images": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An invigorating coastal breeze carrying Mediterranean sea salt, crushed clary sage, aquatic ozone notes, and sun-bleached coastal driftwood.",
    "shortDescription": "Mediterranean sea salt, clary sage & sun-bleached driftwood.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Salvia Sclarea Oil",
      "Driftwood Accord"
    ],
    "benefits": [
      "Ultra-clean refreshing aura",
      "Resistant to humidity",
      "Unisex daytime wear"
    ],
    "howToUse": "Spray on torso and collarbone.",
    "fragranceFamily": "Fresh & Aquatic",
    "size": "100ml",
    "variants": [
      {
        "id": "v8-1",
        "size": "50ml",
        "price": 1599,
        "mrp": 2199,
        "inStock": true
      },
      {
        "id": "v8-2",
        "size": "100ml",
        "price": 2499,
        "mrp": 3499,
        "inStock": true
      }
    ],
    "stock": 62,
    "badge": "NEW LAUNCH"
  },
  {
    "id": "prod-9",
    "slug": "saffron-cachemire-royale",
    "name": "Saffron Cachemire Royale",
    "subtitle": "Kashmiri Red Saffron & Warm Cashmere Wood",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 3699,
    "mrp": 5299,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 153,
    "images": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Rare Kashmiri Mogra saffron threads steeped in melted amber, soft cashmere wool accords, and sensual white leather.",
    "shortDescription": "Kashmiri Mogra saffron, cashmere accord & white leather.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Crocus Sativus Stigma Extract",
      "Cashmeran"
    ],
    "benefits": [
      "Rare royal ingredients",
      "Luxurious warm warmth",
      "Compliment magnet"
    ],
    "howToUse": "Apply 2 sprays on inner wrists and back of knees.",
    "fragranceFamily": "Oriental & Oud",
    "size": "100ml",
    "variants": [
      {
        "id": "v9-1",
        "size": "50ml",
        "price": 2399,
        "mrp": 3299,
        "inStock": true
      },
      {
        "id": "v9-2",
        "size": "100ml",
        "price": 3699,
        "mrp": 5299,
        "inStock": true
      }
    ],
    "stock": 28,
    "badge": "AWARD WINNER",
    "featured": true
  },
  {
    "id": "prod-10",
    "slug": "iris-nectar-poudre",
    "name": "Iris Nectar Poudré",
    "subtitle": "Florentine Orris Butter & White Heliotrope",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 1899,
    "mrp": 2699,
    "discount": 30,
    "rating": 4.8,
    "reviewCount": 134,
    "images": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Extravagant Florentine orris butter blended with almond blossom, powdery violet, white heliotrope, and delicate silk musk.",
    "shortDescription": "Florentine orris butter, almond blossom & silk musk.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Iris Pallida Root Extract",
      "Heliotrope Accord"
    ],
    "benefits": [
      "Velvety powdery elegance",
      "Silky soft projection",
      "Refined Parisian luxury"
    ],
    "howToUse": "Spritz lightly onto hair and neckline.",
    "fragranceFamily": "Floral & Rose",
    "size": "100ml",
    "variants": [
      {
        "id": "v10-1",
        "size": "50ml",
        "price": 1799,
        "mrp": 2499,
        "inStock": true
      },
      {
        "id": "v10-2",
        "size": "100ml",
        "price": 2899,
        "mrp": 3999,
        "inStock": true
      }
    ],
    "stock": 33,
    "badge": "LIMITED EDITION"
  },
  {
    "id": "prod-11",
    "slug": "smoked-vanilla-bourbon",
    "name": "Smoked Vanilla & Bourbon Wood",
    "subtitle": "Madagascar Vanilla Pods with Oak Barrel Cask",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 3099,
    "mrp": 4299,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 201,
    "images": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Dark toasted Madagascar vanilla beans aged in charred oak barrels with smoky incense, cacao nibs, and golden benzoin tears.",
    "shortDescription": "Toasted vanilla beans, charred oak & cacao nibs.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Vanilla Tahitensis Bean Extract",
      "Oakwood Extract"
    ],
    "benefits": [
      "Rich gourmand complexity",
      "Cozy autumn/winter scent",
      "12+ hours sillage"
    ],
    "howToUse": "Spray on pulse points and scarf.",
    "fragranceFamily": "Gourmand & Vanilla",
    "size": "100ml",
    "variants": [
      {
        "id": "v11-1",
        "size": "50ml",
        "price": 1999,
        "mrp": 2699,
        "inStock": true
      },
      {
        "id": "v11-2",
        "size": "100ml",
        "price": 3099,
        "mrp": 4299,
        "inStock": true
      }
    ],
    "stock": 44,
    "badge": "BESTSELLER"
  },
  {
    "id": "prod-12",
    "slug": "persian-neroli-white-amber",
    "name": "Persian Neroli & White Amber",
    "subtitle": "Sparkling Orange Blossom with Golden Ambergris",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 2699,
    "mrp": 3799,
    "discount": 29,
    "rating": 4.8,
    "reviewCount": 168,
    "images": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Sun-drenched Persian orange blossom distillates paired with crisp green leaves, sun-dried bergamot zest, and a warm white amber undertone.",
    "shortDescription": "Persian orange blossom & sun-dried bergamot zest.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Citrus Aurantium Amara Flower Oil",
      "Ambergris Accord"
    ],
    "benefits": [
      "Radiant luminous glow",
      "Clean Mediterranean character",
      "Phthalate-free"
    ],
    "howToUse": "Mist across collarbones and wrists.",
    "fragranceFamily": "Citrus & Zest",
    "size": "100ml",
    "variants": [
      {
        "id": "v12-1",
        "size": "50ml",
        "price": 1699,
        "mrp": 2399,
        "inStock": true
      },
      {
        "id": "v12-2",
        "size": "100ml",
        "price": 2699,
        "mrp": 3799,
        "inStock": true
      }
    ],
    "stock": 58,
    "badge": "TRENDING"
  },
  {
    "id": "prod-13",
    "slug": "24k-gold-radiant-youth-elixir",
    "name": "24K Gold Radiant Youth Elixir",
    "subtitle": "99.9% Pure Gold Flakes with Collagen Peptides",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 2499,
    "mrp": 3499,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 420,
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An opulent anti-aging face serum enriched with real 24-karat gold flakes, micro-collagen peptides, and niacinamide to restore elasticity and provide a glass skin glow.",
    "shortDescription": "24K gold flakes, collagen peptides & niacinamide.",
    "ingredients": [
      "Aqua",
      "Gold 24K",
      "Hydrolyzed Collagen",
      "Niacinamide",
      "Sodium Hyaluronate",
      "Centella Extract"
    ],
    "benefits": [
      "Imparts instant luminous glow",
      "Smooths fine lines and wrinkles",
      "Boosts cell turnover"
    ],
    "howToUse": "Apply 3-4 drops to cleansed face morning and night. Press gently into skin until fully absorbed.",
    "skinType": "All Skin Types",
    "concern": "Glass Skin Glow",
    "size": "30ml",
    "variants": [
      {
        "id": "v13-1",
        "size": "30ml",
        "price": 1899,
        "mrp": 2699,
        "inStock": true
      },
      {
        "id": "v13-2",
        "size": "50ml",
        "price": 2799,
        "mrp": 3999,
        "inStock": true
      }
    ],
    "stock": 55,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-14",
    "slug": "10-niacinamide-zinc-serum",
    "name": "10% Niacinamide + Zinc Clarifying Serum",
    "subtitle": "Pore Minimizing & Blemish Clearing Formula",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 999,
    "mrp": 1499,
    "discount": 33,
    "rating": 4.8,
    "reviewCount": 380,
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Potent 10% pure Vitamin B3 (Niacinamide) combined with 1% Zinc PCA to balance sebum activity, minimize enlarged pores, and fade post-acne blemishes.",
    "shortDescription": "10% Niacinamide & 1% Zinc PCA for clear skin.",
    "ingredients": [
      "Aqua",
      "Niacinamide",
      "Zinc PCA",
      "Tamarindus Indica Seed Extract",
      "Glycerin"
    ],
    "benefits": [
      "Refines pore appearance",
      "Regulates excess sebum",
      "Fades dark spots and redness"
    ],
    "howToUse": "Dispense 2-3 drops onto face before heavy creams. Use AM and PM.",
    "skinType": "Oily",
    "concern": "Acne & Blemishes",
    "size": "30ml",
    "variants": [
      {
        "id": "v14-1",
        "size": "30ml",
        "price": 999,
        "mrp": 1499,
        "inStock": true
      },
      {
        "id": "v14-2",
        "size": "50ml",
        "price": 1499,
        "mrp": 2199,
        "inStock": true
      }
    ],
    "stock": 80,
    "badge": "BESTSELLER",
    "bestSeller": true
  },
  {
    "id": "prod-15",
    "slug": "hyaluronic-acid-plumping-serum",
    "name": "Multi-Molecular Hyaluronic Acid Plumper",
    "subtitle": "5-Weight Hyaluronic Acid with Polyglutamic Acid",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 1199,
    "mrp": 1699,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 290,
    "images": [
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Deep multi-depth hydration serum containing 5 molecular weights of hyaluronic acid and moisture-locking polyglutamic acid for bouncy, dewy skin.",
    "shortDescription": "5-weight hyaluronic acid & polyglutamic acid.",
    "ingredients": [
      "Aqua",
      "Sodium Hyaluronate Crosspolymer",
      "Polyglutamic Acid",
      "Pro-Vitamin B5",
      "Aloe Barbadensis"
    ],
    "benefits": [
      "Intense 72-hour deep hydration",
      "Instantly plumps dehydrated fine lines",
      "Non-sticky silky finish"
    ],
    "howToUse": "Apply to damp skin immediately after cleansing or toning.",
    "skinType": "Dry",
    "concern": "Hydration & Dryness",
    "size": "30ml",
    "variants": [
      {
        "id": "v15-1",
        "size": "30ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      },
      {
        "id": "v15-2",
        "size": "50ml",
        "price": 1799,
        "mrp": 2499,
        "inStock": true
      }
    ],
    "stock": 70,
    "badge": "TRENDING"
  },
  {
    "id": "prod-16",
    "slug": "20-vitamin-c-ferulic-glow-serum",
    "name": "20% Vitamin C + Ferulic Acid Glow Booster",
    "subtitle": "Pure L-Ascorbic Acid with Vitamin E & Ferulic",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 2199,
    "mrp": 2999,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 340,
    "images": [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Gold-standard brightening serum powered by 20% stabilized L-ascorbic acid, 0.5% ferulic acid, and 1% vitamin E for dark spot removal and photoprotection.",
    "shortDescription": "20% Vitamin C, Ferulic Acid & Vitamin E.",
    "ingredients": [
      "Aqua",
      "3-O-Ethyl Ascorbic Acid",
      "Ferulic Acid",
      "Tocopherol (Vitamin E)",
      "Kakadu Plum Extract"
    ],
    "benefits": [
      "Brightens dull complexions",
      "Fades stubborn hyperpigmentation",
      "Protects from free radical damage"
    ],
    "howToUse": "Apply 4-5 drops in the morning before sunscreen.",
    "skinType": "All Skin Types",
    "concern": "Pigmentation & Dark Spots",
    "size": "30ml",
    "variants": [
      {
        "id": "v16-1",
        "size": "30ml",
        "price": 1499,
        "mrp": 2199,
        "inStock": true
      },
      {
        "id": "v16-2",
        "size": "50ml",
        "price": 2199,
        "mrp": 3099,
        "inStock": true
      }
    ],
    "stock": 65,
    "badge": "BESTSELLER",
    "featured": true
  },
  {
    "id": "prod-17",
    "slug": "encapsulated-retinol-night-serum",
    "name": "0.5% Encapsulated Retinol Night Elixir",
    "subtitle": "Gentle Time-Release Retinoid with Peptides",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 1699,
    "mrp": 2399,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 215,
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Advanced lipid-encapsulated retinol that penetrates deep into dermal layers without redness or flaking, boosting collagen synthesis overnight.",
    "shortDescription": "0.5% Time-release encapsulated retinol & peptides.",
    "ingredients": [
      "Aqua",
      "Encapsulated Retinol",
      "Palmitoyl Tripeptide-38",
      "Squalane",
      "Ceramide NP"
    ],
    "benefits": [
      "Smooths stubborn wrinkles",
      "Boosts cellular renewal",
      "Zero peeling or irritation"
    ],
    "howToUse": "Use at night on dry skin 2-3 times weekly, building up to nightly use.",
    "skinType": "Normal",
    "concern": "Anti-Ageing & Fine Lines",
    "size": "30ml",
    "variants": [
      {
        "id": "v17-1",
        "size": "30ml",
        "price": 1699,
        "mrp": 2399,
        "inStock": true
      }
    ],
    "stock": 45,
    "badge": "AWARD WINNER"
  },
  {
    "id": "prod-18",
    "slug": "centella-cica-barrier-calm-serum",
    "name": "Centella Cica Barrier Calm Dropper",
    "subtitle": "85% Madagascar Cica with Madecassoside",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 1299,
    "mrp": 1799,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 178,
    "images": [
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Ultra-soothing green ampoule formulated with 85% Centella Asiatica extract and pure madecassoside to rapidly calm inflammation and repair compromised barriers.",
    "shortDescription": "85% Centella Asiatica & pure Madecassoside.",
    "ingredients": [
      "Centella Asiatica Leaf Extract",
      "Madecassoside",
      "Allantoin",
      "Panthenol",
      "Beta-Glucan"
    ],
    "benefits": [
      "Instantly relieves irritation and stinging",
      "Strengthens damaged barrier",
      "Reduces visible redness"
    ],
    "howToUse": "Apply 3-4 drops to sensitive or reactive skin areas as needed.",
    "skinType": "Sensitive",
    "concern": "Acne & Blemishes",
    "size": "30ml",
    "variants": [
      {
        "id": "v18-1",
        "size": "30ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 50,
    "badge": "NEW LAUNCH"
  },
  {
    "id": "prod-19",
    "slug": "cashmere-ceramide-barrier-cream",
    "name": "Cashmere Ceramide Barrier Repair Cream",
    "subtitle": "5-Ceramide Complex with Oat Beta-Glucan",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1599,
    "mrp": 2299,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A rich, cocooning moisture cream containing a physiological 3:1:1 ratio of ceramides, cholesterol, and fatty acids to reconstruct the protective lipid barrier.",
    "shortDescription": "5 Ceramides, cholesterol & colloidal oat.",
    "ingredients": [
      "Aqua",
      "Ceramide NP",
      "Ceramide AP",
      "Cholesterol",
      "Colloidal Oatmeal",
      "Shea Butter"
    ],
    "benefits": [
      "Locks in deep hydration for 48 hours",
      "Prevents transepidermal water loss",
      "Soothes dry flaky patches"
    ],
    "howToUse": "Warm a pea-sized amount between fingers and massage over face and neck.",
    "skinType": "Dry",
    "concern": "Hydration & Dryness",
    "size": "50g",
    "variants": [
      {
        "id": "v19-1",
        "size": "50g",
        "price": 1599,
        "mrp": 2299,
        "inStock": true
      },
      {
        "id": "v19-2",
        "size": "100g",
        "price": 2499,
        "mrp": 3499,
        "inStock": true
      }
    ],
    "stock": 65,
    "badge": "BESTSELLER",
    "featured": true
  },
  {
    "id": "prod-20",
    "slug": "hyaluronic-cloud-water-gel",
    "name": "Hyaluronic Cloud Water Gel",
    "subtitle": "Oil-Free Lightweight Hydro Gel with Glacier Water",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1299,
    "mrp": 1899,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 265,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Weightless cloud gel that bursts into cooling water droplets upon contact, quenching thirsty skin without clogging pores or leaving greasiness.",
    "shortDescription": "Oil-free glacier water & multi-hyaluronics.",
    "ingredients": [
      "Glacier Water",
      "Sodium Hyaluronate",
      "Betaine",
      "Trehalose",
      "Green Caviar Extract"
    ],
    "benefits": [
      "Zero heavy residue",
      "Instant cooling refresh",
      "Ideal primer base for makeup"
    ],
    "howToUse": "Apply generously to face and neck as morning moisturizer.",
    "skinType": "Oily",
    "concern": "Hydration & Dryness",
    "size": "50g",
    "variants": [
      {
        "id": "v20-1",
        "size": "50g",
        "price": 1299,
        "mrp": 1899,
        "inStock": true
      }
    ],
    "stock": 75,
    "badge": "TRENDING"
  },
  {
    "id": "prod-21",
    "slug": "dewy-glow-vitamin-c-moisturiser",
    "name": "Dewy Glow Vitamin C Radiance Moisturiser",
    "subtitle": "Kakadu Plum with Yuzu Citrus & Peptides",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1499,
    "mrp": 2099,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Illuminating face cream infused with Australian Kakadu plum and Japanese Yuzu citrus that melts into skin for an ethereal, lit-from-within finish.",
    "shortDescription": "Kakadu plum, Yuzu citrus & brightening peptides.",
    "ingredients": [
      "Aqua",
      "Terminalia Ferdinandiana Fruit Extract",
      "Yuzu Seed Oil",
      "Niacinamide",
      "Squalane"
    ],
    "benefits": [
      "Evens skin tone",
      "Imparts dewy golden radiance",
      "Fights oxidative stress"
    ],
    "howToUse": "Smooth over face and neck each morning.",
    "skinType": "All Skin Types",
    "concern": "Dullness & Texture",
    "size": "50g",
    "variants": [
      {
        "id": "v21-1",
        "size": "50g",
        "price": 1499,
        "mrp": 2099,
        "inStock": true
      }
    ],
    "stock": 55,
    "badge": "NEW LAUNCH"
  },
  {
    "id": "prod-22",
    "slug": "invisible-gel-spf-50-sunscreen",
    "name": "Invisible Fluid Sunscreen SPF 50+ PA++++",
    "subtitle": "Zero White Cast Ultra-Matte Daily Shield",
    "category": "skincare",
    "subcategory": "Sunscreen",
    "price": 382,
    "mrp": 589,
    "discount": 35,
    "rating": 4.9,
    "reviewCount": 450,
    "images": [
      "https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629380108574-40c083555579?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Next-generation chemical sunscreen fluid with photostable UV filters that blends totally invisible on all Fitzpatrick skin tones without pilling.",
    "shortDescription": "SPF 50+ PA++++ with zero white cast and velvety matte finish.",
    "ingredients": [
      "Aqua",
      "Ethylhexyl Methoxycinnamate",
      "Tinosorb M",
      "Uvinul A Plus",
      "Centella Extract"
    ],
    "benefits": [
      "Broad-spectrum UVA/UVB protection",
      "Non-greasy featherlight texture",
      "Sweat & water resistant"
    ],
    "howToUse": "Apply 2 finger-lengths generously 15 minutes before sun exposure. Reapply every 3 hours.",
    "skinType": "All Skin Types",
    "concern": "Sun Protection",
    "size": "50ml",
    "variants": [
      {
        "id": "v22-1",
        "size": "50ml",
        "price": 382,
        "mrp": 589,
        "inStock": true
      },
      {
        "id": "v22-2",
        "size": "100ml",
        "price": 1499,
        "mrp": 2199,
        "inStock": true
      }
    ],
    "stock": 110,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-23",
    "slug": "velvet-matte-cashmere-lipstick-rouge",
    "name": "Velvet Matte Cashmere Lipstick - Rouge Rose",
    "subtitle": "Weightless 12H Pigment with Hyaluronic Filling Spheres",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 1199,
    "mrp": 1699,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 385,
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A decadent velvet matte lipstick in an iconic crimson-rose hue, enriched with hyaluronic filling spheres and botanical camellia oil for non-drying luxury.",
    "shortDescription": "Rich crimson-rose pigment & hyaluronic spheres.",
    "ingredients": [
      "Dimethicone",
      "Polyglyceryl-2 Triisostearate",
      "Camellia Japonica Seed Oil",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "12-hour transfer-resistant wear",
      "Zero drying or lip line accentuation",
      "Velvety cushion glide"
    ],
    "howToUse": "Glide smoothly across lips starting from Cupid's bow outwards.",
    "size": "3.8g",
    "variants": [
      {
        "id": "v23-1",
        "size": "3.8g",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 95,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-24",
    "slug": "hydrating-glaze-lip-oil-peach",
    "name": "Hydrating Glaze Lip Oil - Honey Peach",
    "subtitle": "High-Shine Glass Lip Treatment with Jojoba & Vitamin E",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 899,
    "mrp": 1299,
    "discount": 30,
    "rating": 4.8,
    "reviewCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A nourishing glass-finish lip oil combining cold-pressed golden jojoba, sweet almond oil, and cherry blossom extract for plush, cushioned lips.",
    "shortDescription": "Glass-shine finish, golden jojoba & cherry blossom.",
    "ingredients": [
      "Simmondsia Chinensis Seed Oil",
      "Prunus Amygdalus Dulcis Oil",
      "Tocopheryl Acetate",
      "Peptides"
    ],
    "benefits": [
      "Glass mirror shine without stickiness",
      "Deeply repairs chapped lips",
      "Subtle juicy tint"
    ],
    "howToUse": "Swipe generously with the plush doe-foot applicator.",
    "size": "6ml",
    "variants": [
      {
        "id": "v24-1",
        "size": "6ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 85,
    "badge": "TRENDING"
  },
  {
    "id": "prod-25",
    "slug": "overnight-berry-peptide-lip-mask",
    "name": "Overnight Berry Peptide Lip Mask",
    "subtitle": "Intensive Lip Plumping & Exfoliating Balm",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 451,
    "mrp": 609,
    "discount": 26,
    "rating": 4.9,
    "reviewCount": 440,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An ultra-nourishing sleep treatment with wild strawberry, raspberry extract, murumuru butter, and tripeptides that dissolves dry flakes overnight.",
    "shortDescription": "Wild berries, murumuru butter & tripeptides.",
    "ingredients": [
      "Murumuru Seed Butter",
      "Fragaria Vesca Fruit Extract",
      "Palmitoyl Oligopeptide",
      "Vitamin E"
    ],
    "benefits": [
      "Wakes up with smooth baby-soft lips",
      "Melts away dead skin cells",
      "Intense 24h barrier lock"
    ],
    "howToUse": "Apply a generous layer onto lips before bed with spatula.",
    "size": "20g",
    "variants": [
      {
        "id": "v25-1",
        "size": "20g",
        "price": 451,
        "mrp": 609,
        "inStock": true
      }
    ],
    "stock": 120,
    "badge": "AWARD WINNER",
    "featured": true
  },
  {
    "id": "prod-26",
    "slug": "rose-quartz-multi-cream-blush",
    "name": "Rose Quartz Multi-Use Cream Blush",
    "subtitle": "Hydrating Dewy Cheek & Lip Tint with Micro-Pearls",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 474,
    "mrp": 649,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A melt-on-contact botanical cream blush that gives cheeks and lips a natural flushed glow infused with finely milled rose quartz pearls.",
    "shortDescription": "Rose quartz pearls & dewy botanical cheek tint.",
    "ingredients": [
      "Caprylic/Capric Triglyceride",
      "Cera Alba",
      "Rosa Damascena Flower Wax",
      "Mica (CI 77019)"
    ],
    "benefits": [
      "Seamless blend with fingers or sponge",
      "Buildable natural radiance",
      "Hydrating skincare-infused formula"
    ],
    "howToUse": "Dab lightly onto apples of cheeks and blend upwards.",
    "size": "8g",
    "variants": [
      {
        "id": "v26-1",
        "size": "8g",
        "price": 474,
        "mrp": 649,
        "inStock": true
      }
    ],
    "stock": 65,
    "badge": "NEW LAUNCH"
  },
  {
    "id": "prod-27",
    "slug": "luminous-silk-hydrating-primer",
    "name": "Luminous Silk Hydrating Primer",
    "subtitle": "Pore-Blurring Glow Base with Hyaluronic Acid",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 1299,
    "mrp": 1899,
    "discount": 32,
    "rating": 4.8,
    "reviewCount": 180,
    "images": [
      "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Silken canvas primer that grips makeup for 16 hours while softly blurring fine lines and pores with light-refracting minerals.",
    "shortDescription": "Pore-blurring silk base with hyaluronic acid.",
    "ingredients": [
      "Aqua",
      "Dimethicone Crosspolymer",
      "Sodium Hyaluronate",
      "Silk Amino Acids",
      "Niacinamide"
    ],
    "benefits": [
      "Extends makeup wear up to 16 hours",
      "Smooths skin texture instantly",
      "Weightless breathable formula"
    ],
    "howToUse": "Apply 1-2 pumps over moisturized face before foundation.",
    "size": "30ml",
    "variants": [
      {
        "id": "v27-1",
        "size": "30ml",
        "price": 1399,
        "mrp": 1999,
        "inStock": true
      }
    ],
    "stock": 50,
    "badge": "TRENDING"
  },
  {
    "id": "prod-28",
    "slug": "ultra-definition-setting-powder",
    "name": "Ultra-Definition Mineral Setting Powder",
    "subtitle": "Translucent Micro-Fine Blur Powder with Squalane",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 2199,
    "mrp": 2999,
    "discount": 27,
    "rating": 4.7,
    "reviewCount": 165,
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Feather-light translucent powder with baked minerals that sets foundation without looking cakey, flashback-free in any lighting.",
    "shortDescription": "Flashback-free translucent micro-milled powder.",
    "ingredients": [
      "Silica",
      "Corn Starch",
      "Plant Squalane",
      "Zinc Stearate",
      "Lauroyl Lysine"
    ],
    "benefits": [
      "Zero flashback in flash photography",
      "Controls shine without dryness",
      "Velvety airbrushed finish"
    ],
    "howToUse": "Press into T-zone and under-eyes with velvet puff.",
    "size": "15g",
    "variants": [
      {
        "id": "v28-1",
        "size": "15g",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 55,
    "badge": "LIMITED EDITION"
  },
  {
    "id": "prod-29",
    "slug": "redensyl-rosemary-scalp-density-serum",
    "name": "Redensyl 3% + Rosemary Scalp Density Serum",
    "subtitle": "Clinical Hair Growth & Root Strengthening Formula",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 1299,
    "mrp": 1899,
    "discount": 32,
    "rating": 4.9,
    "reviewCount": 512,
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Award-winning scalp tonic packed with 3% Redensyl, 2% Procapil, 5% Rosemary distillate, and AnaGain to reactive dormant follicles and reduce hair shedding.",
    "shortDescription": "3% Redensyl, Rosemary extract & AnaGain.",
    "ingredients": [
      "Aqua",
      "Redensyl",
      "Rosmarinus Officinalis Leaf Extract",
      "Procapil",
      "Biotinoyl Tripeptide-1"
    ],
    "benefits": [
      "Visibly increases hair density in 8 weeks",
      "Non-greasy water-based scalp absorption",
      "Revitalizes thinning hairline"
    ],
    "howToUse": "Apply 1 full dropper directly onto dry scalp sections nightly. Massage gently with fingertips.",
    "concern": "Hair Fall & Density",
    "size": "50ml",
    "variants": [
      {
        "id": "v29-1",
        "size": "50ml",
        "price": 1299,
        "mrp": 1899,
        "inStock": true
      },
      {
        "id": "v29-2",
        "size": "100ml",
        "price": 2199,
        "mrp": 3199,
        "inStock": true
      }
    ],
    "stock": 80,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-30",
    "slug": "pure-moroccan-argan-hair-elixir",
    "name": "Pure Moroccan Argan Hair Elixir",
    "subtitle": "Cold-Pressed Organic Argan with Camellia Shine",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 2199,
    "mrp": 2999,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 340,
    "images": [
      "https://images.unsplash.com/photo-1608571423539-e951b9b3871e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A weightless, golden hair serum crafted from first-press Moroccan argan kernels that seals split ends, tames humidity frizz, and adds mirror glass shine.",
    "shortDescription": "Cold-pressed Moroccan argan & camellia oil.",
    "ingredients": [
      "Argania Spinosa Kernel Oil",
      "Camellia Oleifera Seed Oil",
      "Cyclopentasiloxane",
      "Parfum"
    ],
    "benefits": [
      "Tames frizz in 90% humidity",
      "Thermal heat protection up to 230°C",
      "Silky glossy finish without heaviness"
    ],
    "howToUse": "Rub 2-3 drops between palms and run through damp or dry mid-lengths and ends.",
    "concern": "Hair Fall & Density",
    "size": "50ml",
    "variants": [
      {
        "id": "v30-1",
        "size": "50ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 70,
    "badge": "TRENDING"
  },
  {
    "id": "prod-31",
    "slug": "ayurvedic-bhringraj-amla-hair-oil",
    "name": "Ayurvedic Bhringraj & Amla Hair Growth Oil",
    "subtitle": "100% Traditional Sesame Decoction with 18 Herbs",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 439,
    "mrp": 599,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 410,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585232350744-974fc9804d65?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Authentic Kshirpak-processed Ayurvedic hair oil infused with wild Bhringraj, Indian Gooseberry (Amla), Brahmi, and Hibiscus to strengthen roots from within.",
    "shortDescription": "Wild Bhringraj, Amla & 18 Ayurvedic botanical herbs.",
    "ingredients": [
      "Sesamum Indicum Seed Oil",
      "Eclipta Alba (Bhringraj)",
      "Phyllanthus Emblica (Amla)",
      "Bacopa Monnieri"
    ],
    "benefits": [
      "Deeply nourishes dry scalp roots",
      "Prevents premature graying",
      "Thickens hair shafts"
    ],
    "howToUse": "Warm oil and massage vigorously into scalp. Leave on for 2 hours or overnight before washing.",
    "concern": "Hair Fall & Density",
    "size": "200ml",
    "variants": [
      {
        "id": "v31-1",
        "size": "200ml",
        "price": 439,
        "mrp": 599,
        "inStock": true
      }
    ],
    "stock": 90,
    "badge": "BESTSELLER"
  },
  {
    "id": "prod-32",
    "slug": "keratin-silk-protein-repair-mask",
    "name": "Keratin & Silk Protein Deep Repair Hair Mask",
    "subtitle": "Intense Moisture Therapy for Damaged & Colored Hair",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 462,
    "mrp": 639,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 280,
    "images": [
      "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Salon-grade restorative hair treatment enriched with hydrolyzed keratin, silk amino acids, and murumuru butter to mend split ends and reverse chemical damage.",
    "shortDescription": "Hydrolyzed keratin, silk peptides & murumuru butter.",
    "ingredients": [
      "Aqua",
      "Hydrolyzed Keratin",
      "Silk Amino Acids",
      "Astrocaryum Murumuru Butter",
      "Panthenol"
    ],
    "benefits": [
      "Reduces hair breakage by 95%",
      "Restores elastic bounce to bleached strands",
      "Smooths rough cuticles"
    ],
    "howToUse": "Apply generously to towel-dried hair after shampooing. Leave on for 10 minutes, then rinse thoroughly.",
    "concern": "Hair Fall & Density",
    "size": "200g",
    "variants": [
      {
        "id": "v32-1",
        "size": "200g",
        "price": 462,
        "mrp": 639,
        "inStock": true
      }
    ],
    "stock": 60,
    "badge": "AWARD WINNER",
    "featured": true
  },
  {
    "id": "prod-33",
    "slug": "whipped-shea-cocoa-body-butter",
    "name": "Whipped Shea & Cocoa 48H Body Butter",
    "subtitle": "Ultra-Rich Melting Soufflé with Vanilla Bean",
    "category": "bodycare",
    "subcategory": "Body Lotion",
    "price": 1299,
    "mrp": 1799,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 390,
    "images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An indulgent, decadent whipped body cream crafted from unrefined Ghanaian shea butter, organic cocoa butter, sweet almond oil, and Tahitian vanilla.",
    "shortDescription": "Ghanaian shea butter, cocoa butter & Tahitian vanilla.",
    "ingredients": [
      "Butyrospermum Parkii Butter",
      "Theobroma Cacao Seed Butter",
      "Prunus Amygdalus Dulcis Oil",
      "Tocopherol"
    ],
    "benefits": [
      "Provides intense 48-hour moisture",
      "Restores suppleness to dry elbows & knees",
      "Delectable warm gourmand aroma"
    ],
    "howToUse": "Massage all over body immediately after shower on slightly damp skin.",
    "skinType": "Dry",
    "concern": "Hydration & Dryness",
    "size": "200g",
    "variants": [
      {
        "id": "v33-1",
        "size": "200g",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 85,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-34",
    "slug": "himalayan-pink-salt-rose-polish",
    "name": "Himalayan Pink Salt & Rose Body Polish",
    "subtitle": "Mineral-Rich Exfoliating Scrub with Sweet Almond Oil",
    "category": "bodycare",
    "subcategory": "Body Wash",
    "price": 2299,
    "mrp": 3199,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 275,
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Gently sloughs away dead skin cells with hand-mined Himalayan pink salt crystals, organic rosehip oil, and nourishing vitamin E for velvety smooth skin.",
    "shortDescription": "Himalayan crystal salt, rosehip oil & vitamin E.",
    "ingredients": [
      "Sodium Chloride (Himalayan Salt)",
      "Rosa Canina Fruit Oil",
      "Prunus Amygdalus Dulcis Oil",
      "Rose Petals"
    ],
    "benefits": [
      "Buffs away keratosis pilaris and rough skin",
      "Enhances natural body glow",
      "Leaves skin baby-soft"
    ],
    "howToUse": "Rub in circular motions onto wet skin in the shower, focusing on rough spots. Rinse thoroughly.",
    "skinType": "All Skin Types",
    "size": "250g",
    "variants": [
      {
        "id": "v34-1",
        "size": "250g",
        "price": 999,
        "mrp": 1499,
        "inStock": true
      }
    ],
    "stock": 70,
    "badge": "TRENDING"
  },
  {
    "id": "prod-35",
    "slug": "velvet-rose-vanilla-shower-gel",
    "name": "Velvet Rose & Vanilla Moisturising Shower Gel",
    "subtitle": "Sulfate-Free Foaming Cleanser with Aloe Vera",
    "category": "bodycare",
    "subcategory": "Body Wash",
    "price": 381,
    "mrp": 609,
    "discount": 37,
    "rating": 4.7,
    "reviewCount": 230,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "A luxurious, creamy foaming body wash infused with organic French rose water and warm bourbon vanilla that cleanses without stripping skin oils.",
    "shortDescription": "French rose water, bourbon vanilla & aloe vera.",
    "ingredients": [
      "Aqua",
      "Sodium Cocoyl Isethionate",
      "Rosa Centifolia Flower Water",
      "Aloe Barbadensis Leaf Juice"
    ],
    "benefits": [
      "Gentle sulfate-free lather",
      "Leaves lingering sensual fragrance",
      "Hydrates while cleansing"
    ],
    "howToUse": "Dispense onto loofah or wet palms, lather over body, and rinse.",
    "skinType": "All Skin Types",
    "size": "300ml",
    "variants": [
      {
        "id": "v35-1",
        "size": "300ml",
        "price": 381,
        "mrp": 609,
        "inStock": true
      }
    ],
    "stock": 95,
    "badge": "NEW LAUNCH"
  },
  {
    "id": "prod-36",
    "slug": "cedarwood-saffron-beard-growth-oil",
    "name": "Cedarwood & Saffron Beard Growth Oil",
    "subtitle": "Jojoba, Argan & Vitamin E Conditioning Tonic",
    "category": "men",
    "subcategory": "Men",
    "price": 1299,
    "mrp": 1799,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 320,
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Non-greasy grooming oil combining cold-pressed golden jojoba, Moroccan argan, Atlas cedarwood, and Kashmiri saffron to soften coarse facial hair and promote growth.",
    "shortDescription": "Atlas cedarwood, red saffron, jojoba & argan.",
    "ingredients": [
      "Simmondsia Chinensis Seed Oil",
      "Argania Spinosa Kernel Oil",
      "Cedrus Atlantica Bark Oil",
      "Crocus Sativus"
    ],
    "benefits": [
      "Tames beard itch and beard-druff",
      "Softens rough bristles",
      "Subtle masculine woody fragrance"
    ],
    "howToUse": "Dispense 3-5 drops onto palms and massage deep into beard and underlying skin.",
    "recipient": [
      "Gifts for Him",
      "For Dad"
    ],
    "size": "50ml",
    "variants": [
      {
        "id": "v36-1",
        "size": "50ml",
        "price": 999,
        "mrp": 1499,
        "inStock": true
      }
    ],
    "stock": 65,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-37",
    "slug": "bergamot-vetiver-aftershave-balm",
    "name": "Bergamot & Vetiver Aftershave Soothing Balm",
    "subtitle": "Alcohol-Free Cooling Relief with Witch Hazel",
    "category": "men",
    "subcategory": "Men",
    "price": 427,
    "mrp": 589,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423539-e951b9b3871e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An instant soothing post-shave balm with witch hazel, allantoin, and tea tree extract that calms razor burn without alcohol sting.",
    "shortDescription": "Witch hazel, Haitian vetiver & calming allantoin.",
    "ingredients": [
      "Aqua",
      "Hamamelis Virginiana Water",
      "Allantoin",
      "Melaleuca Alternifolia Leaf Oil",
      "Menthol"
    ],
    "benefits": [
      "Eliminates razor bumps and redness",
      "Matte cooling finish",
      "Fast-absorbing cream gel"
    ],
    "howToUse": "Apply generously to shaved area immediately after shaving.",
    "recipient": [
      "Gifts for Him"
    ],
    "size": "100ml",
    "variants": [
      {
        "id": "v37-1",
        "size": "100ml",
        "price": 427,
        "mrp": 589,
        "inStock": true
      }
    ],
    "stock": 55,
    "badge": "TRENDING"
  },
  {
    "id": "prod-38",
    "slug": "the-royal-perfume-discovery-coffret",
    "name": "The Royal Perfume Discovery Coffret",
    "subtitle": "Set of 5 x 15ml Miniature Luxury Extrait de Parfums",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 2499,
    "mrp": 3499,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 410,
    "images": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "An exquisite magnetic keepsake gift box containing 5 travel-sized flacons of our iconic fragrances: Oud Royal, Rose Damascena, Santal Imperial, Jasmine Sambac, and Golden Amber Noir.",
    "shortDescription": "5 x 15ml iconic luxury miniature fragrances in keepsake box.",
    "ingredients": [
      "Alcohol Denat",
      "Parfum",
      "Botanical Extracts"
    ],
    "benefits": [
      "Ideal gift for connoisseurs",
      "Perfect for travel & scent layering",
      "Includes luxury velvet pouch"
    ],
    "howToUse": "Sample each scent individually or layer across pulse points.",
    "recipient": [
      "Gifts for Her",
      "Gifts for Him",
      "For Couple"
    ],
    "size": "5 x 15ml",
    "variants": [
      {
        "id": "v38-1",
        "size": "5 x 15ml",
        "price": 2499,
        "mrp": 3499,
        "inStock": true
      }
    ],
    "stock": 50,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": true
  },
  {
    "id": "prod-39",
    "slug": "scented-soy-candle-french-lavender-amber",
    "name": "Scented Soy Candle - French Lavender & Amber",
    "subtitle": "100% Pure Soy Wax with Cotton Wick (50H Burn Time)",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 449,
    "mrp": 699,
    "discount": 36,
    "rating": 4.9,
    "reviewCount": 285,
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Hand-poured artisanal soy candle infused with therapeutic French Provence lavender essential oil, warm golden amber, and soft cedarwood.",
    "shortDescription": "Artisanal hand-poured soy candle with Provence lavender.",
    "ingredients": [
      "Hydrogenated Soybean Oil (Soy Wax)",
      "Lavandula Angustifolia Oil",
      "Parfum",
      "Cotton Wick"
    ],
    "benefits": [
      "50+ hours of clean, soot-free burn",
      "Calms mind and elevates room aesthetic",
      "Heavy frosted luxury glass jar"
    ],
    "howToUse": "Trim wick to 1/4 inch before lighting. Allow wax pool to reach glass edges on first burn.",
    "recipient": [
      "Gifts for Her",
      "For Mom",
      "Self Care"
    ],
    "size": "240g",
    "variants": [
      {
        "id": "v39-1",
        "size": "240g",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 40,
    "badge": "AWARD WINNER",
    "featured": true
  },
  {
    "id": "prod-40",
    "slug": "the-velora-bridal-glow-keepsake-box",
    "name": "The Velora Bridal Glow Keepsake Hamper",
    "subtitle": "Complete 7-Piece Royal Skincare & Fragrance Trunk",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 799,
    "mrp": 1199,
    "discount": 33,
    "rating": 5,
    "reviewCount": 190,
    "images": [
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The ultimate bridal treasure box containing 24K Gold Serum, Rose Damascena Perfume, Whipped Shea Butter, Himalayan Salt Scrub, Cashmere Barrier Cream, Silk Eye Mask, and a Gold Vanity Mirror.",
    "shortDescription": "7-piece luxury bridal beauty & fragrance trunk.",
    "ingredients": [
      "Botanical Extracts",
      "Pure Gold Flakes",
      "Shea Butter",
      "Parfum"
    ],
    "benefits": [
      "Comprehensive pre-bridal skincare ritual",
      "Heirloom silk-lined gift box",
      "Unforgettable luxury presentation"
    ],
    "howToUse": "Follow the enclosed ritual guide for a 30-day pre-event glow.",
    "recipient": [
      "Gifts for Her",
      "For Sister",
      "For Best Friend"
    ],
    "size": "Full Set",
    "variants": [
      {
        "id": "v40-1",
        "size": "Full Set",
        "price": 4999,
        "mrp": 6999,
        "inStock": true
      }
    ],
    "stock": 25,
    "badge": "LIMITED EDITION",
    "featured": true
  },
  {
    "id": "prod-41",
    "slug": "bourbon-cedarwood-tobacco-flacon",
    "name": "Bourbon Cedarwood & Tobacco Flacon",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 369,
    "mrp": 599,
    "discount": 38,
    "rating": 4.7,
    "reviewCount": 407,
    "images": [
      "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Bourbon Cedarwood & Tobacco Flacon, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v41-1",
        "size": "50ml",
        "price": 369,
        "mrp": 599,
        "inStock": true
      },
      {
        "id": "v41-2",
        "size": "100ml",
        "price": 2899,
        "mrp": 3999,
        "inStock": true
      }
    ],
    "stock": 63,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "fragranceFamily": "Woody & Amber"
  },
  {
    "id": "prod-42",
    "slug": "solar-ylang-ylang-mono-mist",
    "name": "Solar Ylang Ylang & Monoï Mist",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 2399,
    "mrp": 3299,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 414,
    "images": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Solar Ylang Ylang & Monoï Mist, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v42-1",
        "size": "50ml",
        "price": 1679,
        "mrp": 2309,
        "inStock": true
      },
      {
        "id": "v42-2",
        "size": "100ml",
        "price": 2399,
        "mrp": 3299,
        "inStock": true
      }
    ],
    "stock": 66,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": true,
    "newLaunch": false,
    "fragranceFamily": "Floral & Rose"
  },
  {
    "id": "prod-43",
    "slug": "peony-blush-white-suede-parfum",
    "name": "Peony Blush & White Suede Parfum",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 699,
    "mrp": 999,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 121,
    "images": [
      "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Peony Blush & White Suede Parfum, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v43-1",
        "size": "50ml",
        "price": 415,
        "mrp": 579,
        "inStock": true
      },
      {
        "id": "v43-2",
        "size": "100ml",
        "price": 2999,
        "mrp": 4199,
        "inStock": true
      }
    ],
    "stock": 69,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "fragranceFamily": "Floral & Rose"
  },
  {
    "id": "prod-44",
    "slug": "royal-leather-cardamom-extrait",
    "name": "Royal Leather & Cardamom Extrait",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 1699,
    "mrp": 2399,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 128,
    "images": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Royal Leather & Cardamom Extrait, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v44-1",
        "size": "50ml",
        "price": 2449,
        "mrp": 3429,
        "inStock": true
      },
      {
        "id": "v44-2",
        "size": "100ml",
        "price": 3499,
        "mrp": 4899,
        "inStock": true
      }
    ],
    "stock": 72,
    "featured": false,
    "bestSeller": false,
    "newLaunch": true,
    "fragranceFamily": "Oriental & Oud"
  },
  {
    "id": "prod-45",
    "slug": "turkish-rose-petals-pink-pepper",
    "name": "Turkish Rose Petals & Pink Pepper",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 1899,
    "mrp": 2699,
    "discount": 30,
    "rating": 4.7,
    "reviewCount": 135,
    "images": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Turkish Rose Petals & Pink Pepper, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v45-1",
        "size": "50ml",
        "price": 1889,
        "mrp": 2589,
        "inStock": true
      },
      {
        "id": "v45-2",
        "size": "100ml",
        "price": 2699,
        "mrp": 3699,
        "inStock": true
      }
    ],
    "stock": 75,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "fragranceFamily": "Floral & Rose"
  },
  {
    "id": "prod-46",
    "slug": "black-fig-cardamom-sillage",
    "name": "Black Fig & Cardamom Sillage",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 484,
    "mrp": 699,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Black Fig & Cardamom Sillage, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v46-1",
        "size": "50ml",
        "price": 484,
        "mrp": 699,
        "inStock": true
      },
      {
        "id": "v46-2",
        "size": "100ml",
        "price": 2799,
        "mrp": 3899,
        "inStock": true
      }
    ],
    "stock": 78,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "fragranceFamily": "Woody & Amber"
  },
  {
    "id": "prod-47",
    "slug": "white-musk-cotton-blossom-parfum",
    "name": "White Musk & Cotton Blossom Parfum",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 2299,
    "mrp": 3199,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 149,
    "images": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our White Musk & Cotton Blossom Parfum, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v47-1",
        "size": "50ml",
        "price": 1609,
        "mrp": 2239,
        "inStock": true
      },
      {
        "id": "v47-2",
        "size": "100ml",
        "price": 2299,
        "mrp": 3199,
        "inStock": true
      }
    ],
    "stock": 81,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "fragranceFamily": "Fresh & Aquatic"
  },
  {
    "id": "prod-48",
    "slug": "french-lavender-haitian-vetiver",
    "name": "French Lavender & Haitian Vetiver",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "fragrances",
    "subcategory": "Perfume",
    "price": 2499,
    "mrp": 3499,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 156,
    "images": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our French Lavender & Haitian Vetiver, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v48-1",
        "size": "50ml",
        "price": 1749,
        "mrp": 2449,
        "inStock": true
      },
      {
        "id": "v48-2",
        "size": "100ml",
        "price": 2499,
        "mrp": 3499,
        "inStock": true
      }
    ],
    "stock": 84,
    "featured": true,
    "bestSeller": true,
    "newLaunch": false,
    "fragranceFamily": "Fresh & Aquatic"
  },
  {
    "id": "prod-49",
    "slug": "5-aha-2-bha-peeling-solution",
    "name": "5% AHA + 2% BHA Peeling Solution",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.7,
    "reviewCount": 163,
    "images": [
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our 5% AHA + 2% BHA Peeling Solution, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v49-1",
        "size": "30ml",
        "price": 629,
        "mrp": 909,
        "inStock": true
      },
      {
        "id": "v49-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 87,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Dullness & Texture",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-50",
    "slug": "ceramide-3-deep-repair-concentrate",
    "name": "Ceramide 3% Deep Repair Concentrate",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 2799,
    "mrp": 3899,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 170,
    "images": [
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Ceramide 3% Deep Repair Concentrate, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v50-1",
        "size": "30ml",
        "price": 979,
        "mrp": 1399,
        "inStock": true
      },
      {
        "id": "v50-2",
        "size": "50ml",
        "price": 1399,
        "mrp": 1999,
        "inStock": true
      }
    ],
    "stock": 40,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hydration & Dryness",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-51",
    "slug": "copper-peptide-1-firming-ampoule",
    "name": "Copper Peptide 1% Firming Ampoule",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 1799,
    "mrp": 2499,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 177,
    "images": [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Copper Peptide 1% Firming Ampoule, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v51-1",
        "size": "30ml",
        "price": 1259,
        "mrp": 1749,
        "inStock": true
      },
      {
        "id": "v51-2",
        "size": "50ml",
        "price": 1799,
        "mrp": 2499,
        "inStock": true
      }
    ],
    "stock": 43,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Anti-Ageing & Fine Lines",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-52",
    "slug": "bakuchiol-2-botanical-retinol-serum",
    "name": "Bakuchiol 2% Botanical Retinol Serum",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 472,
    "mrp": 689,
    "discount": 31,
    "rating": 4.6,
    "reviewCount": 184,
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Bakuchiol 2% Botanical Retinol Serum, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v52-1",
        "size": "30ml",
        "price": 472,
        "mrp": 689,
        "inStock": true
      },
      {
        "id": "v52-2",
        "size": "50ml",
        "price": 1499,
        "mrp": 2099,
        "inStock": true
      }
    ],
    "stock": 46,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Anti-Ageing & Fine Lines",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-53",
    "slug": "alpha-arbutin-2-dark-spot-corrector",
    "name": "Alpha Arbutin 2% Dark Spot Corrector",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 1099,
    "mrp": 1599,
    "discount": 31,
    "rating": 4.7,
    "reviewCount": 191,
    "images": [
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Alpha Arbutin 2% Dark Spot Corrector, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v53-1",
        "size": "30ml",
        "price": 769,
        "mrp": 1119,
        "inStock": true
      },
      {
        "id": "v53-2",
        "size": "50ml",
        "price": 1099,
        "mrp": 1599,
        "inStock": true
      }
    ],
    "stock": 49,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Pigmentation & Dark Spots",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-54",
    "slug": "marine-collagen-elasticity-elixir",
    "name": "Marine Collagen Elasticity Elixir",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 2299,
    "mrp": 3199,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Marine Collagen Elasticity Elixir, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v54-1",
        "size": "30ml",
        "price": 1119,
        "mrp": 1539,
        "inStock": true
      },
      {
        "id": "v54-2",
        "size": "50ml",
        "price": 1599,
        "mrp": 2199,
        "inStock": true
      }
    ],
    "stock": 52,
    "badge": "AWARD WINNER",
    "featured": false,
    "bestSeller": true,
    "newLaunch": false,
    "concern": "Glass Skin Glow",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-55",
    "slug": "squalane-rosehip-glow-infusion-oil",
    "name": "Squalane & Rosehip Glow Infusion Oil",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 2599,
    "mrp": 3699,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 205,
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Squalane & Rosehip Glow Infusion Oil, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v55-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v55-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 55,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": true,
    "concern": "Glass Skin Glow",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-56",
    "slug": "green-tea-polyphenol-antioxidant-serum",
    "name": "Green Tea Polyphenol Antioxidant Serum",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 414,
    "mrp": 599,
    "discount": 31,
    "rating": 4.6,
    "reviewCount": 212,
    "images": [
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Green Tea Polyphenol Antioxidant Serum, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v56-1",
        "size": "30ml",
        "price": 414,
        "mrp": 599,
        "inStock": true
      },
      {
        "id": "v56-2",
        "size": "50ml",
        "price": 999,
        "mrp": 1499,
        "inStock": true
      }
    ],
    "stock": 58,
    "badge": "TRENDING",
    "featured": true,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Acne & Blemishes",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-57",
    "slug": "propolis-royal-jelly-glow-ampoule",
    "name": "Propolis & Royal Jelly Glow Ampoule",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 1499,
    "mrp": 2099,
    "discount": 29,
    "rating": 4.7,
    "reviewCount": 219,
    "images": [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Propolis & Royal Jelly Glow Ampoule, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v57-1",
        "size": "30ml",
        "price": 1049,
        "mrp": 1469,
        "inStock": true
      },
      {
        "id": "v57-2",
        "size": "50ml",
        "price": 1499,
        "mrp": 2099,
        "inStock": true
      }
    ],
    "stock": 61,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Glass Skin Glow",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-58",
    "slug": "salicylic-acid-2-blemish-solution",
    "name": "Salicylic Acid 2% Blemish Solution",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Serum",
    "price": 2399,
    "mrp": 3299,
    "discount": 27,
    "rating": 4.8,
    "reviewCount": 226,
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Salicylic Acid 2% Blemish Solution, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "30ml",
    "variants": [
      {
        "id": "v58-1",
        "size": "30ml",
        "price": 559,
        "mrp": 839,
        "inStock": true
      },
      {
        "id": "v58-2",
        "size": "50ml",
        "price": 799,
        "mrp": 1199,
        "inStock": true
      }
    ],
    "stock": 64,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Acne & Blemishes",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-59",
    "slug": "gentle-amino-acid-foaming-cleanser",
    "name": "Gentle Amino Acid Foaming Cleanser",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 699,
    "mrp": 999,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 233,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Gentle Amino Acid Foaming Cleanser, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v59-1",
        "size": "30ml",
        "price": 489,
        "mrp": 699,
        "inStock": true
      },
      {
        "id": "v59-2",
        "size": "50ml",
        "price": 699,
        "mrp": 999,
        "inStock": true
      }
    ],
    "stock": 67,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hydration & Dryness",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-60",
    "slug": "salicylic-clarifying-gel-face-wash",
    "name": "Salicylic Clarifying Gel Face Wash",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 699,
    "mrp": 999,
    "discount": 30,
    "rating": 4.6,
    "reviewCount": 240,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Salicylic Clarifying Gel Face Wash, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v60-1",
        "size": "30ml",
        "price": 489,
        "mrp": 699,
        "inStock": true
      },
      {
        "id": "v60-2",
        "size": "50ml",
        "price": 699,
        "mrp": 999,
        "inStock": true
      }
    ],
    "stock": 70,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": true,
    "newLaunch": false,
    "concern": "Acne & Blemishes",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-61",
    "slug": "melt-away-cleansing-balm-with-camellia",
    "name": "Melt-Away Cleansing Balm with Camellia",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 2899,
    "mrp": 3999,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 247,
    "images": [
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Melt-Away Cleansing Balm with Camellia, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v61-1",
        "size": "30ml",
        "price": 379,
        "mrp": 549,
        "inStock": true
      },
      {
        "id": "v61-2",
        "size": "50ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 73,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Glass Skin Glow",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-62",
    "slug": "rose-damask-hydrating-micellar-water",
    "name": "Rose Damask Hydrating Micellar Water",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 599,
    "mrp": 899,
    "discount": 33,
    "rating": 4.8,
    "reviewCount": 254,
    "images": [
      "https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629380108574-40c083555579?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Rose Damask Hydrating Micellar Water, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v62-1",
        "size": "30ml",
        "price": 419,
        "mrp": 629,
        "inStock": true
      },
      {
        "id": "v62-2",
        "size": "50ml",
        "price": 599,
        "mrp": 899,
        "inStock": true
      }
    ],
    "stock": 76,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hydration & Dryness",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-63",
    "slug": "volcanic-charcoal-deep-pore-cleanser",
    "name": "Volcanic Charcoal Deep Pore Cleanser",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 749,
    "mrp": 1099,
    "discount": 32,
    "rating": 4.9,
    "reviewCount": 261,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Volcanic Charcoal Deep Pore Cleanser, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v63-1",
        "size": "30ml",
        "price": 524,
        "mrp": 769,
        "inStock": true
      },
      {
        "id": "v63-2",
        "size": "50ml",
        "price": 749,
        "mrp": 1099,
        "inStock": true
      }
    ],
    "stock": 79,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Acne & Blemishes",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-64",
    "slug": "oat-milk-barrier-cleansing-emulsion",
    "name": "Oat Milk Barrier Cleansing Emulsion",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 849,
    "mrp": 1199,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 268,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Oat Milk Barrier Cleansing Emulsion, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v64-1",
        "size": "30ml",
        "price": 594,
        "mrp": 839,
        "inStock": true
      },
      {
        "id": "v64-2",
        "size": "50ml",
        "price": 849,
        "mrp": 1199,
        "inStock": true
      }
    ],
    "stock": 82,
    "featured": true,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hydration & Dryness",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-65",
    "slug": "vitamin-c-brightening-foaming-wash",
    "name": "Vitamin C Brightening Foaming Wash",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Wash",
    "price": 799,
    "mrp": 1149,
    "discount": 30,
    "rating": 4.7,
    "reviewCount": 275,
    "images": [
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Vitamin C Brightening Foaming Wash, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v65-1",
        "size": "30ml",
        "price": 559,
        "mrp": 804,
        "inStock": true
      },
      {
        "id": "v65-2",
        "size": "50ml",
        "price": 799,
        "mrp": 1149,
        "inStock": true
      }
    ],
    "stock": 85,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Dullness & Texture",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-66",
    "slug": "peptide-firming-day-souffl-spf-30",
    "name": "Peptide Firming Day Soufflé SPF 30",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1699,
    "mrp": 2399,
    "discount": 29,
    "rating": 4.8,
    "reviewCount": 282,
    "images": [
      "https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629380108574-40c083555579?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Peptide Firming Day Soufflé SPF 30, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "50g",
    "variants": [
      {
        "id": "v66-1",
        "size": "30ml",
        "price": 1189,
        "mrp": 1679,
        "inStock": true
      },
      {
        "id": "v66-2",
        "size": "50ml",
        "price": 1699,
        "mrp": 2399,
        "inStock": true
      }
    ],
    "stock": 88,
    "featured": false,
    "bestSeller": true,
    "newLaunch": true,
    "concern": "Anti-Ageing & Fine Lines",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-67",
    "slug": "snail-mucin-92-advanced-repair-cream",
    "name": "Snail Mucin 92% Advanced Repair Cream",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1399,
    "mrp": 1999,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 289,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Snail Mucin 92% Advanced Repair Cream, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "50g",
    "variants": [
      {
        "id": "v67-1",
        "size": "30ml",
        "price": 979,
        "mrp": 1399,
        "inStock": true
      },
      {
        "id": "v67-2",
        "size": "50ml",
        "price": 1399,
        "mrp": 1999,
        "inStock": true
      }
    ],
    "stock": 41,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Glass Skin Glow",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-68",
    "slug": "centella-cica-calming-relief-cream",
    "name": "Centella Cica Calming Relief Cream",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1299,
    "mrp": 1799,
    "discount": 28,
    "rating": 4.6,
    "reviewCount": 296,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Centella Cica Calming Relief Cream, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "50g",
    "variants": [
      {
        "id": "v68-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v68-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 44,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hydration & Dryness",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-69",
    "slug": "mineral-dew-physical-sunscreen-spf-50",
    "name": "Mineral Dew Physical Sunscreen SPF 50",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Sunscreen",
    "price": 413,
    "mrp": 619,
    "discount": 33,
    "rating": 4.7,
    "reviewCount": 303,
    "images": [
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Mineral Dew Physical Sunscreen SPF 50, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v69-1",
        "size": "30ml",
        "price": 413,
        "mrp": 619,
        "inStock": true
      },
      {
        "id": "v69-2",
        "size": "50ml",
        "price": 999,
        "mrp": 1399,
        "inStock": true
      }
    ],
    "stock": 47,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Sun Protection",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-70",
    "slug": "rice-water-probiotics-radiance-milk",
    "name": "Rice Water & Probiotics Radiance Milk",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Moisturiser",
    "price": 1199,
    "mrp": 1699,
    "discount": 29,
    "rating": 4.8,
    "reviewCount": 310,
    "images": [
      "https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629380108574-40c083555579?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Rice Water & Probiotics Radiance Milk, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "50g",
    "variants": [
      {
        "id": "v70-1",
        "size": "30ml",
        "price": 839,
        "mrp": 1189,
        "inStock": true
      },
      {
        "id": "v70-2",
        "size": "50ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 50,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Dullness & Texture",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-71",
    "slug": "matcha-green-tea-pore-refining-clay-mask",
    "name": "Matcha Green Tea Pore Refining Clay Mask",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Mask",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.9,
    "reviewCount": 317,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Matcha Green Tea Pore Refining Clay Mask, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v71-1",
        "size": "30ml",
        "price": 629,
        "mrp": 909,
        "inStock": true
      },
      {
        "id": "v71-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 53,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Acne & Blemishes",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-72",
    "slug": "golden-honey-nourishing-sleep-mask",
    "name": "Golden Honey Nourishing Sleep Mask",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Face Mask",
    "price": 2499,
    "mrp": 3499,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 324,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Golden Honey Nourishing Sleep Mask, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v72-1",
        "size": "30ml",
        "price": 769,
        "mrp": 1119,
        "inStock": true
      },
      {
        "id": "v72-2",
        "size": "50ml",
        "price": 1099,
        "mrp": 1599,
        "inStock": true
      }
    ],
    "stock": 56,
    "badge": "AWARD WINNER",
    "featured": true,
    "bestSeller": true,
    "newLaunch": false,
    "concern": "Hydration & Dryness",
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-73",
    "slug": "velvet-lip-tint-sunset-coral",
    "name": "Velvet Lip Tint - Sunset Coral",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 2199,
    "mrp": 2999,
    "discount": 27,
    "rating": 4.7,
    "reviewCount": 331,
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Velvet Lip Tint - Sunset Coral, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v73-1",
        "size": "30ml",
        "price": 355,
        "mrp": 529,
        "inStock": true
      },
      {
        "id": "v73-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 59,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-74",
    "slug": "sculpt-glow-bronze-contour-wand",
    "name": "Sculpt & Glow Bronze Contour Wand",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 1599,
    "mrp": 2299,
    "discount": 30,
    "rating": 4.8,
    "reviewCount": 338,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Sculpt & Glow Bronze Contour Wand, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v74-1",
        "size": "30ml",
        "price": 839,
        "mrp": 1189,
        "inStock": true
      },
      {
        "id": "v74-2",
        "size": "50ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 62,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-75",
    "slug": "12-pan-earthy-nude-eyeshadow-palette",
    "name": "12-Pan Earthy Nude Eyeshadow Palette",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 1999,
    "mrp": 2799,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 345,
    "images": [
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our 12-Pan Earthy Nude Eyeshadow Palette, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v75-1",
        "size": "30ml",
        "price": 1399,
        "mrp": 1959,
        "inStock": true
      },
      {
        "id": "v75-2",
        "size": "50ml",
        "price": 1999,
        "mrp": 2799,
        "inStock": true
      }
    ],
    "stock": 65,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-76",
    "slug": "long-wear-volumizing-feather-mascara",
    "name": "Long-Wear Volumizing Feather Mascara",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 999,
    "mrp": 1399,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 352,
    "images": [
      "https://images.unsplash.com/photo-1599733589046-10c005739ef9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Long-Wear Volumizing Feather Mascara, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v76-1",
        "size": "30ml",
        "price": 699,
        "mrp": 979,
        "inStock": true
      },
      {
        "id": "v76-2",
        "size": "50ml",
        "price": 999,
        "mrp": 1399,
        "inStock": true
      }
    ],
    "stock": 68,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-77",
    "slug": "soft-focus-luminous-bb-cream-glow",
    "name": "Soft Focus Luminous BB Cream Glow",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 1299,
    "mrp": 1799,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 359,
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Soft Focus Luminous BB Cream Glow, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v77-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v77-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 71,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": false,
    "newLaunch": true,
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-78",
    "slug": "shimmering-champagne-liquid-highlighter",
    "name": "Shimmering Champagne Liquid Highlighter",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "skincare",
    "subcategory": "Lip Care",
    "price": 1099,
    "mrp": 1599,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 366,
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Shimmering Champagne Liquid Highlighter, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v78-1",
        "size": "30ml",
        "price": 769,
        "mrp": 1119,
        "inStock": true
      },
      {
        "id": "v78-2",
        "size": "50ml",
        "price": 1099,
        "mrp": 1599,
        "inStock": true
      }
    ],
    "stock": 74,
    "featured": false,
    "bestSeller": true,
    "newLaunch": false,
    "skinType": "All Skin Types"
  },
  {
    "id": "prod-79",
    "slug": "biotin-caffeine-volumizing-shampoo",
    "name": "Biotin & Caffeine Volumizing Shampoo",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 799,
    "mrp": 1199,
    "discount": 33,
    "rating": 4.9,
    "reviewCount": 373,
    "images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Biotin & Caffeine Volumizing Shampoo, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v79-1",
        "size": "30ml",
        "price": 559,
        "mrp": 839,
        "inStock": true
      },
      {
        "id": "v79-2",
        "size": "50ml",
        "price": 799,
        "mrp": 1199,
        "inStock": true
      }
    ],
    "stock": 77,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-80",
    "slug": "ultra-nourishing-macadamia-hair-conditioner",
    "name": "Ultra-Nourishing Macadamia Hair Conditioner",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 849,
    "mrp": 1199,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 380,
    "images": [
      "https://images.unsplash.com/photo-1585232350744-974fc9804d65?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Ultra-Nourishing Macadamia Hair Conditioner, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v80-1",
        "size": "30ml",
        "price": 594,
        "mrp": 839,
        "inStock": true
      },
      {
        "id": "v80-2",
        "size": "50ml",
        "price": 849,
        "mrp": 1199,
        "inStock": true
      }
    ],
    "stock": 80,
    "badge": "BESTSELLER",
    "featured": true,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-81",
    "slug": "rice-water-strengthening-hair-tonic",
    "name": "Rice Water Strengthening Hair Tonic",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 389,
    "mrp": 599,
    "discount": 35,
    "rating": 4.7,
    "reviewCount": 387,
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Rice Water Strengthening Hair Tonic, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v81-1",
        "size": "30ml",
        "price": 389,
        "mrp": 599,
        "inStock": true
      },
      {
        "id": "v81-2",
        "size": "50ml",
        "price": 999,
        "mrp": 1399,
        "inStock": true
      }
    ],
    "stock": 83,
    "badge": "AWARD WINNER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-82",
    "slug": "botanical-leave-in-detangling-mist",
    "name": "Botanical Leave-In Detangling Mist",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 749,
    "mrp": 1099,
    "discount": 32,
    "rating": 4.8,
    "reviewCount": 394,
    "images": [
      "https://images.unsplash.com/photo-1608571423539-e951b9b3871e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Botanical Leave-In Detangling Mist, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v82-1",
        "size": "30ml",
        "price": 524,
        "mrp": 769,
        "inStock": true
      },
      {
        "id": "v82-2",
        "size": "50ml",
        "price": 749,
        "mrp": 1099,
        "inStock": true
      }
    ],
    "stock": 86,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-83",
    "slug": "anti-dandruff-tea-tree-zinc-clarifier",
    "name": "Anti-Dandruff Tea Tree & Zinc Clarifier",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.9,
    "reviewCount": 401,
    "images": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585232350744-974fc9804d65?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Anti-Dandruff Tea Tree & Zinc Clarifier, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v83-1",
        "size": "30ml",
        "price": 629,
        "mrp": 909,
        "inStock": true
      },
      {
        "id": "v83-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 89,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Acne & Blemishes"
  },
  {
    "id": "prod-84",
    "slug": "heat-protectant-argan-silk-spray",
    "name": "Heat Protectant Argan Silk Spray",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 949,
    "mrp": 1349,
    "discount": 30,
    "rating": 4.6,
    "reviewCount": 408,
    "images": [
      "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Heat Protectant Argan Silk Spray, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v84-1",
        "size": "30ml",
        "price": 664,
        "mrp": 944,
        "inStock": true
      },
      {
        "id": "v84-2",
        "size": "50ml",
        "price": 949,
        "mrp": 1349,
        "inStock": true
      }
    ],
    "stock": 42,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": true,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-85",
    "slug": "scalp-detox-sea-salt-scrub",
    "name": "Scalp Detox Sea Salt Scrub",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 1099,
    "mrp": 1599,
    "discount": 31,
    "rating": 4.7,
    "reviewCount": 415,
    "images": [
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Scalp Detox Sea Salt Scrub, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v85-1",
        "size": "30ml",
        "price": 769,
        "mrp": 1119,
        "inStock": true
      },
      {
        "id": "v85-2",
        "size": "50ml",
        "price": 1099,
        "mrp": 1599,
        "inStock": true
      }
    ],
    "stock": 45,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-86",
    "slug": "castor-black-seed-edge-growth-oil",
    "name": "Castor & Black Seed Edge Growth Oil",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "haircare",
    "subcategory": "Hair Care",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 122,
    "images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Castor & Black Seed Edge Growth Oil, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "200ml",
    "variants": [
      {
        "id": "v86-1",
        "size": "30ml",
        "price": 629,
        "mrp": 909,
        "inStock": true
      },
      {
        "id": "v86-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 48,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false,
    "concern": "Hair Fall & Density"
  },
  {
    "id": "prod-87",
    "slug": "sandalwood-amber-glow-dry-body-oil",
    "name": "Sandalwood & Amber Glow Dry Body Oil",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Lotion",
    "price": 2499,
    "mrp": 3499,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 129,
    "images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Sandalwood & Amber Glow Dry Body Oil, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v87-1",
        "size": "30ml",
        "price": 979,
        "mrp": 1399,
        "inStock": true
      },
      {
        "id": "v87-2",
        "size": "50ml",
        "price": 1399,
        "mrp": 1999,
        "inStock": true
      }
    ],
    "stock": 51,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-88",
    "slug": "ceramide-intense-smoothing-body-lotion",
    "name": "Ceramide Intense Smoothing Body Lotion",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Lotion",
    "price": 1499,
    "mrp": 2099,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 136,
    "images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Ceramide Intense Smoothing Body Lotion, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v88-1",
        "size": "30ml",
        "price": 629,
        "mrp": 909,
        "inStock": true
      },
      {
        "id": "v88-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 54,
    "featured": true,
    "bestSeller": false,
    "newLaunch": true
  },
  {
    "id": "prod-89",
    "slug": "shea-butter-jojoba-hand-cream",
    "name": "Shea Butter & Jojoba Hand Cream",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Lotion",
    "price": 423,
    "mrp": 669,
    "discount": 37,
    "rating": 4.7,
    "reviewCount": 143,
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Shea Butter & Jojoba Hand Cream, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v89-1",
        "size": "30ml",
        "price": 423,
        "mrp": 669,
        "inStock": true
      },
      {
        "id": "v89-2",
        "size": "50ml",
        "price": 599,
        "mrp": 899,
        "inStock": true
      }
    ],
    "stock": 57,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-90",
    "slug": "moroccan-coffee-energizing-body-scrub",
    "name": "Moroccan Coffee Energizing Body Scrub",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Wash",
    "price": 949,
    "mrp": 1399,
    "discount": 32,
    "rating": 4.8,
    "reviewCount": 150,
    "images": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Moroccan Coffee Energizing Body Scrub, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v90-1",
        "size": "30ml",
        "price": 664,
        "mrp": 979,
        "inStock": true
      },
      {
        "id": "v90-2",
        "size": "50ml",
        "price": 949,
        "mrp": 1399,
        "inStock": true
      }
    ],
    "stock": 60,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": true,
    "newLaunch": false
  },
  {
    "id": "prod-91",
    "slug": "white-jasmine-bergamot-luxury-bath-soak",
    "name": "White Jasmine & Bergamot Luxury Bath Soak",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Wash",
    "price": 1199,
    "mrp": 1699,
    "discount": 29,
    "rating": 4.9,
    "reviewCount": 157,
    "images": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608068811588-3a67006b7489?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our White Jasmine & Bergamot Luxury Bath Soak, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v91-1",
        "size": "30ml",
        "price": 839,
        "mrp": 1189,
        "inStock": true
      },
      {
        "id": "v91-2",
        "size": "50ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 63,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-92",
    "slug": "eucalyptus-mint-refreshing-body-wash",
    "name": "Eucalyptus & Mint Refreshing Body Wash",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Wash",
    "price": 749,
    "mrp": 1099,
    "discount": 32,
    "rating": 4.6,
    "reviewCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Eucalyptus & Mint Refreshing Body Wash, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v92-1",
        "size": "30ml",
        "price": 524,
        "mrp": 769,
        "inStock": true
      },
      {
        "id": "v92-2",
        "size": "50ml",
        "price": 749,
        "mrp": 1099,
        "inStock": true
      }
    ],
    "stock": 66,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-93",
    "slug": "brazilian-cupuacu-radiance-body-souffl",
    "name": "Brazilian Cupuacu Radiance Body Soufflé",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Lotion",
    "price": 1299,
    "mrp": 1799,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 171,
    "images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Brazilian Cupuacu Radiance Body Soufflé, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v93-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v93-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 69,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-94",
    "slug": "vanilla-bean-sweet-almond-body-glaze",
    "name": "Vanilla Bean & Sweet Almond Body Glaze",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "bodycare",
    "subcategory": "Body Lotion",
    "price": 1099,
    "mrp": 1599,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 178,
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Vanilla Bean & Sweet Almond Body Glaze, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v94-1",
        "size": "30ml",
        "price": 769,
        "mrp": 1119,
        "inStock": true
      },
      {
        "id": "v94-2",
        "size": "50ml",
        "price": 1099,
        "mrp": 1599,
        "inStock": true
      }
    ],
    "stock": 72,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-95",
    "slug": "activated-charcoal-deep-purifying-face-wash",
    "name": "Activated Charcoal Deep Purifying Face Wash",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 699,
    "mrp": 999,
    "discount": 30,
    "rating": 4.9,
    "reviewCount": 185,
    "images": [
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585232350744-974fc9804d65?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Activated Charcoal Deep Purifying Face Wash, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v95-1",
        "size": "30ml",
        "price": 489,
        "mrp": 699,
        "inStock": true
      },
      {
        "id": "v95-2",
        "size": "50ml",
        "price": 699,
        "mrp": 999,
        "inStock": true
      }
    ],
    "stock": 75,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-96",
    "slug": "sandalwood-amber-masculine-cologne",
    "name": "Sandalwood & Amber Masculine Cologne",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 2499,
    "mrp": 3499,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 192,
    "images": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Sandalwood & Amber Masculine Cologne, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v96-1",
        "size": "30ml",
        "price": 434,
        "mrp": 599,
        "inStock": true
      },
      {
        "id": "v96-2",
        "size": "50ml",
        "price": 2799,
        "mrp": 3899,
        "inStock": true
      }
    ],
    "stock": 78,
    "featured": true,
    "bestSeller": true,
    "newLaunch": false
  },
  {
    "id": "prod-97",
    "slug": "matte-finish-clay-hair-pomade",
    "name": "Matte Finish Clay Hair Pomade",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 1199,
    "mrp": 1699,
    "discount": 29,
    "rating": 4.7,
    "reviewCount": 199,
    "images": [
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Matte Finish Clay Hair Pomade, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v97-1",
        "size": "30ml",
        "price": 594,
        "mrp": 839,
        "inStock": true
      },
      {
        "id": "v97-2",
        "size": "50ml",
        "price": 849,
        "mrp": 1199,
        "inStock": true
      }
    ],
    "stock": 81,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-98",
    "slug": "hydrating-beard-face-daily-moisturiser",
    "name": "Hydrating Beard & Face Daily Moisturiser",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 206,
    "images": [
      "https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Hydrating Beard & Face Daily Moisturiser, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v98-1",
        "size": "30ml",
        "price": 629,
        "mrp": 909,
        "inStock": true
      },
      {
        "id": "v98-2",
        "size": "50ml",
        "price": 899,
        "mrp": 1299,
        "inStock": true
      }
    ],
    "stock": 84,
    "badge": "TRENDING",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-99",
    "slug": "caffeine-anti-fatigue-eye-roller-for-men",
    "name": "Caffeine Anti-Fatigue Eye Roller for Men",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 799,
    "mrp": 1099,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 213,
    "images": [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Caffeine Anti-Fatigue Eye Roller for Men, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v99-1",
        "size": "30ml",
        "price": 559,
        "mrp": 769,
        "inStock": true
      },
      {
        "id": "v99-2",
        "size": "50ml",
        "price": 799,
        "mrp": 1099,
        "inStock": true
      }
    ],
    "stock": 87,
    "badge": "AWARD WINNER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": true
  },
  {
    "id": "prod-100",
    "slug": "refreshing-mineral-rich-shaving-cream",
    "name": "Refreshing Mineral Rich Shaving Cream",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 649,
    "mrp": 899,
    "discount": 28,
    "rating": 4.6,
    "reviewCount": 220,
    "images": [
      "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423539-e951b9b3871e?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Refreshing Mineral Rich Shaving Cream, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v100-1",
        "size": "30ml",
        "price": 454,
        "mrp": 629,
        "inStock": true
      },
      {
        "id": "v100-2",
        "size": "50ml",
        "price": 649,
        "mrp": 899,
        "inStock": true
      }
    ],
    "stock": 40,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-101",
    "slug": "tobacco-bourbon-solid-pocket-cologne",
    "name": "Tobacco & Bourbon Solid Pocket Cologne",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 2199,
    "mrp": 2999,
    "discount": 27,
    "rating": 4.7,
    "reviewCount": 227,
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Tobacco & Bourbon Solid Pocket Cologne, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v101-1",
        "size": "30ml",
        "price": 839,
        "mrp": 1189,
        "inStock": true
      },
      {
        "id": "v101-2",
        "size": "50ml",
        "price": 1199,
        "mrp": 1699,
        "inStock": true
      }
    ],
    "stock": 43,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-102",
    "slug": "tea-tree-anti-bump-post-shave-tonic",
    "name": "Tea Tree Anti-Bump Post Shave Tonic",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "men",
    "subcategory": "Men",
    "price": 479,
    "mrp": 699,
    "discount": 31,
    "rating": 4.8,
    "reviewCount": 234,
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1646376235675-e74224635744?auto=format&fit=crop&w=800&q=85"
    ],
    "description": "Experience the exceptional craftsmanship of our Tea Tree Anti-Bump Post Shave Tonic, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v102-1",
        "size": "30ml",
        "price": 524,
        "mrp": 734,
        "inStock": true
      },
      {
        "id": "v102-2",
        "size": "50ml",
        "price": 749,
        "mrp": 1049,
        "inStock": true
      }
    ],
    "stock": 46,
    "featured": false,
    "bestSeller": true,
    "newLaunch": false
  },
  {
    "id": "prod-103",
    "slug": "scented-soy-candle-smoked-vanilla-tonka",
    "name": "Scented Soy Candle - Smoked Vanilla & Tonka",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 1299,
    "mrp": 1799,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 241,
    "images": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Scented Soy Candle - Smoked Vanilla & Tonka, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v103-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v103-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 49,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-104",
    "slug": "the-gentleman-s-luxury-grooming-trunk",
    "name": "The Gentleman's Luxury Grooming Trunk",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 3499,
    "mrp": 4899,
    "discount": 29,
    "rating": 4.6,
    "reviewCount": 248,
    "images": [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our The Gentleman's Luxury Grooming Trunk, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v104-1",
        "size": "30ml",
        "price": 2449,
        "mrp": 3429,
        "inStock": true
      },
      {
        "id": "v104-2",
        "size": "50ml",
        "price": 3499,
        "mrp": 4899,
        "inStock": true
      }
    ],
    "stock": 52,
    "featured": true,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-105",
    "slug": "artisanal-attar-oil-collector-coffret",
    "name": "Artisanal Attar Oil Collector Coffret",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 2899,
    "mrp": 3999,
    "discount": 28,
    "rating": 4.7,
    "reviewCount": 255,
    "images": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Artisanal Attar Oil Collector Coffret, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v105-1",
        "size": "30ml",
        "price": 2029,
        "mrp": 2799,
        "inStock": true
      },
      {
        "id": "v105-2",
        "size": "50ml",
        "price": 2899,
        "mrp": 3999,
        "inStock": true
      }
    ],
    "stock": 55,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-106",
    "slug": "scented-soy-candle-rose-petals-santal",
    "name": "Scented Soy Candle - Rose Petals & Santal",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 3499,
    "mrp": 4999,
    "discount": 30,
    "rating": 4.8,
    "reviewCount": 262,
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Scented Soy Candle - Rose Petals & Santal, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v106-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v106-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 58,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-107",
    "slug": "silk-sleep-rosewater-night-gifting-set",
    "name": "Silk Sleep & Rosewater Night Gifting Set",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 2199,
    "mrp": 2999,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 269,
    "images": [
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Silk Sleep & Rosewater Night Gifting Set, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v107-1",
        "size": "30ml",
        "price": 1539,
        "mrp": 2099,
        "inStock": true
      },
      {
        "id": "v107-2",
        "size": "50ml",
        "price": 2199,
        "mrp": 2999,
        "inStock": true
      }
    ],
    "stock": 61,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-108",
    "slug": "scented-soy-candle-citrus-bergamot-cedar",
    "name": "Scented Soy Candle - Citrus Bergamot & Cedar",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 489,
    "mrp": 749,
    "discount": 35,
    "rating": 4.6,
    "reviewCount": 276,
    "images": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Scented Soy Candle - Citrus Bergamot & Cedar, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v108-1",
        "size": "30ml",
        "price": 909,
        "mrp": 1259,
        "inStock": true
      },
      {
        "id": "v108-2",
        "size": "50ml",
        "price": 1299,
        "mrp": 1799,
        "inStock": true
      }
    ],
    "stock": 64,
    "badge": "AWARD WINNER",
    "featured": false,
    "bestSeller": true,
    "newLaunch": false
  },
  {
    "id": "prod-109",
    "slug": "golden-glow-festive-beauty-hamper",
    "name": "Golden Glow Festive Beauty Hamper",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 899,
    "mrp": 1299,
    "discount": 31,
    "rating": 4.7,
    "reviewCount": 283,
    "images": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85",
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our Golden Glow Festive Beauty Hamper, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v109-1",
        "size": "30ml",
        "price": 2799,
        "mrp": 3849,
        "inStock": true
      },
      {
        "id": "v109-2",
        "size": "50ml",
        "price": 3999,
        "mrp": 5499,
        "inStock": true
      }
    ],
    "stock": 67,
    "featured": false,
    "bestSeller": false,
    "newLaunch": false
  },
  {
    "id": "prod-110",
    "slug": "the-velora-signature-fragrance-wardrobe",
    "name": "The Velora Signature Fragrance Wardrobe",
    "subtitle": "Luxury Botanical Formulation with Active Ingredients",
    "category": "gifting",
    "subcategory": "Beauty Gift Sets",
    "price": 4499,
    "mrp": 5999,
    "discount": 25,
    "rating": 4.8,
    "reviewCount": 290,
    "images": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Experience the exceptional craftsmanship of our The Velora Signature Fragrance Wardrobe, combining pure active ingredients and botanical essences for transformative results.",
    "shortDescription": "Pure active botanicals and rich restorative formulation.",
    "ingredients": [
      "Aqua",
      "Botanical Extracts",
      "Tocopherol",
      "Essential Oils",
      "Sodium Hyaluronate"
    ],
    "benefits": [
      "Clinically proven efficacy",
      "Non-comedogenic & dermatologically tested",
      "100% Cruelty-Free"
    ],
    "howToUse": "Apply smoothly onto target areas daily as part of your beauty ritual.",
    "size": "100ml",
    "variants": [
      {
        "id": "v110-1",
        "size": "30ml",
        "price": 2099,
        "mrp": 2939,
        "inStock": true
      },
      {
        "id": "v110-2",
        "size": "50ml",
        "price": 2999,
        "mrp": 4199,
        "inStock": true
      }
    ],
    "stock": 70,
    "badge": "BESTSELLER",
    "featured": false,
    "bestSeller": false,
    "newLaunch": true
  }
];

export const products: Product[] = PRODUCTS;

export const COUPONS: Coupon[] = [
  {
    "code": "WELCOME10",
    "discountPercentage": 10,
    "minOrderValue": 499,
    "maxDiscount": 300,
    "description": "10% OFF on your first order above ₹499"
  },
  {
    "code": "BEAUTY15",
    "discountPercentage": 15,
    "minOrderValue": 999,
    "maxDiscount": 500,
    "description": "15% OFF on orders above ₹999"
  },
  {
    "code": "VELORA20",
    "discountPercentage": 20,
    "minOrderValue": 1999,
    "maxDiscount": 1000,
    "description": "20% OFF on luxury orders above ₹1,999"
  },
  {
    "code": "LUXE500",
    "discountPercentage": 25,
    "minOrderValue": 2499,
    "maxDiscount": 1500,
    "description": "Special 25% OFF on Gift Sets & Fragrances above ₹2,499"
  }
];
