import React from 'react';
import ProductCard from '../components/ProductCard';
import applewatchultra from '../assets/smartwatches/applewatchultra.jpeg'
import applewatcseries10 from '../assets/smartwatches/applewatchseries10.jpeg'
import applewatchseries9 from '../assets/smartwatches/applewatcheseries9.jpeg'
import swatch7 from '../assets/smartwatches/swatche7.jpeg'
import swatchultra from '../assets/smartwatches/swatchesultra.jpeg'
import swatch6 from '../assets/smartwatches/swatches6.jpeg'

const smartwatchesProduct = [
    {
    name: 'Apple Watch Ultra ',
    variants: [
      {
        
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image:applewatchultra,
        storage:[0,0]
    
      },
    
    ]
  },
      {
    name: 'Apple Watch series 10',
    variants: [
      {
        
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image:applewatcseries10,
         storage:[0,0]
    
      },
    
    ]
  },
    {
    name: 'Apple Watch Series 9',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: applewatchseries9,
        storage:[0,0]
    
      },
    
    ]
  },
];
 const samsungwatchesProduct=[
  {
    name: 'Samsung Galaxy Watch 7',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: swatch7,
        storage:[0,0]
    
      },
    
    ]
  },
      {
    name: 'Samsung Watch Ultra',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: swatchultra,
        storage:[0,0]
    
      },
    
    ]
  },
    {
    name: 'Samsung Watch 6',
    variants: [
      {
        color: 'black',
        price: 499,
        oldPrice: 3700,
        rating: 4.3,
        image: swatch6,
        storage:[0,0]
    
      },
    
    ]
  },

 ]   

const SmartwatchesPage = () => {
  return (
    <div className="category-page">
      <h2>Smart Watches Collection</h2>
      <h3 style={{color:'red'}}>iPhone Watches</h3>
      <div className="product-grid">
        {smartwatchesProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
       <h3 style={{color:'red'}}>Samsung Watches</h3>
      <div className="product-grid">
        {samsungwatchesProduct.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default SmartwatchesPage;
