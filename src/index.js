import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouterComponent />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
