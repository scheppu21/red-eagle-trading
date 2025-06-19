import React from 'react';
import ProductCard from '../components/ProductCard';
import samsung1 from '../assets/samsung/s24.jpeg'
import s24b from '../assets/samsung/s24black.jpeg'
import s24uw from '../assets/samsung/s24 ultra.jpeg'
import s24ub from '../assets/samsung/s24ub.jpeg'
import s23w from '../assets/samsung/s23w.jpeg'
import s23b from '../assets/samsung/s23b.jpeg'
import s23uw from '../assets/samsung/s23uw.jpeg'
import s23ub from '../assets/samsung/s23ub.jpeg'

const samsungProduct = [
  {
    name: 'samsung s24',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: s24b,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: samsung1,
        storage: ['64GB', '128GB'],
      }
    ]
  },
    {
    name: 'samsung s24 ultra',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: s24ub,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: s24uw,
        storage: ['64GB', '128GB'],
      }
    ]
  },
     {
    name: 'samsung s23',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: s23b,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: s23w,
        storage: ['64GB', '128GB'],
      }
    ]
  },
    
     {
    name: 'samsung s23 ultra',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: s23ub,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: s23uw,
        storage: ['64GB', '128GB'],
      }
    ]
  },
];

const SamsungPage = () => {
  return (
    <div className="category-page">
      <h2>Samsung Collection</h2>
      <div className="product-grid">
        {samsungProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default SamsungPage;
