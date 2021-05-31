import React from "react";
import ReactDOM from "react-dom";
// npm install bootstap para instalar bootstrap y utilizarlo
// a dia de hoy (20-05-2021) el archivo a llamar es bootstrap-grid.css
import 'bootstrap/dist/css/bootstrap-grid.css';
import './global.css'

// importamos nuestro componente
import Badge from "./components/Badge";

const container = document.getElementById("app");
// Darle etiquetas autocerradas al nuevo elemento que importamos
ReactDOM.render(<Badge firstName="Joel" lastName="Acosta" />, container);