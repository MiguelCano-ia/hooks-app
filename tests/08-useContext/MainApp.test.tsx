import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/08-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp />', () => {
  
  test('debe de mostrar el HomePage', () => {
    
    render(
      // MemoryRouuter: Permite hacer pruebas de rutas
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('HomePage' ) ).toBeTruthy();
  });

  test('debe de mostrar el LoginPage', () => {
    
    render(
      // initialEntries: Permite definir la ruta inicial
      <MemoryRouter initialEntries={['/login']} >
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('LoginPage' ) ).toBeTruthy();
  });
});
