import { useEffect, useReducer } from "react";
import { Todo } from "../components/TodoList";
import { todoReducer } from "../todoReducer";


const initialState: Todo[] = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Learn React',
  //   done: false,
  // },
];

const init = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    
    }, [todos])
  
    const handleNewTodo = ( todo: Todo ) => {
      const action = {
        type: '[TODO] Add todo',
        payload: todo,
      }
      dispatch( action );
    }
  
    const handleDeleteTodo = ( todoId: number ) => {
      const action = {
        type: '[TODO] Delete todo',
        payload: { id: todoId },
      }
  
      dispatch( action ); 
    }
  
    const onToggleTodo = ( todoId: number ) => {
      const action = {
        type: '[TODO] Toggle todo',
        payload: { id: todoId },
      }
  
      dispatch( action );
    }

    const pendingTasks = todos.filter( todo => !todo.done ).length;
    
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    pendingTasks
  }
}