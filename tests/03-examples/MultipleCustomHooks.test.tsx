import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn();

  (useCounter as jest.Mock).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {

    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
    
    render( <MultipleCustomHook /> );
    expect( screen.getByText('Informacion de Pokemon') );
    expect( screen.getByText('Cargando') );
  });

  test('debe mostrar un Pokemon', () => {

    // Hacer el as por ts
    (useFetch as jest.Mock).mockReturnValue({
      data: {
        name: 'Pikachu',
        sprites: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    });
    
    render( <MultipleCustomHook /> );
    const pikachuName = screen.getByRole('heading', { level: 2 });
    expect( pikachuName.textContent ).toBe('1 - Pikachu');
  });

  test('debe de incrementar el contador', () => {

    (useFetch as jest.Mock).mockReturnValue({
      data: {
        name: 'Pikachu',
        sprites: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    });
    
    render( <MultipleCustomHook /> );
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled();
  });
});
