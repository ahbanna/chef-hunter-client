import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./ChefCard.css";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  console.log(chefData);
  return (
    <div className="shef-area">
      <div className="container">
        <div>
          <h3>Meet Our Chefs</h3>
        </div>
        <div className="all-chefs">
          {/* {chefData.map((chef) => console.log(chef.chef_name))} */}
          {chefData.map((chef) => (
            <div className="single-chef">
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={chef.chef_picture} />
                <Card.Body>
                  <Card.Title>{chef.chef_name}</Card.Title>
                  <p>
                    <span>Years of experience:</span> {chef.experience}
                  </p>
                  <p>
                    <span>Numbers of recipes:</span> {chef.num_recipes}
                  </p>
                  <p>
                    <span>Likes:</span> {chef.likes}
                  </p>

                  <Button>View Recipes</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;