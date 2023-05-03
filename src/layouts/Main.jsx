import React from "react";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import Slider from "../pages/Slider/Slider";
import ChefCard from "../pages/ChefCard/ChefCard";
import About from "../pages/About/About";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <ChefCard></ChefCard>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Main;
