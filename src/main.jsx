import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "twopi-rest/dist/index.css";
import { makeServer } from "./backend/server";
import { BrowserRouter as Router } from "react-router-dom";
makeServer();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
