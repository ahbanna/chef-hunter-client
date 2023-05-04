import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";
import "./ChefRecipes.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ChefRecipes = () => {
  const { id } = useParams();
  const [chefData, setChefData] = useState({});
  const [clickedRecipeId, setClickedRecipeId] = useState(null);
  //loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://chef-hunter-server-ahbanna.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setLoading(false);
      });
  }, [id]);

  // toast

  const notify = (recipeId) => {
    setClickedRecipeId(recipeId);
    toast("Added as your favorite!");
  };

  // if (loading) {
  //   return <Spinner animation="border" variant="primary" />;
  // }

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row single-chef-details">
          <div className="col-lg-6">
            <img src={chefData.chef_picture} alt="" />
          </div>
          <div className="col-lg-6 details-content">
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
                      {/* <button onClick={notify}>Make Favorite</button> */}
                      <button
                        className="fevorite-btn"
                        onClick={() => notify(recipe.rating)}
                        disabled={clickedRecipeId === recipe.rating}
                      >
                        Make Favorite
                      </button>
                      <ToastContainer />
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipes;
