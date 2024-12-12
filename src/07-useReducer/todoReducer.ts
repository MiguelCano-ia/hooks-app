import { Todo } from "./components/TodoList";

interface Action {
  type: string;
  payload: Todo;
}

export const todoReducer = ( initialState: Todo[] = [], action: Action ) => {

  switch ( action.type ) {
    case '[TODO] Add todo':
      return [ ...initialState, action.payload ];

    case '[TODO] Delete todo':
      return initialState.filter( todo => todo.id !== action.payload.id );  

    case '[TODO] Toggle todo':
      return initialState.map( todo => 
        ( todo.id === action.payload.id )
          ? { ...todo, done: !todo.done }
          : todo
      );
    
    default:
      return initialState;
  }
}

