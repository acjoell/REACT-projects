import { useEffect, useMemo, useState } from "react";
import { useFetch } from "../../../../rBasics/src/components/UserLits/useFetch";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { SearchBar } from "../../components/SearchBar";


const GetProductsByPlatzi = ({ limit }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=0`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.error("Error fetching products:", e.message));
  }, [limit]);

  return data;
};

const GetProductsByMe = ({ limit, query }) => {
  const options = useMemo(() => ({ method: "GET" }), []); // ✅ evita recrear el objeto
  const { data, isLoading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products`,
    options,
    { 
      title: query, // búsqueda por título (vacío para no filtrar)
      limit: limit, // limitación de productos
      offset: 0 // desde el inicio
    }
  )
  
  return { data, isLoading, error };
};

export const Home = () => {
  const { query } = useShoppingCart();
  const [limit] = useState(12);
  //const data = GetProductsByPlatzi({ limit });
  const { data, isLoading, error } = GetProductsByMe({ limit, query });
  
  return (
    <div className="flex justify-center flex-col items-center mt-8">
      
      <h1 className="font-medium text-2xl mb-6">Home</h1>
      <section className="h-full flex flex-col items-center">
        <p className="text-gray-600 text-sm mb-2">Explora nuestra variedad de productos</p>
        <SearchBar />
      </section>

      {isLoading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error.message}</p>}

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
        {data?.map((i) => (
          <Card key={i.id} data={i} />
        ))}
      </section>
      <ProductDetail />
    </div>
  );
};
