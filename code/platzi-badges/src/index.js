import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "bootstrap/dist/css/bootstrap-grid.css";

import BadgeNew from "./pages/BadgeNew.js";

const container = document.getElementById("app");
ReactDOM.render(<BadgeNew />, container);