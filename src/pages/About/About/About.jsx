import React from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Introduction from "../Introduction/Introduction";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Count from "../Count/Count";

const About = () => {
  return (
    <div>
      <Breadcrumb title="About Us"></Breadcrumb>
      <Introduction></Introduction>
      <Features></Features>
      <Video></Video>
      <Count></Count>
    </div>
  );
};

export default About;
