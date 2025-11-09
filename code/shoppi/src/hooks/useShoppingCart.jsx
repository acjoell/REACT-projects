import { useContext } from "react";
import { ShoppingCartContext } from "../context/index.jsx";

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}
