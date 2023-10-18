// import React from "react";
// import "./Slider.css";
// import bannerImage from "../../assets/chicken-grill.png";

// const Slider = () => {
//   return (
//     <div className="slider-area">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 slider-content">
//             <h4>Welcome to</h4>
//             <h3>
//               <span>Bringing Health and Flavor</span> <br /> To Your Table
//             </h3>
//             <p>
//               Where every flavor tells a story. We are adding an enjoyable food
//               experience to your taste.
//             </p>
//           </div>
//           <div className="col-lg-6">
//             <img src={bannerImage} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
import dish1 from "../../assets/banner/slider-dish-1.png";
import fireImg from "../../assets/banner/shape-fire3.png";
import CustomButton from "../Shared/CustomButton/CustomButton";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <div className="banner-img">
          <img src={dish1} alt="" srcset="" />
        </div>
        <div className="banner-content">
          <div className="popular-text">
            <img src={fireImg} alt="" srcset="" />
            <span>Most Popular Dish</span>
          </div>
          <h3>Crispy Brussels</h3>
          <h2>Sprouts</h2>
          <p>
            Crispy fried brussel sprouts topped with crispy bacon lardons, feta
            cheese, balsamic reduction & green onions.
          </p>
          <CustomButton buttonText="See More" to="/"></CustomButton>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
