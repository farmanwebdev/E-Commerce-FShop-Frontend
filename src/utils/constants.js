// Image URLs
export const HERO_URL = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop';
export const ABOUT_IMG_URL = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop';

// Product Categories
export const CATEGORIES = [
  'all',
  'Electronics',
  'Computers',
  'Phones',
  'Tablets',
  'Accessories'
];

// Product Brands
export const BRANDS = [
  'all',
  'Apple',
  'Samsung',
  'Sony',
  'LG',
  'Dell',
  'HP',
  'Lenovo',
  'Google',
  'Microsoft',
  'Huawei'
];

// Mock Products Data - Used when backend is not available
export const MOCK_PRODUCTS = [
  {
    _id: '1',
    name: 'MacBook Pro 14"',
    price: 1999,
    originalPrice: 2299,
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
    images: [
      { image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop' }
    ],
    category: 'Computers',
    brand: 'Apple',
    description: 'Powerful laptop with M3 Pro chip, perfect for professionals',
    stock: 15,
    rating: 4.8,
    featured: true,
    sku: 'MB14-PRO-001'
  },
  {
    _id: '2',
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1099,
    thumbnail: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop',
    images: [
      { image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop' }
    ],
    category: 'Phones',
    brand: 'Apple',
    description: 'Latest flagship phone with advanced camera system',
    stock: 30,
    rating: 4.9,
    featured: true,
    sku: 'IP15-PRO-001'
  },
  {
    _id: '3',
    name: 'Samsung Galaxy S24',
    price: 899,
    originalPrice: 999,
    thumbnail: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop',
    images: [
      { image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop' }
    ],
    category: 'Phones',
    brand: 'Samsung',
    description: 'Flagship Android phone with excellent display',
    stock: 25,
    rating: 4.7,
    featured: true,
    sku: 'SG24-001'
  },
  {
    _id: '4',
    name: 'Dell XPS 13',
    price: 1299,
    originalPrice: 1499,
    thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop',
    images: [
      { image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop' }
    ],
    category: 'Computers',
    brand: 'Dell',
    description: 'Ultra-portable laptop with stunning display',
    stock: 12,
    rating: 4.6,
    featured: true,
    sku: 'DELL-XPS13-001'
  },
  {
    _id: '5',
    name: 'Sony WH-1000XM5 Headphones',
    price: 399,
    originalPrice: 499,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop' }
    ],
    category: 'Accessories',
    brand: 'Sony',
    description: 'Premium wireless headphones with noise cancellation',
    stock: 40,
    rating: 4.8,
    featured: true,
    sku: 'SONY-WH1000XM5-001'
  },
  {
    _id: '6',
    name: 'iPad Pro 12.9"',
    price: 1099,
    originalPrice: 1199,
    thumbnail: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    images: [
      { image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop' }
    ],
    category: 'Tablets',
    brand: 'Apple',
    description: 'Professional-grade tablet with M2 chip',
    stock: 18,
    rating: 4.7,
    featured: true,
    sku: 'IPAD-PRO129-001'
  }
];
