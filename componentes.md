## **1. ¿Qué es un componente?**

Son bloques de construcción, junta varias piezas (los componentes) y puedes construir un website del tamaño que quieras.

#
## **2. Componente vs Elemento**

1. **Componente:** Es como la clase
2. **Elemento:** Es como el objeto de la clase

- **Ejemplo:** El *elemento* seria una casa y el *componente* serian los planos de esta.

#
## **3. Identificando componentes**

- Dos preguntas guías:
  - ¿Qué elementos se repiten?
    - Elementos en una lista
    - Elementos que comparten aspecto visual y/o funcionalidad
  - ¿Qué elementos cumplen una función muy específica?
    - Sirven para encapsular lógica
    - Permiten juntar muchos comportamientos y aspectos visuales en un solo lugar

#
## **4. Ciclo de vida de un componente**

1. **Montaje** 
Cuando creamos nuestros componentes, así como, sillas, mesas o menus.

2. **Actualizacón**
Cuando actualizamos se ejecuta el render() generando un nuevo DOM
Luego componentDidUpdate() es la reacción a cambios

3. **Eliminarlo del DOM**
AL irnos a otra página muchos componentes tendran que desaparecer
Luego componentWillUnmount() eliminara el código del DOM

> **Nota:** Los componentes en React tienen vida; nacen, crecen y desaperecen. Por lo cual tienen tres fases el **montaje**, la **actualización** y la **eliminación** de los componentes.

#
## **5. Configuración de VS Code y la extension de React-Dev**

**1. Autocompletar código JSX**

   - Dentro de VS Code oprime las teclas ```Ctrl + ,```
   - Luego busca el archivo ```settings.json```
   - Inserta el siguiente código:
   
```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true
```

**2. Visualizar los componentes del DOM**

   - Dentro de tu navegador oprime las teclas ```Ctrl + Shift + i```
   - Luego busca el apartado llamado ```Components```
   - Dale click a la rueda de configuración
   - Deja la configuración de la siguiente manera:

![vista desde del navegador](https://static.platzi.com/media/user_upload/error-react-d93e6f38-c1d3-461d-b11e-869f73d5edd0.jpg)