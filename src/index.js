import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// import router
import { BrowserRouter as Router } from 'react-router-dom';

//import house context provider
import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </HouseContextProvider>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
