import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StripePayment.css';

const StripePayment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { totalCost } = state || {};

  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!cardDetails.cardName || !cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv) {
      alert('⚠️ Please fill in all card details');
      return;
    }
    alert('✅ Payment Successful via Stripe!');
    navigate('/');
  };

  return (
    <div className="stripe-payment">
      <h2>Pay with Card</h2>
      <p><strong>Total:</strong> AED {totalCost?.toFixed(2) || 0}</p>

      <form className="stripe-form" onSubmit={handlePayment}>
        <input
          type="text"
          name="cardName"
          placeholder="Cardholder Name"
          value={cardDetails.cardName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          required
        />

        <div className="row">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={cardDetails.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default StripePayment;