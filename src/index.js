import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Navbar from './Navbar.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

reportWebVitals();
