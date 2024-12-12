import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/07-useReducer/components/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  
  const todo = {
    id: 1,
    description: 'Aprender React',
    done: false,
  };

  //* Mock functions: jest.fn()

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el todo pendiente de completar', () => {
    
    render(
      <TodoItem
        id={ todo.id }
        description={ todo.description }
        done={ todo.done }
        onDeleteTodo={ onDeleteTodoMock }
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );

    const span = screen.getByText( todo.description );
    expect( span.classList.contains('text-decoration-line-through') ).toBe( false );
  });

  test('debe de mostrar el todo completado', () => {
    
    render(
      <TodoItem
        id={ todo.id }
        description={ todo.description }
        done={ true }
        onDeleteTodo={ onDeleteTodoMock }
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );

    const span = screen.getByText( todo.description );
    expect( span.classList.contains('text-decoration-line-through') ).toBe( true );
  });

  test('span debe de llamar el ToggleTodo cuando se hace click', () => {
    
    render(
      <TodoItem
        id={ todo.id }
        description={ todo.description }
        done={ true }
        onDeleteTodo={ onDeleteTodoMock }
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );
    
    const span = screen.getByText( todo.description );
    fireEvent.click( span );
    expect( onToggleTodoMock ).toHaveBeenCalled();
  });

  test('button debe de llamar el DeleteTodo cuando se hace click', () => {
    
    render(
      <TodoItem
        id={ todo.id }
        description={ todo.description }
        done={ true }
        onDeleteTodo={ onDeleteTodoMock }
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );
    
    const button = screen.getByRole('button');
    fireEvent.click( button );
    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
  });
});
