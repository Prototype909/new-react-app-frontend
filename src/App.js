import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import HomeContainer from './Components/HomeContainer.js';
import RecipesContainer from './Containers/RecipesContainer.js';
import { NavBar} from './Components/NavBar'


const App = (props) => {
  return (
    <div><NavBar/>
    <Router>
      <div className="App">
        <Switch>
          < Route path='/recipes' component={RecipesContainer}/>
          < Route exact path='/' component={HomeContainer} />          
        </Switch>
      </div>
    </Router>
    </div>
  );
};

export default App;