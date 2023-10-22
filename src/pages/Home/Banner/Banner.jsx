import React from "react";
import "./Banner.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import img1 from "../../../assets/banner/img1.png";
import img2 from "../../../assets/banner/img2.png";
import img3 from "../../../assets/banner/img3.png";
import img4 from "../../../assets/banner/img4.png";
import { Container } from "react-bootstrap";
import img5 from "../../../assets/banner/img5.png";
import img6 from "../../../assets/banner/img6.png";
import img7 from "../../../assets/banner/img7.png";
import img8 from "../../../assets/banner/img8.png";
import img9 from "../../../assets/banner/img9.png";
import img10 from "../../../assets/banner/img10.png";
import img11 from "../../../assets/banner/img11.png";
import img12 from "../../../assets/banner/img12.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="banner-area">
      {/* <AwesomeSlider animation="cubeAnimation"> */}
      <AwesomeSlider>
        <div className="single-banner">
          <div className="banner-content">
            <h2 className="banner-title">
              Find Your Best Healthy & Tasty Food.
            </h2>
            <p className="banner-text">
              Indulge in our delectable menu crafted with wholesome ingredients,
              offering a delightful fusion of taste.
            </p>
            <PrimaryButton
              buttonText="Discover More"
              to="/menu"
            ></PrimaryButton>
          </div>
          <div className="banner-img">
            <img src={img1} alt="" srcset="" className="first-img" />
            <img src={img2} alt="" srcset="" className="third-img" />
            <img src={img3} alt="" srcset="" className="second-img" />
            <img src={img4} alt="" srcset="" className="fourth-img" />
          </div>
        </div>
        <div className="single-banner">
          <div className="banner-content">
            <h2 className="banner-title">Delicius Food Eating Experience.</h2>
            <p className="banner-text">
              Delight in our diverse menu, thoughtfully curated to bring you the
              perfect balance of nutrition and flavor.
            </p>
            <PrimaryButton
              buttonText="Discover More"
              to="/menu"
            ></PrimaryButton>
          </div>
          <div className="banner-img">
            <img src={img5} alt="" srcset="" className="first-img" />
            <img src={img6} alt="" srcset="" className="third-img" />
            <img src={img7} alt="" srcset="" className="second-img" />
            <img src={img8} alt="" srcset="" className="fourth-img" />
          </div>
        </div>
        <div className="single-banner">
          <div className="banner-content">
            <h2 className="banner-title">
              Best Quality Food & Feels Like Home.
            </h2>
            <p className="banner-text">
              Embark on a journey of culinary ecstasy with our menu. Immerse in
              the exquisite blend of health and taste.
            </p>
            <PrimaryButton
              buttonText="Discover More"
              to="/menu"
            ></PrimaryButton>
          </div>
          <div className="banner-img">
            <img src={img9} alt="" srcset="" className="first-img" />
            <img src={img10} alt="" srcset="" className="third-img" />
            <img src={img11} alt="" srcset="" className="second-img" />
            <img src={img12} alt="" srcset="" className="fourth-img" />
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;

//
// import React, { useState, useEffect } from "react";
// import "./Banner.css";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

// const Banner = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const importImages = async () => {
//       const importedImages = [];
//       for (let i = 1; i <= 12; i++) {
//         const image = await import(`../../../assets/banner/img${i}.png`);
//         importedImages.push(image.default);
//       }
//       setImages(importedImages);
//     };

//     importImages();
//   }, []);

//   const banners = [
//     {
//       title: "Find Your Best Healthy & Tasty Food.",
//       text: "Indulge in our delectable menu crafted with wholesome ingredients, offering a delightful fusion of taste.",
//     },
//     {
//       title: "Delicius Food Eating Experience.",
//       text: "Delight in our diverse menu, thoughtfully curated to bring you the perfect balance of nutrition and flavor.",
//     },
//     {
//       title: "Best Quality Food & Feels Like Home.",
//       text: "Embark on a journey of culinary ecstasy with our menu. Immerse in the exquisite blend of health and taste.",
//     },
//   ];
//   return (
//     <div className="banner-area">
//       <AwesomeSlider>
//         {banners.map((banner, index) => (
//           <div key={index} className="single-banner">
//             <div className="banner-content">
//               <h2 className="banner-title">{banner.title}</h2>
//               <p className="banner-text">{banner.text}</p>
//               <PrimaryButton buttonText="Discover More" to="/"></PrimaryButton>
//             </div>
//             <div className="banner-img">
//               {images.slice(index * 4, index * 4 + 4).map((img, imgIndex) => (
//                 <img
//                   key={imgIndex}
//                   src={img}
//                   alt={`img${index * 4 + imgIndex + 1}`}
//                   className={`img${imgIndex + 1}-img`}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </AwesomeSlider>
//     </div>
//   );
// };

// export default Banner;
