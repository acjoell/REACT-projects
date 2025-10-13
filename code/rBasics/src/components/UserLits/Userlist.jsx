import { useFetch } from "./useFetch.js";
import { useMemo } from 'react';

export const UserList = () => {
  const options = useMemo(() => ({ method: "GET" }), []); // ✅ evita recrear el objeto
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    options
  );

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <code className="text-blue-300 hover:text-blue-400">
      {data && <pre>{JSON.stringify(data)}</pre>}
    </code>
  );
};
