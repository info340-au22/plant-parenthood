import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'whatwg-fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* current page displayed for testing */}
    <App />
  </React.StrictMode>
);


// reportWebVitals();
