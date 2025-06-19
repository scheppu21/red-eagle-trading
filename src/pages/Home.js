import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UseContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';  
import './Home.css';
import ProductCarousel from '../components/ProductCarousel';
import samsungProducts from '../data/samsungData';
import CategoryCarousel from '../components/CategoryCarousel';
import iphoneProducts from '../data/iphoneData';
import HeroSlider from '../components/HeroSlider'
import iphone from '../assets/iphone.jpg'
import applewatchultra from '../assets/applewatch.jpeg'
import galaxywatche6 from '../assets/galaxy watches.jpeg'
import samsungfold from '../assets/galaxyfold.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  const { currentUser } = useContext(UserContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const displayName = currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Guest';
  useEffect(() => {
    Aos.init({duration:1000, once:false,mirror:true,});
  },[]);

  return (
    <div className="home-container">
  <div className="offer-strip">
  <div className="scroll-text">
    🎉 Up to 10% off on all iPhones! Limited time only! 🎉
  </div>
</div>
      <h1>{t('welcome')}, {displayName}! 👋</h1>

   <HeroSlider />
         <div className="offer-strip">
  <div className="scroll-text">
    CERTIFIED DEVICE | 1 YEAR WARRANTY
  </div>
</div>
         <ProductCarousel title="iphone Offers" products={iphoneProducts}/>
         <div className="view-all-wrapper">
  <button className="view-all-btn" onClick={() => navigate('/iphone')}>
    View All Iphone Products →
  </button>
</div>
         
       
<section className="staggered-promo-tiles" data-aos="fade-up">
  <h2 data-aos="fade-down">Explore Top Picks</h2>

  <div className="promo-grid">
    <div
      className="tile tile-large"
      data-aos="zoom-in-up"
      data-aos-delay="100"
      onClick={() => navigate('/samsung')}
    >
      <img src={samsungfold} alt="Samsung Fold" />
      <span className="tile-label">Samsung Galaxy Z Fold 5</span>
    </div>

    <div
      className="tile tile-small"
      data-aos="zoom-in"
      data-aos-delay="200"
      onClick={() => navigate('/smartwatches')}
    >
      <img src={applewatchultra} alt="Apple Watch" />
      <span className="tile-label">Apple Watch</span>
    </div>

    <div
      className="tile tile-small"
      data-aos="zoom-in"
      data-aos-delay="300"
      onClick={() => navigate('/iphone')}
    >
      <img src={iphone} alt="iPhone" />
      <span className="tile-label">iPhone</span>
    </div>

    <div
      className="tile tile-wide"
      data-aos="zoom-in-up"
      data-aos-delay="400"
      onClick={() => navigate('/smartwatches')}
    >
      <img src={galaxywatche6} alt="Galaxy Watch 6" />
      <span className="tile-label">Galaxy Watch 6</span>
    </div>
  </div>
</section>
 <ProductCarousel title="Samsung Offers" products={samsungProducts}/>
 <div className="view-all-wrapper">
  <button className="view-all-btn" onClick={() => navigate('/samsung')}>
    View All Samsung Products →
  </button>
</div>
        <CategoryCarousel />
        <section className="why-redeagle">
  <h2>Why Red Eagle?</h2>
  <div className="why-grid">
    <div className="why-item">
      <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Warranty" />
      <h4>1 Year Warranty</h4>
      <p className='why-text'>Your purchase is protected for a full year</p>
    </div>
    <div className="why-item">
      <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Certified" />
      <h4>Certified Refurbished</h4>
      <p className='why-text'>Each device is tested, verified, and guaranteed</p>
    </div>
    <div className="why-item">
      <img src="https://cdn-icons-png.flaticon.com/512/443/443138.png" alt="Return" />
      <h4>14 Days Return</h4>
      <p className='why-text'>Changed your mind? Send it back - hassle-free.</p>
    </div>
    <div className="why-item">
      <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Delivery" />
      <h4>Free Delivery</h4>
      <p className='why-text'>Fast & Free shipping across the UAE</p>
    </div>
    <div className="why-item">
      <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="Buy Later" />
      <h4>Buy Now, Pay Later</h4>
      <p className='why-text'>Split payment into easy monthly plans.</p>
    </div>
  </div>
</section>
<section className="about-section">
  <h2>About Red Eagle Trading L.L.C</h2>
  <p>
    Red Eagle Trading L.L.C is a Dubai-based electronics company dedicated to delivering high-quality refurbished devices at unbeatable prices. From the latest iPhones and Samsung smartphones to smartwatches, iPads, and accessories — we offer only certified products that go through rigorous testing and quality control.
  </p>
  <p>
    Our mission is to provide affordable access to premium technology, backed by a 1-year warranty, 14-day return policy, and fast, free delivery across the UAE. With a commitment to excellence and customer satisfaction, Red Eagle has earned the trust of thousands of happy customers.
  </p>
  <p>
    Visit us near Zain East Hotel, Frij Murar, Dubai — or explore our entire collection online.
  </p>
</section>

    
    </div>
  );
};

export default Home;