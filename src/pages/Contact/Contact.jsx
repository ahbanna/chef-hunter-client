import React from "react";
import "./Contact.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Container } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <div className="contact-area">
      <Breadcrumb title="Contact"></Breadcrumb>
      <Container>
        <div className="contact-area-content">
          <div className="contact-info">
            <ContactInfo></ContactInfo>
            <h4>Have a question? </h4>
            <p>
              If you have any questions about our menu, reservations, or special
              events, please feel free to reach out to us using the form below.
              We aim to respond to all inquiries within 24 hours. Your
              satisfaction is our priority.
            </p>
          </div>
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
