import React from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { Container } from "react-bootstrap";
import Introduction from "../Introduction/Introduction";

const About = () => {
  return (
    <div>
      <Breadcrumb title="About Us"></Breadcrumb>
      <Introduction></Introduction>
      <Container></Container>
    </div>
  );
};

export default About;
