import { createContext, useState } from "react";
import { totalPrice } from "../utils";

// Lo recomendable seria crear un arcihvo para cada contexto,
// pero para este ejemplo lo haremos en un solo archivo.
/* eslint-disable react-refresh/only-export-components */
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Estados globales
  // Incrementar y decrementar carrito de compras
  const [count, setCount] = useState(0);
  // Mostrar u ocultar el detalle del producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  // Mostrar u ocultar la ordern del carrito
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  // estado para almacenar el producto a mostrar en el detalle
  const [productToShow, setProductToShow] = useState({});
  // productos carrito
  const [cartProducts, setCartProducts] = useState([]);
  // ordenes pasadas (historial)
  const [order, setOrder] = useState([]);
  // get products by title
  const [ input, setInput ] = useState("");
  const [ query, setQuery ] = useState("");

  // custom functions to modify the states
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const toggleProductDetail = () => setIsProductDetailOpen((prev) => !prev); // se muestra o se oculta el detalle del producto
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true); // se muestra la orden del carrito
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false); // se oculta la orden del carrito
  const deleteCartProduct = (id) => { // elimina un producto del carrito por su id
    const productIndex = cartProducts.filter((product) => product.id !== id)
    setCartProducts(productIndex);
    decrement();
  }
  const orderToAdd = () => { // agrega una nueva orden al historial
    const orderDetails = {
      id: Date.now(),
      ...cartProducts,
      length: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    };
    setOrder((prevOrders) => [...prevOrders, orderDetails]);
    closeCheckoutSideMenu();
    setCartProducts([]);
    setCount(0);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        // Shopping cart
        count,
        increment,
        decrement,
        // Product detail
        isProductDetailOpen,
        toggleProductDetail,
        // Product to show
        productToShow,
        setProductToShow,
        // Cart products
        cartProducts,
        deleteCartProduct,
        setCartProducts,
        // Checkout side menu
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        // Orders
        order,
        orderToAdd,
        setOrder,
        // Search products
        input,
        setInput,
        query,
        setQuery,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
