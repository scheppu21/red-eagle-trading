import React from 'react';
import ProductCard from '../components/ProductCard';

const accessoriesProduct = [
  {
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
      }
    ]
  },
    {
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
      }
    ]
  },
    {
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
      }
    ]
  },
    {
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
      }
    ]
  },
    {
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
      }
    ]
  },
];

const AccessoriesPage = () => {
  return (
    <div className="category-page">
      <h2>Accessories Collection</h2>
      <div className="product-grid">
        {accessoriesProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
