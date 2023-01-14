import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <App />
      </Router>
    </React.Suspense>
  </React.StrictMode>
);
