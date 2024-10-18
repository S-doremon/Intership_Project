import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeList = ({ recipes, viewRecipe }) => {
  const navigate = useNavigate();

  const handleViewRecipe = (recipe) => {
    viewRecipe(recipe);
    navigate('/view-recipe'); 
  };

  return (
    <div className="row">
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id} className="col-md-4">
            <div className="card mb-4">
              <img 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }}
                src={recipe.image || 'https://via.placeholder.com/150'} 
                className="card-img-top" 
                alt={recipe.name} 
              />
              <div className="card-body">
                <h5 className="card-name">{recipe.name || 'Unnamed Recipe'}</h5>
                <h6>Ingredients:</h6>
                <p className="card-text">
                  {recipe.ingredients ? recipe.ingredients.join(', ') : 'No ingredients available'}
                </p>
                <button 
                  onClick={() => handleViewRecipe(recipe)} 
                  className="btn btn-primary"
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes available!</p>
      )}
    </div>
  );
};

export default RecipeList;

