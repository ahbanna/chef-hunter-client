import React, { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import "./PopularMenu.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import TitleDividerOne from "../../../components/TitleDividerOne/TitleDividerOne";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import useMenu from "../../../hooks/useMenu";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "breakfast");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div className="popular-menu-area">
      <SectionTitle
        title="Arabian Popular Item List"
        subtitle="Our Popular Item"
      />
      <TitleDividerOne className="text-center" />
      <Container>
        <div className="all-popular-menu">
          <Swiper
            grid={{ rows: 1 }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              576: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1201: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Grid, Pagination, Autoplay]}
            className="mySwiper"
          >
            {popular.map((item) => (
              <SwiperSlide key={item._id}>
                <MenuItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <PrimaryButton buttonText="See all menu" to="/menu"></PrimaryButton>
      </Container>
    </div>
  );
};

export default PopularMenu;
