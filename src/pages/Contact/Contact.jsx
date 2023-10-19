import React from "react";
import "./Contact.css";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";
import Header from "../Shared/Header/Header";
import { Container } from "react-bootstrap";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-area">
      <Header></Header>
      <Breadcrumb title="Contact"></Breadcrumb>
      <Container>
        <div className="contact-area-content">
          <div className="contact-info">
            <div className="contact-info-list">
              <ul>
                <li>
                  <IoLocationOutline></IoLocationOutline> 4920 Trails End Road
                  Ft United States, FL 33311
                </li>
                <li>
                  <FaRegEnvelope></FaRegEnvelope> ordernow@foodka.com
                </li>
                <li>
                  <a href="mailto:alhasanulbanna@gmail.com">
                    <BiSolidPhoneCall></BiSolidPhoneCall> +997 509 153 849
                  </a>
                </li>
              </ul>
            </div>
            <p>
              We’re an award-winning creative design studio with a small team
              and big ideas. We pour passion into projects big and small,
              providing our expert clients with solutions.
            </p>
          </div>
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
