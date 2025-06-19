import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './AdminOrders.css';
import { UserContext } from '../context/UseContext';
import { useNavigate } from 'react-router-dom';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllOrders = async () => {
      const snapshot = await getDocs(collection(db, 'orders'));
      const allOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(allOrders);
    };

    fetchAllOrders();
  }, []);

  // 🔐 Admin access check
  if (!currentUser || currentUser.email !== 'scheppu2158@gmail.com') {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>This page is only accessible to admins</p>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  const formatDate = (timestamp) => {
    if (!timestamp?.seconds) return '';
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString('en-GB'); // e.g., 12/06/2025
  };

  return (
    <div className="admin-orders">
      <h2>All Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product</th>
            <th>Color</th>
            <th>Storage</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            const orderDate = formatDate(order.createdAt);
            const customer = order.customer || {};

            // For Buy Now
            if (order.product) {
              const p = order.product;
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{orderDate}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{p.name}</td>
                  <td>{p.color}</td>
                  <td>{p.storage}</td>
                  <td>{p.quantity}</td>
                  <td>Dhs. {p.price * p.quantity}</td>
                </tr>
              );
            }

            // For Cart Checkout
            if (order.products) {
              return order.products.map((p, idx) => (
                <tr key={`${order.id}-${idx}`}>
                  <td>{order.id}</td>
                  <td>{orderDate}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{p.name}</td>
                  <td>{p.color}</td>
                  <td>{p.storage}</td>
                  <td>{p.quantity}</td>
                  <td>Dhs. {p.price * p.quantity}</td>
                </tr>
              ));
            }

            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;