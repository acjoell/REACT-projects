import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "bootstrap/dist/css/bootstrap-grid.css";

import BadgeNew from "./pages/BadgeNew.js";
import Badges from "./pages/Badges.js";

const container = document.getElementById("app");
ReactDOM.render(<Badges />, container);