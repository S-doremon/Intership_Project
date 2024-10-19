import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null); // Track logged-in user

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  //After adding a recipe, save the recipes array to local storage.
  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: recipes.length + 1 }]);
  };

  const viewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleLogin = (userData) => {
    setUser(userData); // Set the logged-in user data
  };

  const handleLogout = () => {
    setUser(null); // Clear the user data on logout
  };

  const filteredRecipes = recipes.filter(recipe =>
    (recipe.title && recipe.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (recipe.ingredients && recipe.ingredients.join(', ').toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Router>
      <div>
        {user && <Navbar onLogout={handleLogout} />}
        <div className="container my-4">
          <Routes>
            <Route
              path="/"
              element={user ? (
                <>
                  <h1>All Recipes</h1>
                  <input 
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control mb-3"
                  />
                  <RecipeList recipes={filteredRecipes} viewRecipe={viewRecipe} />
                </>
              ) : (
                <Navigate to="/login" />
              )}
            />

            <Route
              path="/add-recipe"
              element={user ? (
                <>
                  <h2>Add a New Recipe</h2>
                  <RecipeForm addRecipe={addRecipe} />
                </>
              ) : (
                <Navigate to="/login" />
              )}
            />

            <Route
              path="/view-recipe"
              element={user ? (
                selectedRecipe ? (
                  <RecipeDetails recipe={selectedRecipe} />
                ) : (
                  <h2>Please select a recipe to view.</h2>
                )
              ) : (
                <Navigate to="/login" />
              )}
            />

            <Route
              path="/login"
              element={
                user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
              }
            />

            <Route
              path="/signup"
              element={
                user ? <Navigate to="/" /> : <Signup onSignup={handleLogin} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
