// src/data/products.js
//
// Mock product catalog. In a real application this would come from
// an API (e.g. GET /api/products). Each product has a stable numeric
// `id` used as the React key and as the cart line-item identifier.

export const CATEGORIES = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home Decor',
  'Sports & Outdoors',
];

export const products = [
  {
    id: 1,
    title: 'Wireless Noise-Cancelling Headphones',
    category: 'Electronics',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviewCount: 2847,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
    description:
      'Industry-leading noise cancellation with 30-hour battery life and crystal-clear calls.',
  },
  {
    id: 2,
    title: 'Smart Fitness Watch with Heart Rate Monitor',
    category: 'Electronics',
    price: 89.5,
    originalPrice: 119.0,
    rating: 4.4,
    reviewCount: 1532,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    badge: 'Deal',
    description:
      'Track workouts, sleep, and heart rate with a vibrant always-on display.',
  },
  {
    id: 3,
    title: "Men's Classic Fit Denim Jacket",
    category: 'Fashion',
    price: 54.0,
    originalPrice: 74.0,
    rating: 4.3,
    reviewCount: 612,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
    badge: null,
    description:
      'A timeless denim jacket crafted from durable cotton with a relaxed, classic fit.',
  },
  {
    id: 4,
    title: "Women's Running Sneakers, Lightweight",
    category: 'Fashion',
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviewCount: 3290,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
    description:
      'Breathable mesh upper with responsive cushioning for everyday runs.',
  },
  {
    id: 5,
    title: 'Minimalist Ceramic Vase Set (3-Piece)',
    category: 'Home Decor',
    price: 38.0,
    originalPrice: 52.0,
    rating: 4.8,
    reviewCount: 487,
    image:
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80',
    badge: 'New',
    description:
      'Hand-finished ceramic vases that bring understated elegance to any shelf or table.',
  },
  {
    id: 6,
    title: 'Warm LED String Lights, 33ft',
    category: 'Home Decor',
    price: 19.99,
    originalPrice: 27.99,
    rating: 4.5,
    reviewCount: 5103,
    image:
      'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=600&q=80',
    badge: 'Deal',
    description:
      'Soft warm-white LED string lights, perfect for bedrooms, patios, and parties.',
  },
  {
    id: 7,
    title: 'Stainless Steel Insulated Water Bottle',
    category: 'Sports & Outdoors',
    price: 24.95,
    originalPrice: 32.0,
    rating: 4.6,
    reviewCount: 2210,
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    badge: null,
    description:
      'Keeps drinks cold for 24 hours or hot for 12. Leak-proof and BPA-free.',
  },
  {
    id: 8,
    title: '4K Ultra HD Smart Action Camera',
    category: 'Electronics',
    price: 149.0,
    originalPrice: 199.0,
    rating: 4.2,
    reviewCount: 894,
    image:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
    badge: 'Deal',
    description:
      'Capture stunning 4K footage with built-in stabilization and waterproof casing.',
  },
  {
    id: 9,
    title: 'Yoga Mat with Carrying Strap, Non-Slip',
    category: 'Sports & Outdoors',
    price: 27.99,
    originalPrice: 35.0,
    rating: 4.7,
    reviewCount: 1675,
    image:
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80',
    badge: null,
    description:
      'Extra-thick cushioning with a non-slip surface for yoga, pilates, and stretching.',
  },
];
