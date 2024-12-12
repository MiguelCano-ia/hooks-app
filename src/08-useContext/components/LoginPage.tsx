import { useContext } from "react"
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {

  const userContext = useContext( UserContext );

  if (!userContext) {
    return <div>Loading...</div>;
  }

  const { user, setUser } = userContext;

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify( user, null, 4 ) }
      </pre>

      <button
        className="btn btn-primary"
        onClick={ () => setUser({ id: 1, name: 'Julieta', email: 'juli@gmail.com' }) }
      >
        Establecer usuario
      </button>
    </>
  )
}
