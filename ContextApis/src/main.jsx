import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import UserContexProvider from "./ContextApi/UserContexProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContexProvider>
      <Router>
        <App />
      </Router>
    </UserContexProvider>
  </React.StrictMode>
);
