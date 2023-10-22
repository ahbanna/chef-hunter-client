import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { Container } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
// import { BsChatLeftQuoteFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TitleDividerTwo from "../../../components/TitleDividerTwo/TitleDividerTwo";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="testimonial-area">
      <Container>
        <div className="testimonial-content">
          <div className="tes-title">
            <SectionTitle
              subtitle="Guestbook"
              title="Clients Feedback"
            ></SectionTitle>
            <TitleDividerTwo></TitleDividerTwo>
          </div>
          <div className="testimonials">
            <Swiper
              slidesPerView={1}
              grid={{
                rows: 1,
              }}
              spaceBetween={30}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              modules={[Grid, Autoplay]}
              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //     spaceBetween: 20,
              //   },
              //   640: {
              //     slidesPerView: 1,
              //     spaceBetween: 20,
              //   },
              //   768: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              //   1024: {
              //     slidesPerView: 1,
              //     spaceBetween: 30,
              //   },
              // }}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide>
                  <div className="single-testimonial">
                    <h2>Honorable Clients</h2>
                    <div className="quote-icon text-end">
                      {/* <BsChatLeftQuoteFill></BsChatLeftQuoteFill> */}
                      <FaQuoteRight></FaQuoteRight>
                    </div>
                    <p className="clients-revie">{testimonial.comment}</p>
                    <div className="client-info-rating">
                      <div className="client-info">
                        <div>
                          <h4 className="client-name">{testimonial.name}</h4>
                          <span className="profession">
                            {testimonial.profession}
                          </span>
                        </div>
                        <div className="client-img">
                          <img src={testimonial.image} alt="" srcset="" />
                        </div>
                      </div>
                      <div className="rating-star">
                        <Rating
                          style={{ maxWidth: 80 }}
                          value={testimonial.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
