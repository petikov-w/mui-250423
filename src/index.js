
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from './styles/Globals';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Global /> */}
    <App />
  </React.StrictMode>

);
