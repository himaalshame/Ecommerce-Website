import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* Slide 1 - Fresh Groceries */}
            <SwiperSlide>
              <div className="hero_slide slide1">
                <div className="content">
                  <h4>100% Organic & Fresh</h4>
                  <h3>
                    Farm Fresh <br /> Groceries Daily
                  </h3>
                  <p>Handpicked fruits & vegetables delivered to your door</p>
                  <Link to="/category/groceries" className="btn">
                    Shop Groceries
                  </Link>
                </div>
                <div className="hero_art">
                  <svg viewBox="0 0 260 260" fill="none" aria-hidden="true">
                    <circle cx="130" cy="130" r="120" fill="#ffffff" opacity="0.45" />
                    {/* apple */}
                    <path d="M120 150c-28 0-44-22-44-44 0-20 14-34 32-34 6 0 10 2 12 4 2-2 6-4 12-4 18 0 32 14 32 34 0 22-16 44-44 44z" fill="#e74c3c" />
                    <path d="M120 76c0-10 8-16 16-16 0 10-6 16-16 16z" fill="#27ae60" />
                    <rect x="118" y="60" width="4" height="18" rx="2" fill="#6b4a2b" />
                    {/* leaf accent */}
                    <path d="M176 176c22-6 34-24 34-24s-20-6-34 4c-12 8-10 24-10 24s6-2 10-4z" fill="#2ecc71" />
                    {/* orange */}
                    <circle cx="78" cy="178" r="30" fill="#f39c12" />
                    <circle cx="78" cy="150" r="5" fill="#27ae60" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 - Beauty & Skin Care */}
            <SwiperSlide>
              <div className="hero_slide slide2">
                <div className="content">
                  <h4>Natural Ingredients</h4>
                  <h3>
                    Beauty & <br /> Skin Care
                  </h3>
                  <p>Glow naturally with our botanical care collection</p>
                  <Link to="/category/beauty" className="btn">
                    Explore Beauty
                  </Link>
                </div>
                <div className="hero_art">
                  <svg viewBox="0 0 260 260" fill="none" aria-hidden="true">
                    <circle cx="130" cy="130" r="120" fill="#ffffff" opacity="0.45" />
                    {/* bottle */}
                    <rect x="96" y="96" width="68" height="110" rx="16" fill="#27ae60" />
                    <rect x="96" y="96" width="68" height="34" rx="16" fill="#2ecc71" />
                    <rect x="118" y="66" width="24" height="34" rx="6" fill="#1a2a1f" />
                    <rect x="110" y="150" width="40" height="24" rx="6" fill="#ffffff" opacity="0.9" />
                    {/* leaf */}
                    <path d="M182 150c18-4 28-20 28-20s-18-6-30 2c-10 7-8 22-8 22s6-2 10-4z" fill="#2ecc71" />
                    <path d="M78 170c-16-4-24-18-24-18s16-6 26 1c9 6 7 19 7 19s-5-1-9-2z" fill="#27ae60" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 - Home & Fragrances */}
            <SwiperSlide>
              <div className="hero_slide slide3">
                <div className="content">
                  <h4>For Every Corner</h4>
                  <h3>
                    Home Decor & <br /> Fragrances
                  </h3>
                  <p>Bring warmth and nature into your living space</p>
                  <Link to="/category/home-decoration" className="btn">
                    Discover More
                  </Link>
                </div>
                <div className="hero_art">
                  <svg viewBox="0 0 260 260" fill="none" aria-hidden="true">
                    <circle cx="130" cy="130" r="120" fill="#ffffff" opacity="0.45" />
                    {/* pot */}
                    <path d="M92 168h76l-10 44a8 8 0 0 1-8 6h-40a8 8 0 0 1-8-6l-10-44z" fill="#e67e22" />
                    <rect x="86" y="156" width="88" height="16" rx="6" fill="#d35400" />
                    {/* plant */}
                    <path d="M130 168c0-30 4-58 4-58" stroke="#1f9d55" strokeWidth="6" strokeLinecap="round" />
                    <path d="M134 120c14-14 34-12 34-12s-2 22-18 28c-12 4-20-6-20-6s2-6 4-10z" fill="#2ecc71" />
                    <path d="M126 132c-14-12-32-8-32-8s4 20 20 24c12 3 18-6 18-6s-4-6-6-10z" fill="#27ae60" />
                    <path d="M132 110c8-16 26-20 26-20s0 20-14 28c-10 6-18-2-18-2s4-4 6-6z" fill="#3fe08a" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
