# **React route**

*Es una libreria OpenSource, que nos da una muy buena experiencia de usuario (UX) al no perder toda la informacion.*

**1. Nos da las herramientas para poder hacer SPA facilmente**

**2. Usaremos 4 componentes:**
  - BrowserRouter
  - Route
  - Switch
  - Link

---
---

### **BrowserRouter:** 
*Es necesario colocar el componente en la parte superior de la aplicación, lo que esté dentro de este va a servir como una **Single Page App** y les va a permitir al resto de las herramientas funcionar. Ya que fuera de él **NO** Funciona.*

### **Route:**
*Representa una dirección de Internet, el path es donde va a renderizar el componente y el componente es el componente que va a renderizar, usualmente es una página.*

### **Switch:**
*Componente que nos sirve para representar una sola ruta de varias que podemos poner dentro del componente.*

### **Link:**
*Toma el lugar del elemento ancla, evita que se recargue completamente la página, actualiza la URL sin recargar la página completa.*

---
---

## **Multi Page Apps (MPA):**

*Cada pagina implica una peticion al servidor. La respuesta usualmente tiene todo el contenido de la pagina.*

*Por cada pagina o direccion de internet hay que volver a obtener todos los datos, pintarlos, rendizarlos completamente.*

## **Single Page Apps (SPA):**

*Aplicaciones que cargar una sola pagina de HTML y cualquier actualizacion la hacer re-escribiedo el HTML que ya tenia.*

*No pides todos los datos, solo pedimos los datos necesarios para esa pagina y asi evitamos renderizar la pagina completamente.*

``NOTA: Las aplicaciones con las que solemos trabajar en React tienen un nombre Single Page Apps``

---

## **Instalacion**

En nuestro proyecto instalamos React Router...

```sh
npm install react-router-dom #or
yarn add react-router-dom
```

