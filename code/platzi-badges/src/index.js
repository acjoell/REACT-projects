import React from "react";
import ReactDOM from "react-dom";
// importamos nuestro componente
import Badge from "./components/Badge";

const container = document.getElementById("app");
// Darle etiquetas autocerradas al nuevo elemento que importamos
ReactDOM.render(<Badge />, container);