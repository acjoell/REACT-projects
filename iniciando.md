## **Inicio rápido**

#

### **1.** Instalar react-app y otras herramientas en nuestra carpeta

#

```npm
npx create-react-app my-app
cd my-app
npm start
```
> 1. Instalamos react y otras herramientas para nuestro entorno de trabajo
> 2. Entramos a la carpeta que creamos, en este caso seria **my-app**
> 3. Corremos nuestro servidor de React con `npm start`
> 4. Nota: `npx` viene con `npm` 5.2+ y superior

#

### Reconociendo elementos creados

- `Carpeta src`: Aqui tendremos todo el código fuente de nuestra aplcacion
  - `index.js`: Es el punto de entrada de nuestra aplicación
  - `App.js`: Aqui importamos archivos y exportamos el resultado final de nuestra app

#

### Detalles:

Si usamos `jsx` en un archivo, siempre tenemos que escrbir:

```js
import React from "react";
```

> De esta manera no nos preocupamos de que nos salga error al cargar nuestro código

# 

![](https://i.imgur.com/WN9YFEW.png)