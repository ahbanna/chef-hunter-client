import React from "react";
import "./Partners.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/brand/client-1.png";
import img2 from "../../assets/brand/client-2.png";
import img3 from "../../assets/brand/client-3.png";
import img4 from "../../assets/brand/client-4.png";
import img5 from "../../assets/brand/client-5.png";
import brandbg from "../../assets/brand/brandBg.png";
import { Container } from "react-bootstrap";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Partners = () => {
  return (
    <div className="partners-area">
      <Container>
        <SectionTitle
          subtitle="Brand"
          title="Key Supporters"
          text="More Than Your Average Taste"
        ></SectionTitle>
        <Swiper
          // slidesPerView={5}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1201: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Grid, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </Container>
      <div className="circle-animation"></div>
    </div>
  );
};

export default Partners;
