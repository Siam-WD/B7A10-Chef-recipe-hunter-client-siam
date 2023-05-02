import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "./Slide";

const Header = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://flavour-fusion-server-siam-wd.vercel.app/slides")
      .then((res) => res.json())
      .then((data) => setSlides(data.data));
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {slides.map((slide) => (
            <SwiperSlide>
              <Slide key={slide.id} slide={slide}></Slide>
            </SwiperSlide>
          ))}

        
      </Swiper>
      
    </div>
  );
};

export default Header;
