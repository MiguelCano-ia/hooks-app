import { renderHook } from '@testing-library/react';
import { useForm } from './../../src/hooks/useForm';
import { act } from 'react';
describe('Pruebas en el useForm', () => {

  const initialForm = {
    username: 'Fernando',
    email: 'fernando@gmail.com',
    password: '123',
  };

  test('debe de regresar la informacion los valores por defecto', () => {
    const { result } = renderHook(() => useForm( initialForm ));

    expect( result.current ).toEqual({
      email: 'fernando@gmail.com',
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
      password: '123',
      username: 'Fernando',
    });
  });

  test('debe de cambiar el valor del formulario (cambiar username)', () => {
    const { result } = renderHook(() => useForm( initialForm ));
    const { onInputChange } = result.current;
    const newValue = 'Juan';

    act( () => {
      onInputChange({
        target: {
          name: 'username', // a la derecha la propiedad como tal del objeto
          value: newValue,
        }
      });
    });
    expect( result.current.username ).toBe( newValue );
    expect( result.current.formState.username ).toBe( newValue );
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm( initialForm ));
    const { onInputChange, onResetForm } = result.current;
    const newValue = 'Juan';

    act( () => {
      onInputChange({
        target: {
          name: 'username', // a la derecha la propiedad como tal del objeto
          value: newValue,
        }
      });
      onResetForm();
    });
    expect( result.current.username ).toBe( initialForm.username );
    expect( result.current.formState.username ).toBe( initialForm.username );
  });
});
