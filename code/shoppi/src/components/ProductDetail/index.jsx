import { useShoppingCart } from "../../hooks/useShoppingCart";

export const ProductDetail = () => {
  const { isProductDetailOpen, toggleProductDetail, productToShow } = useShoppingCart();
  return (
    <aside
      className={`${isProductDetailOpen ? "translate-x-0" : "translate-x-full"} top-[68px] w-[360px] h-[calc(100vh-68px)] border-l border-gray-800 bg-white
      fixed right-0 flex flex-col border rounded transition-transform`}
    >
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="font-medium text-xl">Product Detail</h1>
        <div className="absolute right-4 top-4 cursor-pointer" onClick={toggleProductDetail}>
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
          <figure>
            <img src={productToShow.images?.[0]} alt={productToShow.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
          </figure>
          <div className="flex flex-col">
            <h2 className="font-medium text-lg">{productToShow.title}</h2>
            <p className="text-sm text-gray-600 mt-2 ">{productToShow.description}</p>
            <span className="text-lg font-medium">${productToShow.price}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
