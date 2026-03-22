export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  description: string;
  color: string;
  collection: string;
  images: string[];
  specifications: {
    doors: number;
    shelves: number;
    drawers?: number;
  };
  rating: number;
  reviewCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mallorca-white-shaker-36-42',
    name: 'Mallorca White Shaker — 36"W × 42"H Standard Wall Cabinet',
    subtitle: 'W3642',
    price: 525.55,
    description: 'A premium white shaker wall cabinet, 36 inches wide and 42 inches high. Features two doors and three adjustable shelves for versatile storage.',
    color: 'White',
    collection: 'MALLORCA',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-white-shaker-(2).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-white-shaker-(3).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-white-shaker.jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-SHAKER-SIZE--1.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/-1-9.jpg?w=1200&h=694'
    ],
    specifications: {
      doors: 2,
      shelves: 3
    },
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: 'shady-slim-oak-shaker-36-42',
    name: 'Shady Slim Oak Shaker — 36"W × 42"H Standard Wall Cabinet',
    subtitle: 'W3642',
    price: 600.92,
    description: 'Elegant slim oak shaker wall cabinet. 36 inches wide by 42 inches high with two doors and three adjustable shelves.',
    color: 'Slim Oak',
    collection: 'SHADY',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-oak-(2).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-oak-(3).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-oak.jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-SLIM-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/slim-natural-shaker.png?w=1126&h=674'
    ],
    specifications: {
      doors: 2,
      shelves: 3
    },
    rating: 4.8,
    reviewCount: 96
  },
  {
    id: 'shady-gray-slim-shaker-36-42',
    name: 'Shady Gray Slim Shaker — 36"W × 42"H Standard Wall Cabinet',
    subtitle: 'W3642',
    price: 661.47,
    description: 'Modern gray slim shaker wall cabinet. 36 inches wide and 42 inches high, featuring two doors and three adjustable shelves.',
    color: 'Gray Slim',
    collection: 'SHADY',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-gray-slim-(2).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-gray-slim-(3).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-gray-slim.jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-SLIM-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/slim-gray-shaker.jpg?w=5120&h=3412'
    ],
    specifications: {
      doors: 2,
      shelves: 3
    },
    rating: 4.7,
    reviewCount: 82
  },
  {
    id: 'mallorca-white-shaker-30-42',
    name: 'Mallorca White Shaker — 30"W × 42"H Standard Wall Cabinet',
    subtitle: 'W3042',
    price: 509.25,
    description: 'Classic white shaker wall cabinet, 30 inches wide and 42 inches high. Includes two doors and three adjustable shelves.',
    color: 'White',
    collection: 'MALLORCA',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/W3042-white-shaker-(2).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3042-white-shaker-(3).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3042-white-shaker.jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3042-SHAKER-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/-1-9.jpg?w=1200&h=694'
    ],
    specifications: {
      doors: 2,
      shelves: 3
    },
    rating: 4.9,
    reviewCount: 110
  },
  {
    id: 'mallorca-dolphin-gray-shaker-36-42',
    name: 'Mallorca Dolphin Gray Shaker — 36"W × 42"H Standard Wall Cabinet',
    subtitle: 'W3642',
    price: 578.51,
    description: 'Sophisticated dolphin gray shaker wall cabinet. 36 inches wide by 42 inches high with two doors and three adjustable shelves.',
    color: 'Dolphin Gray',
    collection: 'MALLORCA',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-gray-shaker-(2).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-gray-shaker-(3).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-gray-shaker.jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-SHAKER-SIZE--1.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/-1(1).jpg?w=1800&h=1200'
    ],
    specifications: {
      doors: 2,
      shelves: 3
    },
    rating: 4.8,
    reviewCount: 75
  },
  {
    id: 'shady-slim-white-shaker-36-42',
    name: 'Shady Slim White Shaker — 36"W × 42"H Standard Wall Cabinet',
    subtitle: 'W3642',
    price: 600.92,
    description: 'Clean slim white shaker wall cabinet. 36 inches wide and 42 inches high, featuring two doors and three adjustable shelves.',
    color: 'Slim White',
    collection: 'SHADY',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-white-slim-(2).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-white-slim-(3).jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-white-slim.jpg?w=2000&h=2000',
      'https://img-va.myshopline.com/image/store/1736838390436/W3642-SLIM-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/slim-white-shaker.jpg?w=1200&h=716'
    ],
    specifications: {
      doors: 2,
      shelves: 3
    },
    rating: 4.9,
    reviewCount: 88
  },
  {
    id: 'mallorca-white-shaker-pantry-18-96',
    name: 'Mallorca White Shaker — 18"W × 96"H Tall Pantry Cabinet',
    subtitle: 'WP1896DB',
    price: 1445.42,
    description: 'Tall white shaker pantry cabinet, 18 inches wide and 96 inches high. Features one door, three adjustable shelves, and three drawers for maximum storage.',
    color: 'White',
    collection: 'MALLORCA',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-white-shaker-(2).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-white-shaker-(3).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-white-shaker.jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-SHAKER-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/-1-9.jpg?w=1200&h=694'
    ],
    specifications: {
      doors: 1,
      shelves: 3,
      drawers: 3
    },
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: 'shady-slim-oak-shaker-pantry-18-96',
    name: 'Shady Slim Oak Shaker — 18"W × 96"H Tall Pantry Cabinet',
    subtitle: 'WP1896DB',
    price: 1811.54,
    description: 'Premium slim oak shaker tall pantry cabinet. 18 inches wide by 96 inches high with one door, three adjustable shelves, and three drawers.',
    color: 'Slim Oak',
    collection: 'SHADY',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-oak-(3).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-oak.jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-oak-(2).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-SLIM-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/slim-natural-shaker.png?w=1126&h=674'
    ],
    specifications: {
      doors: 1,
      shelves: 3,
      drawers: 3
    },
    rating: 4.9,
    reviewCount: 132
  },
  {
    id: 'shady-gray-slim-shaker-pantry-18-96',
    name: 'Shady Gray Slim Shaker — 18"W × 96"H Tall Pantry Cabinet',
    subtitle: 'WP1896DB',
    price: 1819.71,
    description: 'Modern gray slim shaker tall pantry cabinet. 18 inches wide and 96 inches high, featuring one door, three adjustable shelves, and three drawers.',
    color: 'Gray Slim',
    collection: 'SHADY',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-gray-slim.jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-gray-slim-(2).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-gray-slim-(3).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-SLIM-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/slim-gray-shaker.jpg?w=5120&h=3412'
    ],
    specifications: {
      doors: 1,
      shelves: 3,
      drawers: 3
    },
    rating: 4.7,
    reviewCount: 64
  },
  {
    id: 'mallorca-dolphin-gray-shaker-pantry-18-96',
    name: 'Mallorca Dolphin Gray Shaker — 18"W × 96"H Tall Pantry Cabinet',
    subtitle: 'WP1896DB',
    price: 1579.26,
    description: 'Elegant dolphin gray shaker tall pantry cabinet. 18 inches wide by 96 inches high with one door, three adjustable shelves, and three drawers.',
    color: 'Dolphin Gray',
    collection: 'MALLORCA',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-gray-shaker.jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-gray-shaker-(3).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-gray-shaker-(2).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1896DB-SHAKER-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/-1(1).jpg?w=1800&h=1200'
    ],
    specifications: {
      doors: 1,
      shelves: 3,
      drawers: 3
    },
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: 'mallorca-white-shaker-pantry-18-90',
    name: 'Mallorca White Shaker — 18"W × 90"H Tall Pantry Cabinet',
    subtitle: 'WP1890DB',
    price: 1276.35,
    description: 'Tall white shaker pantry cabinet, 18 inches wide and 90 inches high. Features one door, three adjustable shelves, and three drawers.',
    color: 'White',
    collection: 'MALLORCA',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-white-shaker.jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-white-shaker-(3).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-white-shaker-(2).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-SHAKER-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/-1-9.jpg?w=1200&h=694'
    ],
    specifications: {
      doors: 1,
      shelves: 3,
      drawers: 3
    },
    rating: 4.9,
    reviewCount: 188
  },
  {
    id: 'shady-slim-oak-shaker-pantry-18-90',
    name: 'Shady Slim Oak Shaker — 18"W × 90"H Tall Pantry Cabinet',
    subtitle: 'WP1890DB',
    price: 1599.65,
    description: 'Premium slim oak shaker tall pantry cabinet. 18 inches wide by 90 inches high with one door, three adjustable shelves, and three drawers.',
    color: 'Slim Oak',
    collection: 'SHADY',
    images: [
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-oak-(3).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-oak.jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-oak-(2).jpg?w=1997&h=3420',
      'https://img-va.myshopline.com/image/store/1736838390436/WP1890DB-SLIM-SIZE.jpg?w=4284&h=4284',
      'https://img-va.myshopline.com/image/store/1736838390436/slim-natural-shaker.png?w=1126&h=674'
    ],
    specifications: {
      doors: 1,
      shelves: 3,
      drawers: 3
    },
    rating: 5.0,
    reviewCount: 142
  }
];
