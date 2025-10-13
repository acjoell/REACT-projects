import { useReducer } from "react";

// Switch para cambiar entre estados
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case "reset":
      return { count: 0 }
    default:
      return state
  }
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }) // Se pasa el switchCase y un estado inicial
  return (
    <>
      <p>Reducer Hook: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reiniciar</button>
    </>
  );
};
