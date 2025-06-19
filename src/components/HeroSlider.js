import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';
import { useNavigate } from 'react-router-dom';

import galaxys24 from '../assets/galaxys24.jpeg'
import applewatch from '../assets/applewatch.jpeg'
import iphone15 from '../assets/iphone15pro.jpeg'


const heroBanners = [
  {
    title: 'iPhone 15 Pro Max',
    image: iphone15,
    path: '/iphone',
  },
  {
    title: 'Samsung Galaxy S24 Ultra',
    image: galaxys24,
    path: '/samsung',
  },
  {
    title: 'Apple Watch Ultra',
    image: applewatch,
    path: '/smartwatches',
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {heroBanners.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <div className="hero-content">
                <div className="hero-text">
                  <h2>{slide.title}</h2>
                  <p className="sub-text">30% OFF - Summer Mega Sale</p>
                  <button className="shop-now" onClick={() => navigate(slide.path)}>
                    Shop Now
                  </button>
                </div>
                <div className="hero-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;