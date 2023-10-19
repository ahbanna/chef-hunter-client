import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ChefCard.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("https://chef-hunter-server-ahbanna.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  console.log(chefData);
  return (
    <div className="shef-area">
      <Container>
        <SectionTitle
          subtitle="Our Experties"
          title="Meet Our Chef"
          text="They will cook for you"
        ></SectionTitle>
        <div className="all-chefs">
          {/* {chefData.map((chef) => console.log(chef.chef_name))} */}
          {chefData.map((chef) => (
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
                  {/* <p>
                    <span>Likes:</span> {chef.likes}
                  </p> */}
                  <div className="view-recipe-btn">
                    <Link to={`/chefrecipes/${chef.id}`}>
                      <Button>View Recipes</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ChefCard;
