import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ChefCard.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TitleDividerOne from "../../../components/TitleDividerOne/TitleDividerOne";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid } from "swiper/modules";
import SocialLink from "../../../components/SocialLink/SocialLink";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("https://chef-hunter-server-ahbanna.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  console.log(chefData);
  return (
    <div className="chef-area">
      {/* <Container> */}
      <SectionTitle
        subtitle="Our Experties"
        title="Meet Our Chef"
      ></SectionTitle>
      <TitleDividerOne></TitleDividerOne>
      <div className="all-chefs">
        {/* {chefData.map((chef) => (
            <div className="single-chef">
              <Card>
                <LazyLoad>
                  <Card.Img variant="top" src={chef.chef_picture} />
                </LazyLoad>
                <Card.Body>
                  <Card.Title>{chef.chef_name}</Card.Title>
                  <p>
                    <span>Experience:</span> {chef.experience}
                  </p>
                  <p>
                    <span>Total recipes:</span> {chef.num_recipes}
                  </p>
                  <div className="view-recipe-btn">
                    <Link to={`/chefrecipes/${chef.id}`}>
                      <Button>View Recipes</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))} */}

        <Swiper
          grid={{ rows: 1 }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 20 },
            576: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1201: { slidesPerView: 5, spaceBetween: 30 },
          }}
          modules={[Grid]}
          className="mySwiper"
        >
          {/* {popular.map((item) => (
              <SwiperSlide key={item._id}>
                <MenuItem item={item} />
              </SwiperSlide>
            ))} */}

          {chefData.map((chef) => (
            <SwiperSlide>
              <div className="single-chef">
                <Card>
                  <LazyLoad>
                    <Card.Img variant="top" src={chef.chef_picture} />
                  </LazyLoad>
                  <Card.Body>
                    <Card.Title>{chef.chef_name}</Card.Title>
                    <p>Head Chef</p>
                    <SocialLink></SocialLink>
                    <div className="view-recipe-btn">
                      <PrimaryButton
                        buttonText="View Recipe"
                        to={`/chefrecipes/${chef.id}`}
                      ></PrimaryButton>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default ChefCard;
