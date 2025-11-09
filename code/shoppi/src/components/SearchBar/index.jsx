import { useShoppingCart } from "../../hooks/useShoppingCart";

export const SearchBar = () => {
  const { input, setInput, setQuery } = useShoppingCart();
  return (
    <div className="flex flex-row gap-2 rounded-full mb-4">
      <input
        type="text"
        className="h-10 border-2 text-center border-gray-500 rounded-md border-solid focus:outline-none focus:border-blue-300 transition-colors duration-200"
        placeholder="Buscar por título"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => setQuery(input)}
        className="h-10 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Buscar
      </button>
    </div>
  )
};
