import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddProductProvider from './contexts/AddProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddProductProvider>
      <App />
    </AddProductProvider>
  </React.StrictMode>
);

