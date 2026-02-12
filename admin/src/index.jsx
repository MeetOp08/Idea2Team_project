/**
 * Application Entry Point
 * 
 * This file initializes the React application and mounts it to the DOM.
 * All global styles are imported here, and CSS variables are defined in App.css.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Verify root element exists before mounting
if (!rootElement) {
  throw new Error(
    "Root element with id 'root' not found. Please check your public/index.html file."
  );
}

// Create and render the React application in strict mode
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
