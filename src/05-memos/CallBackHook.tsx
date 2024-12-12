import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

  const [counter, setCounter] = useState( 10 );

  const incrementFather = useCallback(
    () => {
      setCounter( (value) => value + 1 );
    },
    [],
  )
  

  // const increment = () => {
  //   setCounter( counter + 1 );
  // }

  return (
    <>
      <h1>useCallBack Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather } />
    </>
  )
}
