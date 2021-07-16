# **Ciclo de vida de un componente**

## **1. Montaje**

Representa el momento donde se inserta codigo del componente en el DOM.

Se llaman tres metodos: 
- **contructor** (inicializar valores)
- **render** (calcular e introducir)
- **componentDidMount** (se visualiza)

## **2. Actualiacion**

Ocurre cuando los props o el estado del componente cambia.

Se llaman dos metodos:
- **render** (cambia de aspecto visual)
- **componentDidUpdate** (recibe props y estados anteriores)

## **3. Desmontaje**

Nos da la oportunidad de hacer limpieza de nuestro componente.

Se llama un metodo:
- **componentWillUnmount** (lugar para limpiar memoria)