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
          <div className="col-lg-6">
            {/* <h4>{chefData.chef_name}</h4> */}
            <h4>{chefData.chef_name}</h4>
            <p>{chefData.bio}</p>
            <p>
              <span>Likes: </span>
              {chefData.likes}
            </p>
            <p>
              <span>number of recipes: </span>
              {chefData.num_recipes}
            </p>
            <p>Years of experience: {chefData.experience}</p>
          </div>
        </div>
      </div>
      {/* <h1>{chefData.chef_name}</h1>
      <p>Years of experience: {chefData.experience}</p> */}
    </div>
  );
};

export default ChefRecipes;
