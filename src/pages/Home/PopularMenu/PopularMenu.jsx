// import React, { useEffect, useState } from "react";
// import MenuItem from "../../Shared/MenuItem/MenuItem";
// import "./PopularMenu.css";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Container } from "react-bootstrap";
// import TitleDividerOne from "../../../components/TitleDividerOne/TitleDividerOne";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import { Grid, Pagination, Autoplay } from "swiper/modules";

// const PopularMenu = () => {
//   const [menu, setMenu] = useState([]);
//   useEffect(() => {
//     fetch("menu.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const popularItems = data.filter((item) => item.category === "popular");
//         setMenu(popularItems);
//       });
//   }, []);
//   return (
//     <div className="popular-menu-area">
//       <SectionTitle
//         title="Arabian Popular Item List"
//         subtitle="Our Popular Item"
//       ></SectionTitle>
//       <TitleDividerOne className="text-center"></TitleDividerOne>
//       <Container>
//         <Swiper
//           // slidesPerView={5}
//           grid={{
//             rows: 1,
//           }}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             576: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 20,
//             },
//             992: {
//               slidesPerView: 4,
//               spaceBetween: 30,
//             },
//             1201: {
//               slidesPerView: 5,
//               spaceBetween: 30,
//             },
//           }}
//           modules={[Grid, Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           <div className="all-popular-menu">
//             <SwiperSlide>
//               {menu.map((item) => (
//                 <MenuItem key={item._id} item={item}></MenuItem>
//               ))}
//             </SwiperSlide>
//           </div>
//         </Swiper>
//       </Container>
//     </div>
//   );
// };

// export default PopularMenu;

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

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

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
            {menu.map((item) => (
              <SwiperSlide key={item._id}>
                <MenuItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default PopularMenu;
