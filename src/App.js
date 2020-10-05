import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer.js';
import RecipesContainer from './Containers/RecipesContainer.js';
import CreateRecipeContainer from './Containers/CreateRecipeContainer.js';
import RecipeShowContainer from './Containers/RecipeShowContainer.js';


const App = (props) => {
  return (
    <Router>
      <div className="App">
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/recipes' component={RecipesContainer} />
      <Route exact path='/createrecipe' component={CreateRecipeContainer} />
      <Route path='/recipes/:id' component={RecipeShowContainer} />
      </div>
    </Router>
  );
};

export default App;