import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, resetCounter } = useCounter();

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>
      <hr />

      <button onClick={ () => increment(10) } className="btn btn-primary">+1</button>
      <button onClick={ resetCounter } className="btn btn-primary">Reset</button>
      <button onClick={ decrement } className="btn btn-primary">-1</button>
    </>
  )
}
