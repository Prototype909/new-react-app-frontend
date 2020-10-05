import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Home from './Containers/HomeContainer.js'
import { render } from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();