import { useEffect, useState } from 'react'

export const EffecCounter = () => {
  const [ count, setCount ] = useState(0)

  useEffect(() => console.log(`Contador: ${count}`), [count]) // (Funcion, Dependencia)

  return (
    <>
      <p>Efect Hook: {count}</p>
      <button onClick={() => setCount(v => v + 1)}>Incrementar</button>
    </>
  )
}