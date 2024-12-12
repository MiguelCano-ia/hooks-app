import { ChangeEvent, useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: 'cano',
    email: 'cano@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  useEffect( () => {
    
  }, []);

  useEffect( () => {
    // console.log('formSate changed!')
  }, [formState]);

  useEffect( () => {
    // console.log('email changed!')
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email" 
        className="form-control mt-2"
        placeholder="miguel@gmail.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />
      
      {
        ( username === 'cano1' ) && <Message /> 
      }

    </>   
  )
}
