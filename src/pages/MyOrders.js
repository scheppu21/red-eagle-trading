import React, { useEffect, useState, useContext } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { UserContext } from '../context/UseContext';
import './MyOrders.css';
import jsPDF from 'jspdf';

const MyOrders = () => {
  const { currentUser } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser) return;

      const q = query(collection(db, 'orders'), where('userId', '==', currentUser.uid));
      const snapshot = await getDocs(q);
      const userOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(userOrders);
    };

    fetchOrders();
  }, [currentUser]);

  if (!currentUser) return <p>🔐 Please log in to view your orders.</p>;

  const generateReceipt = (order) => {
    const doc = new jsPDF();
    let y = 20;

    const createdAt = order.createdAt?.seconds
      ? new Date(order.createdAt.seconds * 1000)
      : new Date();
    const formattedDate = createdAt.toLocaleDateString('en-GB');

    doc.setFontSize(16);
    doc.text('Red Eagle Trading LLC', 20, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 20, y);
    y += 8;
    doc.text(`Date: ${formattedDate}`, 20, y);
    y += 8;
    doc.text(`Customer Name: ${order.customer?.name || 'N/A'}`, 20, y);
    y += 8;
    doc.text(`Email: ${order.customer?.email || 'N/A'}`, 20, y);
    y += 8;
    doc.text(`Phone: ${order.customer?.phone || 'N/A'}`, 20, y);
    y += 8;
    doc.text(`Address: ${order.customer?.address || 'N/A'}`, 20, y);
    y += 12;

    doc.text('Products:', 20, y);
    y += 10;

    const products = order.product ? [order.product] : order.products || [];

    products.forEach((item, index) => {
      doc.text(
        `• ${item.name} - ${item.storage}/${item.color} - Qty: ${item.quantity} - AED ${item.price * item.quantity}`,
        20,
        y
      );
      y += 8;
    });

    const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    y += 5;
    doc.text(`Total Amount: AED ${total}`, 20, y + 5);

    doc.save(`RedEagle_Receipt_${order.id}.pdf`);
  };

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id} className="order-item">
              <strong>🧾 Order ID:</strong> {order.id}<br />

              {/* Buy Now: Single Product */}
              {order.product && (
                <>
                  <strong>{order.product.name}</strong> — {order.product.storage} / {order.product.color}<br />
                  Qty: {order.product.quantity}, Total: Dhs. {order.product.price * order.product.quantity}
                </>
              )}

              {/* Cart Checkout: Multiple Products */}
              {order.products && (
                <ul className="product-list">
                  {order.products.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.name}</strong> — {item.storage} / {item.color}<br />
                      Qty: {item.quantity}, Total: Dhs. {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              )}

              <hr />
              <p><strong>📦 Shipping To:</strong></p>
              <p>Name: {order.customer?.name}</p>
              <p>Email: {order.customer?.email}</p>
              <p>Phone: {order.customer?.phone}</p>
              <p>Address: {order.customer?.address}</p>

              {/* ✅ Download Button */}
              <button onClick={() => generateReceipt(order)} className="download-btn">
                🧾 Download Receipt
              </button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;