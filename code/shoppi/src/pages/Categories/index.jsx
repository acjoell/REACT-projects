import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../../rBasics/src/components/UserLits/useFetch";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

const GetCategoriesByName = ({ limit }) => {
  const { categoryName } = useParams();
  const options = useMemo(() => ({ method: "GET" }), []); // ✅ evita recrear el objeto
  const { data, isLoading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products`,
    options,
    { 
      categorySlug: categoryName, // búsqueda por categoría
      limit: limit, // limitación de productos
      offset: 0 // desde el inicio
    }
  )
  
  return { categoryName, data, isLoading, error };
};

export const Category = () => {
  const [limit] = useState(12);
  const { categoryName, data, isLoading, error } = GetCategoriesByName({ limit });

  return (
    <div className="flex justify-center flex-col items-center mt-8">

      <h1 className="font-medium text-2xl mb-6">{categoryName}</h1>

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
