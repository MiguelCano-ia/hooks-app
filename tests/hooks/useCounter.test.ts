import { useCounter } from './../../src/hooks/useCounter';
import { act, renderHook } from '@testing-library/react';

describe('Pruebas en el useCounter', () => {
  test('debe de retornar los valores por defecto', () => {

    // Regresa como se encuentra el hook en ese momento
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, resetCounter } = result.current;

    expect(counter).toBe(10);
    expect( decrement ).toEqual( expect.any( Function ) );
    expect( increment ).toEqual( expect.any( Function ) );
    expect( resetCounter ).toEqual( expect.any( Function ) );
  });

  test('debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter( 100 ));
    const { counter } = result.current;

    expect( counter ).toBe(100);
  });

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter( 100 ));
    const { increment } = result.current;

    act( () => {
      increment();
      /* increment(2); En este caso el resultado no es 103, ya que la prueba usa el retorno del contador actual, para esto tendremos que cambiar la forma en que incrementamos en el useStae.

      const increment = ( factor: number = 1 ) => {
        setCounter( (counter) => counter + factor );
      }
      */
    });

    expect( result.current.counter ).toBe(101);
  });

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter( 100 ));
    const { decrement } = result.current;

    act( () => {
      decrement();
    });

    expect( result.current.counter ).toBe(99);
  });

  test('debe de realizar el reset', () => {
    const { result } = renderHook(() => useCounter( 100 ));
    const { resetCounter, decrement } = result.current;
    

    act( () => {
      decrement();
    });

    expect( result.current.counter ).toBe(99);

    act( () => {
      resetCounter();
    });

    expect( result.current.counter ).toBe(100);
  });
});
