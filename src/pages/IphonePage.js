import React from 'react';
import ProductCard from '../components/ProductCard';
import iphone15promax from '../assets/iphones/iphone15pro max.jpeg'
import applex1 from '../assets/iphones/applex white.jpeg'
import applex2 from '../assets/iphones/applexblack.jpeg'
import iphone15pro1 from '../assets/iphones/15promaxblack.jpeg'
import iphone15pro2 from '../assets/iphones/15promaxwhite.jpeg'
import i14pro1 from '../assets/iphones/14problack.jpeg'
import i14pro2 from '../assets/iphones/14prowhite.jpeg'
import i131 from '../assets/iphones/13black.jpeg'
import i132 from '../assets/iphones/13white.jpeg'
const iphoneProduct = [
  {
    name: 'Apple iPhone X',
    variants: [
      {
        color: 'white',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: applex1,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'black',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: applex2,
        storage: ['64GB', '128GB'],
      }
    ]
  },
   {
    name: 'iPhone 15 Pro Max',
    variants: [
      {
        color: 'grey',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: iphone15promax,
        storage: ['256GB', '512GB'],
      },
      {
        color: 'Black',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: iphone15pro1,
        storage: ['256GB', '512GB'],
      },
      {
        color:'White Titanium',
        price: 529,
        oldPrice:3452,
        rating:3.3,
        image:iphone15pro2,
        storage: ['256GB', '512GB']
      }
    ]
  },
   {
    name: 'iPhone 14 Pro',
    variants: [
      {
        color: ' black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: i14pro1,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'silver',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: i14pro2,
        storage: ['64GB', '128GB'],
      }
    ]
  },
   {
    name: 'iPhone 13',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: i131,
        storage: ['64GB', '128GB'],
      },
      {
        color: 'white',
        price: 519,
        oldPrice: 3750,
        rating: 4.5,
        image: i132,
        storage: ['64GB', '128GB'],
      }
    ]
  }
  // Add more products similarly...
];

const IphonePage = () => {
  return (
    <div className="category-page">
      <h2>iPhone Collection</h2>
      <div className="product-grid">
        {iphoneProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default IphonePage;