import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'twopi-rest/dist/index.css';
import { makeServer } from './backend/server';
makeServer();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
