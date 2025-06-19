import React from 'react';
import ProductCard from '../components/ProductCard';
import macair13 from '../assets/mac/macairb.jpeg'
import macair13s from '../assets/mac/macair13s.jpeg'

const macbooksProduct = [
  {
    name: 'MacBook Air 13-inch',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: macair13,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: macair13s,
        storage: ['64GB', '128GB'],
      }
    ]
  },
  {
    name: 'MacBook Air 13-inch',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: macair13,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: macair13s,
        storage: ['64GB', '128GB'],
      }
    ]
  },
  {
    name: 'MacBook Air 13-inch',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: macair13,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: macair13s,
        storage: ['64GB', '128GB'],
      }
    ]
  },
  {
    name: 'MacBook Air 13-inch',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: macair13,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: macair13s,
        storage: ['64GB', '128GB'],
      }
    ]
  },
];

const MacBooksPage = () => {
  return (
    <div className="category-page">
      <h2>MacBooks Collection</h2>
      <div className="product-grid">
        {macbooksProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default MacBooksPage;
