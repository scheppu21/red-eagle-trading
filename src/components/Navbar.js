import React, { useState, useContext, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpeg';
import {
  FiSearch,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
} from 'react-icons/fi';
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { UserContext } from '../context/UseContext';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import allProducts from '../data/allProducts';
import ProductModal from './ProductModal';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const searchRef = useRef();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'EN' ? 'AR' : 'EN';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'AR' ? 'rtl' : 'ltr';
  };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfile(false);
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setQuery('');
        setFilteredProducts([]);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredProducts([]);
    } else {
      const results = allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [query]);

  return (
    <header className="navbar-container">
      <div className="top-marquee">
        <marquee behavior="scroll" direction="left">
          🎉 Exclusive Discounted Bundles! Shop now and save big! 🎉
        </marquee>
      </div>

      <div className="navbar-top navbar-top-flex">
        {/* Logo & Details */}
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="Red Eagle Logo" className="logo-img" />
          </Link>
          <div className="company-details">
            <h2 className="company-name">RED EAGLE TRADING LLC</h2>
            <p className="company-address">Near Zain East Hotel, Frij Murar, Dubai, U.A.E</p>
            <p className="company-phone">+971 55 9244112, 058 2279369</p>
          </div>
        </div>

        <div className="navbar-icons" ref={searchRef}>
          {/* Language Toggle */}
          <button className="lang-switcher" onClick={toggleLanguage}>
            {i18n.language === 'EN' ? 'AR' : 'EN'}
          </button>

          {/* Search */}
          <FiSearch className="icon-button" onClick={() => setShowSearch(!showSearch)} />
          {showSearch && (
            <div className="center-search-container">
              <div className="search-dropdown">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {filteredProducts.length > 0 && (
                  <ul className="search-suggestions">
                    {filteredProducts.map((p) => (
                      <li
                        key={p.id}
                        onClick={() => {
                          setSelectedProduct(p);
                          setSelectedVariant(p.variants[0]);
                          setShowSearch(false);
                          setQuery('');
                          setFilteredProducts([]);
                        }}
                      >
                        {p.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Cart */}
          <div className="cart-wrapper" onClick={() => navigate('/cart')}>
            <FiShoppingCart className="icon-button" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>

          {/* Auth */}
          {!currentUser ? (
            <FiLogIn className="icon-button" onClick={handleLogin} title={t('login')} />
          ) : (
            <div className="profile-icon-wrapper">
              <div
                className="profile-initial"
                onClick={() => setShowProfile(!showProfile)}
              >
                {currentUser.displayName
                  ? currentUser.displayName.charAt(0).toUpperCase()
                  : currentUser.email.charAt(0).toUpperCase()}
              </div>
              {showProfile && <ProfileMenu onClose={() => setShowProfile(false)} />}
            </div>
          )}

          {/* Links */}
          {currentUser && (
            <button className="nav-btn" onClick={() => navigate('/my-orders')}>
              My Orders
            </button>
          )}
          {currentUser?.email === 'scheppu2158@gmail.com' && (
            <button className="nav-btn" onClick={() => navigate('/admin/orders')}>
              Admin Panel
            </button>
          )}

          <div className="hamburger-wrapper">
            {menuOpen ? (
              <FiX className="icon-button hamburger-icon" onClick={() => setMenuOpen(false)} />
            ) : (
              <FiMenu className="icon-button hamburger-icon" onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/new-arrivals">New Arrivals</Link></li>
          <li><Link to="/iphone">iPhone</Link></li>
          <li><Link to="/samsung">Samsung</Link></li>
          <li><Link to="/ipad">iPad</Link></li>
          <li><Link to="/smartwatches">Smartwatches</Link></li>
          <li><Link to="/macbooks">MacBooks</Link></li>
          <li><Link to="/laptops">Laptops</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Product Modal from Search */}
      {selectedProduct && selectedVariant && (
        <ProductModal
          product={selectedProduct}
          variant={selectedVariant}
          onClose={() => {
            setSelectedProduct(null);
            setSelectedVariant(null);
          }}
        />
      )}
    </header>
  );
};

export default Navbar;