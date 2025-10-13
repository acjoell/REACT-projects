import { useEffect, useMemo, useState } from "react";

export const Demo = () => {
  const [count, setCount] = useState(0);

  // ❌ SIN useMemo → se crea un nuevo objeto en cada render
  // const options = { method: "GET" };

  // ✅ CON useMemo → se crea una sola vez
  const options = useMemo(() => ({ method: "GET" }), []);

  useEffect(() => {
    console.log("🔁 useEffect ejecutado");
  }, [options]);

  console.log("🎨 Renderizado:", count);

  return (
    <button onClick={() => setCount(count + 1)}>Incrementar ({count})</button>
  );
};
