
import { useShoppingCart } from "../../hooks/useShoppingCart"

const RenderIcon = (id) => {
  const { cartProducts } = useShoppingCart();
  const isInCart = cartProducts.some((product) => product.id === id);
    return isInCart ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  )
}

export const Card = ({ data }) => {
  // const { count, setCount } = useContext(ShoppingCartContext) // para utilizar el contexto sin el custom hook
  const { increment, isProductDetailOpen, toggleProductDetail, setProductToShow, setCartProducts, isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu } = useShoppingCart();

  const showProduct = (data) => {
    if (isProductDetailOpen) {
      setProductToShow(data)
    } else {
      closeCheckoutSideMenu() // se cierra el menu del carrito si esta abierto
      toggleProductDetail() // se abre el detalle del producto
      setProductToShow(data)
    }
  }

  const addProduct = (e, data) => {
    e.stopPropagation(); // para evitar que se dispare el evento del padre
    increment(); // se incrementa el contador del carrito
    setCartProducts((prev) => [...prev, data]); // se agrega el producto al carrito manteniedo los anteriores
    
    isProductDetailOpen && toggleProductDetail(); // si el detalle del producto esta abierto, se cierra
    isCheckoutSideMenuOpen ? undefined : openCheckoutSideMenu(); // se abre el menu del carrito
  }

  return (
    <div onClick={() => showProduct(data)}
    className="bg-white cursor-pointer w-60 h-64 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category?.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images?.[0]} alt={data.title} />
        <button 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(e) => addProduct(e, data)}
        >
          {RenderIcon(data.id)}
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="mt-1 text-sm font-light truncate">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

