import React, { useState } from "react";
import "./Video.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Container, Modal } from "react-bootstrap";
import TitleDividerTwo from "../../../components/TitleDividerTwo/TitleDividerTwo";
import videoThum from "../../../assets/video/video-thum.jpg";
import { BsPlayCircle } from "react-icons/bs";
const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="video-area">
      <Container>
        <div className="video-area-content">
          <SectionTitle
            title="Restaurant is like a theater.Our task is to amaze you!"
            subtitle="Promo Video"
          ></SectionTitle>
          <TitleDividerTwo></TitleDividerTwo>
          <p>
            Welcome to our restaurant, where dining is not just a meal; it's a
            captivating performance, a culinary theater designed to astonish
            your senses. At our establishment, we believe that every dish is a
            carefully crafted act, every ingredient a talented performer on our
            gastronomic stage. Much like a theater production, our chefs
            meticulously prepare each meal, infusing it with passion and
            creativity.
          </p>
        </div>
        <div className="video">
          <div className="video-thum">
            <img src={videoThum} alt="Video Thumbnail" />
          </div>
          <div className="play-btn">
            <BsPlayCircle onClick={handleShow}></BsPlayCircle>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            className="d-flex justify-content-center align-items-center"
          >
            <Modal.Body>
              <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NC9KlaxtfLg?si=BKqxkaj8nr7ZU8p7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Video;
