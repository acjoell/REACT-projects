import { useState } from 'react'

export const Counter = () => {
  const [ count, setCount ] = useState(0)
  return (
    <>
      <p>State Hook: {count}</p>
      <button onClick={() => setCount(v => v + 1)}>Incrementar</button>
      <button onClick={() => setCount(v => v - 1)}>Decrementar</button>
    </>
  )
}