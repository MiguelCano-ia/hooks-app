import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/08-useContext/context/UserContext';
import { LoginPage } from '../../../src/08-useContext/components/LoginPage';

describe('Pruebas en <LoginPage />', () => {

  const user = {
    id: 1,
    name: 'Julieta',
    email: 'juli@gmail.com',
  };
  

  test('debe mostrar el componente sin el usuario', () => {
    
    render(
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe( 'null' );
  });

  test('debe llamar el setUser cuando se hace click en el boton', () => {
    
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole( 'button' );
    fireEvent.click( button );
    expect( setUserMock ).toHaveBeenCalled();
    expect( setUserMock ).toHaveBeenCalledWith( user );
  });
});
