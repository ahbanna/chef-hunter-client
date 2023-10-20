import React from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { Container } from "react-bootstrap";
import Introduction from "../Introduction/Introduction";
import Features from "../Features/Features";
import Video from "../Video/Video";

const About = () => {
  return (
    <div>
      <Breadcrumb title="About Us"></Breadcrumb>
      <Introduction></Introduction>
      <Features></Features>
      <Video></Video>
      <Container></Container>
    </div>
  );
};

export default About;
