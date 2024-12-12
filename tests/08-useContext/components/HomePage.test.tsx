import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/08-useContext/context/UserContext';
import { HomePage } from '../../../src/08-useContext/components/HomePage';

describe('Pruebas en <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Miguel',
    email: 'miguel@gmail.com',
  };
  
  test('debe de mostrar el componente sin el usuario', () => {
    
    // Para renderizar el componente HomePage, necesitamos el contexto de UserContext.
    render(
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe( 'null' );
  });
  
  test('debe de mostrar el componente CON el usuario', () => {
    
    render(
      <UserContext.Provider value={{ user, setUser: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe( JSON.stringify( user, null, 4 ) );
  });
});
