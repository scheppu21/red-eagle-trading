import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UseContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SmartwatchesPage from './pages/SmartwatchesPage';
import IphonePage from './pages/IphonePage'
import MacBooksPage from './pages/MacBooksPage';
import SamsungPage from './pages/SamsungPage'
import IpadPage from './pages/IpadPage';
import AccessoriesPage from './pages/AccessoriesPage';
import LaptopPage from './pages/LaptopPage';
import NewArrivalPage from './pages/NewArrivalPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import MyOrders from './pages/MyOrders';
import AdminOrders from './pages/AdminOrders';

import StripePayment from './pages/StripePayment';


import './i18n'; // load i18next

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivalPage />} />
          <Route path="/iphone" element={<IphonePage />} />
          <Route path="/samsung" element={<SamsungPage />} />
          <Route path="/macbooks" element={<MacBooksPage/>} />
          <Route path="/ipad" element={<IpadPage />} />
          <Route path="/smartwatches" element={<SmartwatchesPage/>} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/laptops" element={<LaptopPage/>} />
           <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
             <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/admin/orders" element={<AdminOrders/>} />
              
               <Route path='/stripe-payment' element={<StripePayment/>} />
               

        </Routes>
        <Footer />
      </Router>
      <div className="floating-socials">
  <a
    href="https://wa.me/919061761426"  // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="WhatsApp"
    />
  </a>

  <a
    href="https://www.instagram.com/redeagletrading"  // Replace with your Insta
    target="_blank"
    rel="noopener noreferrer"
    className="instagram-icon"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
      alt="Instagram"
    />
  </a>
</div>
    </UserProvider>
  );
}

export default App;
