
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { Global } from './styles/Globals';
import store from './store/store';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <React.StrictMode>
    <Global />
    <App />
    </React.StrictMode>
  </Provider>
  
  

);
