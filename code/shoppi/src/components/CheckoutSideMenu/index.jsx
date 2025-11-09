import { Link } from "react-router-dom";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { totalPrice } from "../../utils";
import { OrderCard } from "../OrderCard";

export const CheckoutSideMenu = () => {
  const {  isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, deleteCartProduct, orderToAdd } = useShoppingCart();

  return (
    <aside className={`${isCheckoutSideMenuOpen ? "translate-x-0" : "translate-x-full"} top-[68px] w-[360px] h-[calc(100vh-68px)] border-l border-gray-800 bg-white fixed right-0 flex flex-col border rounded transition-transform z-[9999]`}>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="font-medium text-xl">My Order</h1>
        <div className="absolute right-4 top-4 cursor-pointer" onClick={closeCheckoutSideMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col p-4">
          {cartProducts.length === 0 ? ( 
            <p className="text-center">No products in the cart</p>
          ) : ( /* Mostrar los productos en el carrito */
            cartProducts.map((product) => {
              return (
              <OrderCard {...product} handleDelete={deleteCartProduct} key={product.id} />
              )
            })
          )
          }
        </div>
        <div className="p-4 border-black border-2 w-auto mt-8 rounded-lg">
          <span className="flex justify-between mb-4">
            <span className="font-medium text-lg">Total:</span>
            <span className="font-medium text-lg">
              ${totalPrice(cartProducts)}
            </span>
          </span>
          <Link to="/my-orders/last">
            <button className="cursor-pointer bg-black text-white w-46 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={orderToAdd}>Checkout</button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
