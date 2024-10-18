import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipe }) => {
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found. Please go back to the home page.</h2>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.name || "Untitled Recipe"}</h2>
      {recipe.image && <img 
      style={{ 
        width: '50%', 
        height: '500px', 
        objectFit: 'cover', 
        borderRadius: '10px' 
      }}
      src={recipe.image} alt={recipe.name} className="img-fluid" />}
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions || "No instructions available."}</p>
      <button onClick={() => navigate('/')} className="btn btn-secondary">Back to All Recipes</button>
    </div>
  );
};

export default RecipeDetails;
