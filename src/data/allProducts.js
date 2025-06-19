const allProducts = [
  // iPhones
  {
    id: 'iphone-x',
    category: 'iphone',
    name: 'Apple iPhone X',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-1.jpg',
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-2.jpg',
        storage: ['64GB', '128GB'],
      },
    ],
  },
  {
    id: 'iphone-15-pro',
    category: 'iphone',
    name: 'Apple iPhone 15 Pro',
    variants: [
      {
        color: 'graphite',
        price: 1199,
        oldPrice: 1250,
        rating: 4.8,
        image: 'https://example.com/iphone15pro-graphite.jpg',
        storage: ['128GB', '256GB', '512GB'],
      },
      {
        color: 'silver',
        price: 1199,
        oldPrice: 1250,
        rating: 4.7,
        image: 'https://example.com/iphone15pro-silver.jpg',
        storage: ['128GB', '256GB', '512GB'],
      },
    ],
  },

  // Samsung
  {
    id: 'samsung-galaxy-s23',
    category: 'samsung',
    name: 'Samsung Galaxy S23',
    variants: [
      {
        color: 'phantom-black',
        price: 799,
        oldPrice: 850,
        rating: 4.6,
        image: 'https://example.com/samsung-s23-black.jpg',
        storage: ['128GB', '256GB'],
      },
      {
        color: 'cream',
        price: 799,
        oldPrice: 850,
        rating: 4.5,
        image: 'https://example.com/samsung-s23-cream.jpg',
        storage: ['128GB', '256GB'],
      },
    ],
  },

  // MacBooks
  {
    id: 'macbook-pro-14',
    category: 'macbooks',
    name: 'MacBook Pro 14-inch',
    variants: [
      {
        color: 'space-gray',
        price: 1999,
        oldPrice: 2100,
        rating: 4.9,
        image: 'https://example.com/macbookpro14-spacegray.jpg',
        storage: ['512GB', '1TB'],
      },
      {
        color: 'silver',
        price: 1999,
        oldPrice: 2100,
        rating: 4.9,
        image: 'https://example.com/macbookpro14-silver.jpg',
        storage: ['512GB', '1TB'],
      },
    ],
  },

  // Add more products here following the same pattern
];

export default allProducts;