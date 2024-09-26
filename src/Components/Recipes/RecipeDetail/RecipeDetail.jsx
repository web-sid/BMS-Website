import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../../context/context";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const { url } = useContext(StoreContext);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${url}/api/health-recipe/${id}`);
        setRecipe(response.data.data);
      } catch (error) {
        console.error("Error fetching the recipe:", error);
      }
    };

    fetchRecipe();
  }, [id, url]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail-container">
      <div
        className="recipe-header"
        style={{
          backgroundImage: `url(${url}/recipes-img/${recipe.imageUrl})`,
        }}
      >
        <h1 className="recipes-title">{recipe.recipeName}</h1>
      </div>
      <div className="recipe-content">
        <div className="recipe-main">
          <div className="recipe-description">
            <p>{recipe.description}</p>
          </div>
          <div className="recipe-images">
            {recipe.images &&
              recipe.images.map((image, index) => (
                <img
                  key={index}
                  src={`${url}/recipes-img/${image}`}
                  alt={`Recipe step ${index + 1}`}
                />
              ))}
          </div>
          <div className="recipes-instructions">
            <h3>Method:</h3>
            <ul>
              {recipe.instructions.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="recipe-sidebar">
          <div className="recipe-ingredients">
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} - {ingredient.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
