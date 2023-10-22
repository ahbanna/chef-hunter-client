import React from "react";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import AppSection from "../AppSection/AppSection";
import ChefCard from "../ChefCard/ChefCard";
import { ScrollRestoration } from "react-router-dom";
import AboutSection from "../AboutSection/AboutSection";
import Gallery from "../Gallery/Gallery";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <ScrollRestoration />
      <Banner></Banner>
      <AboutSection></AboutSection>
      <PopularMenu></PopularMenu>
      <AppSection></AppSection>
      <ChefCard></ChefCard>
      <Gallery></Gallery>
      <Testimonial></Testimonial>
      <Partners></Partners>
    </div>
  );
};

export default Home;
