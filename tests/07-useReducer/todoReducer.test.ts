import { todoReducer } from '../../src/07-useReducer/todoReducer';
describe('Pruebas en todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }];
 
  test('debe de regresar el estado inicial', () => {
  
    const newState = todoReducer( initialState, {} );

    // Misma referencia entonces toBe
    expect ( newState ).toBe( initialState );
  });

  test('debe agregar un todo', () => {
    
    const action = {
      type: '[TODO] Add todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      }
    };

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( 2 );
    // Tiene la propiedad.
    expect( newState ).toContain( action.payload );
  });

  test('debe eliminar un todo', () => {
    
    const action = {
      type: '[TODO] Delete todo',
      payload: {
        id: 1,
      }
    };

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe(0);
  });

  test('debe de realizar el toggle del todo', () => {

    const action = {
      type: '[TODO] Toggle todo',
      payload: {
        id: 1,
      }
    };

    const newState = todoReducer( initialState, action );
    expect( newState[0].done ).toBe( true );
  });
});
