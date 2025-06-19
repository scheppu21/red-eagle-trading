import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  const toggleLang = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
    document.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="site-footer">
      {/* Top Features */}
      <div className={`footer-top ${isMobile ? 'slide-in' : ''}`}>
        <div className="feature-box">
          <h4>🚚 {t('Free shipping')}</h4>
          <p>{t('Free shipping on all orders.')}</p>
        </div>
        <div className="feature-box">
          <h4>🎧 {t('Customer service')}</h4>
          <p>{t('We are available 6 days a week.')}</p>
        </div>
        <div className="feature-box">
          <h4>🔄 {t('Easy Returns')}</h4>
          <p>{t('14 Days Return Policy.')}</p>
        </div>
        <div className="feature-box">
          <h4>🔐 {t('Secure payment')}</h4>
          <p>{t('All your data is secure.')}</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-bottom">
        <div className="footer-column">
          <h4>{t('About')}</h4>
          <p>Red Eagle Trading LLC is a trusted seller of certified electronics in the UAE.</p>
          <p className="company-address">Near Zain East Hotel, Frij Murar, Dubai, U.A.E</p>
          <p className="company-phone">+971 55 9244112, 058 2279369</p>
        </div>

        <div className="footer-column">
          <h4>{t('Company Information')}</h4>
          <ul>
            <li><a href="/">{t('Corporate Website')}</a></li>
            <li><a href="/contact">{t('Contact Us')}</a></li>
            <li><a href="/">{t('Privacy Policy')}</a></li>
            <li><a href="/">{t('Terms of Service')}</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t('Customer Information')}</h4>
          <ul>
            <li><a href="/">{t('Tabby')}</a></li>
            <li><a href="/">{t('Tamara')}</a></li>
            <li><a href="/">{t('Refund Policy')}</a></li>
            <li><a href="/">{t('Shipping Policy')}</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <div className="social-icons">
            <a href="https://wa.me/971559244112" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/redeagletradingllc" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
          </div>
          <button onClick={toggleLang} className="lang-toggle-btn">
            🌐 {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;