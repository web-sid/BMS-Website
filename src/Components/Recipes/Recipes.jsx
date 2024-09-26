import { useContext } from "react";
import "./Recipes.css";
import { StoreContext } from "../../context/context";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { url, recipes } = useContext(StoreContext);
  const newUrl = url + "/recipes-img/";

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Healthy & Delicious Recipes</h1>
      <div className="recipe-section">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <div className="image-container">
              <img
                src={`${newUrl}${recipe.imageUrl}`}
                className="recipe-image"
              />
            </div>
            <div>
              <h2 className="recipe-name">{recipe.recipeName}</h2>
            </div>
            <Link to={`/recipes/${recipe._id}`}>
              <button className="recipe-instructions">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
