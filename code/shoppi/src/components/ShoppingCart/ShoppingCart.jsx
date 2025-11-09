import { useShoppingCart } from "../../hooks/useShoppingCart.jsx"

// Icono SVG de la Cesta de Compras (Heroicons Outline)
const ShoppingBagSVG = ({ className = "h-6 w-6", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor" 
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
    />
  </svg>
)

/**
 * Componente que muestra el ícono del carrito con el contador de items.
 * Diseñado para ser usado en una barra de navegación.
 * * @param {number} itemCount - El número de items en el carrito.
 */
export const ShoppingCartIconWithCount = () => {
  const { count, isCheckoutSideMenuOpen, closeCheckoutSideMenu, openCheckoutSideMenu } = useShoppingCart()
  return (
    <div className="flex items-center pb-1 text-gray-800 hover:text-gray-500"
      onClick={isCheckoutSideMenuOpen ? closeCheckoutSideMenu : openCheckoutSideMenu}>
      <ShoppingBagSVG />
      {/* Contador del Carrito */}
      <span className="text-sm font-medium text-gray-700">
        {count}
      </span>
    </div>
  );
}