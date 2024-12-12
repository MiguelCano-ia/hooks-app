import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/07-useReducer/TodoApp';
import { useTodo } from '../../src/07-useReducer/hooks/useTodo';

jest.mock('../../src/07-useReducer/hooks/useTodo');


describe('Pruebas en el componente <TodoApp />', () => {

  // Se hace un mock del hook useTodo.
  (useTodo as jest.Mock).mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Aprender React',
        done: true,
      },
      {
        id: 2,
        description: 'Aprender Next',
        done: false,
      }
    ],
    pendingTasks: 1,
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test('debe mostrar el componente correctamente', () => {

    render(
      <TodoApp />
    );

    screen.debug();

    expect( screen.getByText('TodoApp 2,') ).toBeTruthy();
    expect( screen.getByText('pending: 1') ).toBeTruthy();
  });
});
