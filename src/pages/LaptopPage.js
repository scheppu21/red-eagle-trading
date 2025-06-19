import React from 'react';
import ProductCard from '../components/ProductCard';
import hplaptop1 from '../assets/laptops/hplaptop1.jpeg'
import hplaptop2 from '../assets/laptops/hplaptop2.jpeg'
const laptopProduct = [
  {
    name: 'HP Laptop 15',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: hplaptop1,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: hplaptop2,
        storage: ['64GB', '128GB'],
      }
    ]
  },
    {
    name: 'HP Laptop 15',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: hplaptop1,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: hplaptop2,
        storage: ['64GB', '128GB'],
      }
    ]
  },
   {
    name: 'HP Laptop 15',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: hplaptop1,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: hplaptop2,
        storage: ['64GB', '128GB'],
      }
    ]
  },
   {
    name: 'HP Laptop 15',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: hplaptop1,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: hplaptop2,
        storage: ['64GB', '128GB'],
      }
    ]
  },
  // Add more products similarly...
];

const LaptopPage = () => {
  return (
    <div className="category-page">
      <h2>Laptop Collection</h2>
      <div className="product-grid">
        {laptopProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default LaptopPage;