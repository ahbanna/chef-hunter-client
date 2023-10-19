import React from "react";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import AppSection from "../AppSection/AppSection";
import ChefCard from "../ChefCard/ChefCard";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AppSection></AppSection>
      <ChefCard></ChefCard>
      <Service></Service>
      <Partners></Partners>
    </div>
  );
};

export default Home;
