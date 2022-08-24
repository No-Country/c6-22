import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import { changueSelected, resize } from "../helpers";
import { useEffect, useState } from "react";

export const Carousel = ({ images }) => {
  const [views, setviews] = useState(3);

  const changueView = (view) => setviews(view);

  const handleClick = (e) => {
    const slices = document.querySelectorAll("#swiper img");

    if (window.innerWidth > 600) {
      slices.forEach((node) => node.classList.remove("active_img"));
      e.target.className = "active_img";
      changueSelected(e);
    }
  };

  window.addEventListener("resize", () => {
    resize(changueView);
  });

  useEffect(() => {
    resize(changueView);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={views}
      navigation
      pagination={{ clickable: true }}
    >
      {images?.map((img, i) => {
        return (
          //medida fija
          <SwiperSlide id="swiper" key={i} className="slider">
            <img
              loading="loading"
              src={img}
              alt="product"
              onClick={handleClick}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
