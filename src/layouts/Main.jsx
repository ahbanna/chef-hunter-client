import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Footer/Footer";
import ChefCard from "../pages/ChefCard/ChefCard";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Banner from "../pages/Banner/Banner";
import AppSection from "../pages/AppSection/AppSection";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AppSection></AppSection>
      <ChefCard></ChefCard>
      <About></About>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Main;
