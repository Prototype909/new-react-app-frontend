import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Home from './Containers/HomeContainer.js'
import { createStore, applyMiddleware } from 'redux';
import RecipeReducer from './Reducers/RecipeReducer'
import thunk from 'redux-thunk'

const store = createStore(RecipeReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();