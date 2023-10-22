import React from "react";
import "./Gallery.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/gallery/img1.jpg";
import img2 from "../../../assets/gallery/img2.jpg";
import img3 from "../../../assets/gallery/img3.jpg";
import img4 from "../../../assets/gallery/img4.jpg";
import img5 from "../../../assets/gallery/img5.jpg";
import img6 from "../../../assets/gallery/img6.jpg";
import img7 from "../../../assets/gallery/img7.jpg";
import img8 from "../../../assets/gallery/img8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import TitleDividerOne from "../../../components/TitleDividerOne/TitleDividerOne";
const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="gallery-area">
      <SectionTitle title="Our Gallery Store" subtitle="Galley"></SectionTitle>
      <TitleDividerOne></TitleDividerOne>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          576: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 30 },
          1201: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <div key={index}>
            <SwiperSlide>
              <img alt={`Image ${index + 1}`} src={image} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
export default Gallery;
