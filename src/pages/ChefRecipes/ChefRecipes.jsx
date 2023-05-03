// import React from "react";
// import { useLoaderData } from "react-router-dom";

// const ChefRecipes = () => {
//   const chefs = useLoaderData();
//   const { id, experience, chef_name } = chefs;
//   return (
//     <div>
//       <h2>This is chef receips</h2>
//       <h2>Name: {chef_name}</h2>
//     </div>
//   );
// };

// export default ChefRecipes;

////////////////////////
// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const ChefRecipes = () => {
//   const chefs = useLoaderData();
//   const chefId = useParams().id; // get the chef ID from the URL parameter
//   const chef = chefs.find((chef) => chef.id === parseInt(chefId)); // find the chef with the matching ID
//   return (
//     <div>
//       <h2>This is chef recipes</h2>
//       <h2>Name: {chef.chef_name}</h2>
//       <p>Experience: {chef.experience}</p>
//       <p>Number of recipes: {chef.num_recipes}</p>
//     </div>
//   );
// };

// export default ChefRecipes;

////////////////////////
// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const ChefRecipes = () => {
//   const { id } = useParams();
//   const [chefData, setChefData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/chef/${id}`)
//       .then((res) => res.json())
//       .then((data) => setChefData(data));
//   }, [id]);

//   if (!chefData) {
//     return <div>Loading...</div>;
//   }

//   const { chef_name, chef_picture, experience, num_recipes } = chefData;

//   return (
//     <div>
//       <h2>{chef_name}'s Recipes</h2>
//       <img src={chef_picture} alt={chef_name} />
//       <p>Experience: {experience}</p>
//       <p>Number of recipes: {num_recipes}</p>
//       <p>Insert recipes here...</p>
//     </div>
//   );
// };

// export default ChefRecipes;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./ChefRecipes.css";

const ChefRecipes = () => {
  const { id } = useParams();
  const [chefData, setChefData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row single-chef-details">
          <div className="col-lg-6">
            <img src={chefData.chef_picture} alt="" />
          </div>
          <div className="col-lg-6 details-content">
            {/* <h4>{chefData.chef_name}</h4> */}
            <h4>{chefData.chef_name}</h4>
            <p className="bio">
              <span>Bio: </span>
              {chefData.bio}
            </p>
            <p>
              <span>Likes: </span>
              {chefData.likes}
            </p>
            <p>
              <span>Number of recipes: </span>
              {chefData.num_recipes}
            </p>
            <p>
              <span>Years of experience: </span> {chefData.experience}
            </p>
          </div>
        </div>

        {/* <div className="special-recipes">
          <h3>{chefData.chef_name}Special Recipes</h3>
          <Card style={{ width: "25rem" }}>
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
        <div className="special-recipes">
          <h3>{chefData.chef_name} Special Recipes</h3>
          <div className="all-recipes">
            {chefData.recipes &&
              chefData.recipes.map((recipe) => (
                <div className="single-recipe">
                  <Card key={recipe.name} style={{ width: "25rem" }}>
                    <Card.Header>{recipe.name}</Card.Header>
                    <Card.Img variant="top" src={recipe.recipe_img} />
                    <Card.Body>
                      {/* <img src={recipe.recipe_img} alt="" /> */}
                      <Card.Text>
                        <h6>Ingredients: </h6>
                        <ul>
                          {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                          ))}
                        </ul>
                        <p>
                          <span>Cooking Method: </span>
                          {recipe.cooking_method}
                        </p>
                      </Card.Text>
                      <p>
                        <span>Rating: </span> {recipe.rating}
                      </p>
                      <Button variant="primary">Favorite</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;