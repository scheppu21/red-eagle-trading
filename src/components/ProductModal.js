import React, { useState, useEffect, useRef } from 'react';
import './ProductModal.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ product, variant, onClose }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [activeVariant, setActiveVariant] = useState(variant);
  const [selectedStorage, setSelectedStorage] = useState(variant.storage[0]);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-overlay fade-in">
      <div className="product-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="modal-image">
          <img src={activeVariant.image} alt={product.name} />
        </div>

        <div className="modal-info">
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> Dhs. {activeVariant.price}</p>
          {activeVariant.oldPrice && (
            <p><strong>Old Price:</strong> <s>Dhs. {activeVariant.oldPrice}</s></p>
          )}
          <p><strong>Rating:</strong> ⭐ {activeVariant.rating}</p>

          {/* Color Switcher */}
          <div className="modal-colors">
            <strong>Color:</strong>
            {product.variants.map((v, i) => (
              <span
                key={i}
                className={`color-dot ${v.color === activeVariant.color ? 'active' : ''}`}
                style={{ backgroundColor: v.color }}
                onClick={() => {
                  setActiveVariant(v);
                  setSelectedStorage(v.storage[0]);
                }}
              />
            ))}
          </div>

          {/* Storage Switcher */}
          <div className="modal-storage">
            <strong>Storage:</strong>
            {activeVariant.storage.map((gb, i) => (
              <button
                key={i}
                className={`storage-btn ${selectedStorage === gb ? 'selected' : ''}`}
                onClick={() => setSelectedStorage(gb)}
              >
                {gb}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='modal-actions'>
            <button
              className='add-cart'
              onClick={() => {
                addToCart(product, activeVariant, selectedStorage);
                onClose();
              }}>
              Add To Cart
            </button>
            <button
              className="buy-now"
              onClick={() => {
                const item = {
                  id: `${product.name}-${activeVariant.color}-${selectedStorage}`,
                  name: product.name,
                  price: activeVariant.price,
                  color: activeVariant.color,
                  storage: selectedStorage,
                  image: activeVariant.image,
                  quantity: 1
                };
                navigate('/checkout', { state: { item } });
                onClose();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;