import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //  主要全域的CSS
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
