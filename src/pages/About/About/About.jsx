import React from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Introduction from "../Introduction/Introduction";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Count from "../Count/Count";
import { ScrollRestoration } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div>
      <ScrollRestoration />
      <Breadcrumb title="About Us"></Breadcrumb>
      <Introduction></Introduction>
      <Features></Features>
      <Video></Video>
      <Count></Count>
    </div>
  );
};

export default About;
