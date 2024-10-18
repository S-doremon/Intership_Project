import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      ...recipe,
      ingredients: recipe.ingredients.split(',').map(ingredient => ingredient.trim()),
    });
    setRecipe({ name: '', ingredients: '', instructions: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Recipe Title</label>
        <input 
          type="text" 
          name="name" 
          value={recipe.name} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label>Ingredients (comma separated)</label>
        <input 
          type="text" 
          name="ingredients" 
          value={recipe.ingredients} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label>Instructions</label>
        <textarea 
          name="instructions" 
          value={recipe.instructions} 
          onChange={handleChange} 
          className="form-control" 
          required 
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input 
          type="text" 
          name="image" 
          value={recipe.image} 
          onChange={handleChange} 
          className="form-control" 
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
