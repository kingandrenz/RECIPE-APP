import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import GlobalState from './context/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
