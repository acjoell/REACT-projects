import { useFetch } from "./useFetch.js";
import { useMemo, useState } from "react";

export const PostList = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [limit] = useState(5);

  const options = useMemo(() => ({ method: "GET" }), []); // ✅ evita recrear el objeto
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    options,
    { title_like: query, _limit: limit } // ✅ params dinámicos
  );

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <input
        type="text"
        className="h-10 border-2 text-center border-blue-500 rounded-md border-solid"

        placeholder="Buscar por título"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setQuery(input)}>Buscar</button>

      <ul>
        {data?.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    </>
  );
};
