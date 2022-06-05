import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Assets/vendor/animate.css/animate.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Assets/vendor/swiper/swiper-bundle.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Assets/vendor/swiper/swiper-bundle.min.js"
const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
reportWebVitals();
