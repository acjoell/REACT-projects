import React from "react";
import ReactDOM from "react-dom";

// con JSX:
// const jsx = <h1>Hello, Platzi Badges!</h1>;
// ReactDOM.render(__qué__, __dónde__);

const elementLink = React.createElement(
  "a", // tipo de elemento
  { href: "https://platzi.com" }, // atributos
  "Ruta a Platzi!" // valor del elemento
);
const containerPlatzi = document.getElementById("link");
ReactDOM.render(elementLink, containerPlatzi);

// ----   ----   ----   ----
// ----   ----   ----   ----

const sum = () => 3 + 3; // Expresion: algo que se va a interpretar y a evaluar, asi como una suma
const elementSum = React.createElement(
  "h1",
  {},
  `La suma de 3 + 3 es ${sum()}`
);
const containerSum = document.getElementById("sum");
ReactDOM.render(elementSum, containerSum);

// ----   ----   ----   ----
// ----   ----   ----   ----

const elementDiv = React.createElement(
    'div', // tipo de elemento
    {}, // atributo
    React.createElement('h3',{},'Hola, soy Desarrollador'), // children
    React.createElement('p',{},'Soy desarrollador de la web') // children
);
const containerDiv = document.getElementById("div");
ReactDOM.render(elementDiv, containerDiv)