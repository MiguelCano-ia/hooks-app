import { useContext } from "react"
import { UserContext } from "../context/UserContext";

export const HomePage = () => {

  const userContext = useContext(UserContext);
  const user = userContext ? userContext.user : null;

  return (
    <>
      <h1>HomePage  <small>{ user?.id }</small></h1>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify( user, null, 4 ) }
      </pre>
    </>
  )
}
