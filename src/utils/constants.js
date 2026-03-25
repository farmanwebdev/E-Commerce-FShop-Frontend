export const HERO_URL = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop";

export const ABOUT_IMG_URL = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop";

export const CATEGORIES = [
  'all',
  'Electronics',
  'Computers',
  'Phones',
  'Tablets',
  'Accessories'
];

export const BRANDS = [
  'all',
  'Sony',
  'Apple',
  'Samsung',
  'Dell',
  'Google',
  'Lenovo'
];

export const MOCK_PRODUCTS = [
  {
    name: "Sony WH-1000XM5 Wireless Headphones",
    description: "Premium noise-canceling wireless headphones with industry-leading sound quality, 30-hour battery life, and seamless multi-device connectivity. Perfect for music lovers and professionals.",
    price: 399.99,
    originalPrice: 499.99,
    category: "Electronics",
    subcategory: "Headphones",
    stock: 25,
    colors: ["Black", "Silver", "Blue"],
    sizes: [],
    tags: ["headphones", "wireless", "noise-canceling", "premium"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 245,
    featured: true,
    active: true
  },
  {
    name: "Apple MacBook Pro 16\" M3 Max",
    description: "Powerful 16-inch MacBook Pro with M3 Max chip, stunning Liquid Retina display, and all-day battery life. Ideal for professionals, developers, and content creators.",
    price: 3499.99,
    originalPrice: 3999.99,
    category: "Computers",
    subcategory: "Laptops",
    stock: 10,
    colors: ["Space Gray", "Silver"],
    sizes: [],
    tags: ["laptop", "macbook", "pro", "powerful", "professional"],
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 512,
    featured: true,
    active: true
  },
  {
    name: "iPhone 15 Pro Max",
    description: "Latest flagship iPhone with advanced camera system, A17 Pro chip, titanium design, and always-on display. Experience innovation in your hands.",
    price: 1199.99,
    originalPrice: 1299.99,
    category: "Phones",
    subcategory: "Smartphones",
    stock: 50,
    colors: ["Black", "White", "Gold", "Deep Purple"],
    sizes: [],
    tags: ["iphone", "smartphone", "flagship", "camera", "5g"],
    images: [
      "https://images.unsplash.com/photo-1592286927505-1fed5018acc5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592286927505-1fed5018acc5?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1592286927505-1fed5018acc5?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 1023,
    featured: true,
    active: true
  },
  {
    name: "Samsung Galaxy Tab S9 Ultra",
    description: "Premium 14.6-inch tablet with 120Hz display, S Pen included, and powerful Snapdragon 8 Gen 2 processor. Perfect for productivity and entertainment.",
    price: 1299.99,
    originalPrice: 1499.99,
    category: "Tablets",
    subcategory: "Large Tablets",
    stock: 15,
    colors: ["Graphite", "Silver", "Beige"],
    sizes: [],
    tags: ["tablet", "samsung", "large", "display", "spen"],
    images: [
      "https://images.unsplash.com/photo-1561154464-8a86e4e97cfd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1561154464-8a86e4e97cfd?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1561154464-8a86e4e97cfd?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 389,
    featured: false,
    active: true
  },
  {
    name: "Dell XPS 15 Laptop",
    description: "Ultra-slim 15.6-inch laptop with Intel Core i9, RTX 4060, stunning InfinityEdge display, and premium build quality. Designed for power users.",
    price: 2499.99,
    originalPrice: 2799.99,
    category: "Computers",
    subcategory: "Laptops",
    stock: 12,
    colors: ["Silver", "Graphite"],
    sizes: [],
    tags: ["laptop", "dell", "xps", "powerful", "display"],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 456,
    featured: false,
    active: true
  },
  {
    name: "Google Pixel 8 Pro",
    description: "Google's flagship smartphone with advanced AI-powered camera, Tensor G3 chip, and pure Android experience. Capture moments like never before.",
    price: 999.99,
    originalPrice: 1099.99,
    category: "Phones",
    subcategory: "Smartphones",
    stock: 35,
    colors: ["Obsidian", "Porcelain", "Bay"],
    sizes: [],
    tags: ["google", "pixel", "smartphone", "ai", "camera"],
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 678,
    featured: false,
    active: true
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    description: "Premium true wireless earbuds with active noise cancellation, hi-fi sound, and seamless Galaxy device integration. Compact and powerful.",
    price: 229.99,
    originalPrice: 299.99,
    category: "Accessories",
    subcategory: "Earbuds",
    stock: 40,
    colors: ["Graphite", "Silver", "Lavender", "Green"],
    sizes: [],
    tags: ["earbuds", "wireless", "anc", "samsung", "audio"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 523,
    featured: false,
    active: true
  },
  {
    name: "iPad Air 11-inch",
    description: "Incredibly versatile 11-inch iPad with M1 chip, stunning Liquid Retina display, and Apple Pencil support. Perfect for creativity and productivity.",
    price: 799.99,
    originalPrice: 899.99,
    category: "Tablets",
    subcategory: "Medium Tablets",
    stock: 20,
    colors: ["Space Gray", "Silver", "Blue", "Purple", "Starlight"],
    sizes: [],
    tags: ["ipad", "air", "apple", "m1", "display"],
    images: [
      "https://images.unsplash.com/photo-1561154464-8a86e4e97cfd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1561154464-8a86e4e97cfd?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1561154464-8a86e4e97cfd?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 401,
    featured: false,
    active: true
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Ultra-thin business laptop with Intel Core i7, long battery life, and exceptional durability. Built for professionals on the move.",
    price: 1699.99,
    originalPrice: 1899.99,
    category: "Computers",
    subcategory: "Laptops",
    stock: 18,
    colors: ["Black"],
    sizes: [],
    tags: ["laptop", "lenovo", "thinkpad", "business", "portable"],
    images: [
      "https://images.unsplash.com/photo-1588872657840-790ff3bde172?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1588872657840-790ff3bde172?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1588872657840-790ff3bde172?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 334,
    featured: false,
    active: true
  },
  {
    name: "Samsung 55\" Smart TV QLED",
    description: "4K QLED television with quantum dot technology, AI upscaling, and smart TV features. Experience cinema-quality entertainment at home.",
    price: 1299.99,
    originalPrice: 1499.99,
    category: "Electronics",
    subcategory: "Televisions",
    stock: 8,
    colors: ["Black"],
    sizes: ["55 inch"],
    tags: ["tv", "qled", "4k", "smart", "samsung"],
    images: [
      "https://images.unsplash.com/photo-1593642532400-2682a8a6b9f8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682a8a6b9f8?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1593642532400-2682a8a6b9f8?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 287,
    featured: false,
    active: true
  },
  {
    name: "Samsung Galaxy Watch5 Pro",
    description: "Premium smartwatch with AMOLED display, health tracking, GPS, and weeks of battery life. Stay connected and healthy.",
    price: 429.99,
    originalPrice: 499.99,
    category: "Accessories",
    subcategory: "Smartwatches",
    stock: 30,
    colors: ["Black", "Silver", "Green", "Red"],
    sizes: ["40mm", "44mm"],
    tags: ["smartwatch", "samsung", "health", "tracking", "fitness"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
    ],
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 412,
    featured: false,
    active: true
  }
];
