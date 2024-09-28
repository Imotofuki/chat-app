import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
