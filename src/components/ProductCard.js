import React, { useState } from 'react';
import './ProductCard.css';
import ProductModal from './ProductModal';

const ProductCard = ({ product, onClick }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick(); // 🔁 Let parent (like IphonePage) control the modal
    } else {
      setShowModal(true); // 🔁 Default internal modal if no onClick passed
    }
  };

  return (
    <>
      <div className="fancy-card" onClick={handleCardClick}>
        <div className="sale-badge">On Sale</div>

        <div className="product-image">
          <img src={selectedVariant.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="price">
            <span className="current">Dhs. {selectedVariant.price}</span>
            {selectedVariant.oldPrice && (
              <span className="old">Dhs. {selectedVariant.oldPrice}</span>
            )}
          </div>

          <div className="colors">
            {product.variants.map((variant, i) => (
              <span
                key={i}
                className={`color-dot ${selectedVariant.color === variant.color ? 'active' : ''}`}
                style={{ backgroundColor: variant.color }}
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ prevent modal on color switch
                  setSelectedVariant(variant);
                }}
              ></span>
            ))}
          </div>

          <div className="rating">⭐ {selectedVariant.rating}</div>
        </div>

        <button
          className="quick-add"
          onClick={(e) => {
            e.stopPropagation(); // ⛔ prevent card click from firing
            setShowModal(true);
          }}
        >
          Quick Add
        </button>
      </div>

      {showModal && (
        <ProductModal
          product={product}
          variant={selectedVariant}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;