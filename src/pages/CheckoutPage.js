import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { UserContext } from '../context/UseContext';
import { useCart } from '../context/CartContext';
import emailjs from 'emailjs-com';
import './CheckoutPage.css';

const countryData = {
  'United Arab Emirates': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'],
  India: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi'],
  'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca'],
  'United Kingdom': ['London', 'Manchester', 'Birmingham'],
  'United States': ['California', 'New York', 'Texas'],
};

const CheckoutPage = () => {
  const { currentUser } = useContext(UserContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const item = state?.item;
  const items = state?.items || (item ? [item] : []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: 'United Arab Emirates',
    city: '',
    phone: '',
    address: '',
  });

  const [paymentMode, setPaymentMode] = useState('cod');
  const [cities, setCities] = useState(countryData['United Arab Emirates']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser?.email) {
      setForm((prev) => ({ ...prev, email: currentUser.email }));
    }
  }, [currentUser]);

  useEffect(() => {
    setCities(countryData[form.country] || []);
    setForm((prev) => ({ ...prev, city: '' }));
  }, [form.country]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.address || !form.country || !form.city) {
      alert('⚠️ Please fill in all fields!');
      return;
    }

    if (!paymentMode) {
      alert('⚠️ Please select a payment mode!');
      return;
    }

    const orderData = {
      userId: currentUser?.uid,
      customer: { ...form },
      products: items,
      createdAt: serverTimestamp(),
    };

    const totalCost = items.reduce((sum, p) => sum + p.price * p.quantity, 0);

    if (paymentMode === 'cod') {
      try {
        setLoading(true);
        const docRef = await addDoc(collection(db, 'orders'), orderData);
        const orderId = docRef.id;

        await emailjs.send(
          'service_5flixob',
          'template_n6y7xrz',
          {
            order_id: orderId,
            email: form.email,
            orders: items.map((product) => ({
              name: product.name,
              units: product.quantity,
              price: (product.price * product.quantity).toFixed(2),
            })),
            cost_total: totalCost.toFixed(2),
          },
          '2TGz48J8djYtO8ftq'
        );

        clearCart();
        alert('✅ Order placed successfully with Cash on Delivery!');
        navigate('/');
      } catch (error) {
        alert('❌ Order failed: ' + error.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    // For card/tabby/tamara, redirect to respective pages
    const routeMap = {
      card: '/stripe-payment',
      tabby: '/tabbypayment',
      tamara: '/tamarapayment',
    };

    navigate(routeMap[paymentMode], { state: { form, items, totalCost } });
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="order-summary">
        {items.map((product, idx) => (
          <div key={idx} className="checkout-box">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>Color: {product.color}</p>
              <p>Storage: {product.storage}</p>
              <p>Qty: {product.quantity}</p>
              <p><strong>Total: AED {product.price * product.quantity}</strong></p>
            </div>
          </div>
        ))}
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <select name="country" value={form.country} onChange={handleChange} required>
          {Object.keys(countryData).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select name="city" value={form.city} onChange={handleChange} required>
          <option value="" disabled>Select City / Emirate</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <select name="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} required>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Pay with Card (Stripe)</option>
          <option value="tabby">Pay with Tabby</option>
          <option value="tamara">Pay with Tamara</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;