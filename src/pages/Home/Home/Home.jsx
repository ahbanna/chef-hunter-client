import React from "react";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import AppSection from "../AppSection/AppSection";
import ChefCard from "../ChefCard/ChefCard";
import Service from "../Service/Service";
import { ScrollRestoration } from "react-router-dom";
import AboutSection from "../AboutSection/AboutSection";
import Gallery from "../Gallery/Gallery";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <ScrollRestoration />
      <Banner></Banner>
      <AboutSection></AboutSection>
      <PopularMenu></PopularMenu>
      <AppSection></AppSection>
      <ChefCard></ChefCard>
      <Service></Service>
      <Gallery></Gallery>
      <Partners></Partners>
    </div>
  );
};

export default Home;
