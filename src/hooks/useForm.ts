import { ChangeEvent, useState } from "react";

interface FormState {
  username: string,
  email: string,
  password: string,
}

export const useForm = ( initialForm: FormState ) => {
  
  const [formState, setFormState] = useState<FormState>( initialForm );

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  return {
    formState,
    ...formState, // Pasamos las propiedades del formulario
    onInputChange,
    onResetForm,
  }
}
