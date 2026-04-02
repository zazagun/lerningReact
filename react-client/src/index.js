import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import NavigBar from "./components/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoProcess from './components/InfoProcess.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigBar />
    <InfoProcess />
    <App />
  </React.StrictMode>
)
