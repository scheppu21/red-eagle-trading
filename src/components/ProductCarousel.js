import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductCarousel.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const ProductCarousel = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <div className="product-carousel">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id || product.name}>
            <div
              className="product-card"
              onClick={() => navigate(`${product.path}`)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>AED {product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;