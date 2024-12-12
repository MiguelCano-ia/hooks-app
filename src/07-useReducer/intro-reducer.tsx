const initialState = [{
  id: 1,
  todo: 'Recolectar piedras del infinito',
  done: false,
}];

interface PayLoad {
  id: number;
  todo: string;
  done: boolean;
}

interface TodoAction {
  type: string;
  payload?: PayLoad;
}

// Reducer:

// 1. Siempre regresa un estado nuevo
// 2. Funcion pura: No debe tener efectos secundarios
// 3. Recibe dos argumentos: state y action
// 4. action es lo que se va a realizar en el reducer para cambiar el estado
const todoReducer = ( state = initialState, action: TodoAction ) => {

  if ( action?.type === '[TODO] add todo' && action.payload ) {
    return [ ...state, action.payload ];
  }

  return state;
}

let todos = initialState;

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo, // Informacion que se necesita para hacer el cambio
}

todos = todoReducer( todos, addTodoAction );
console.log(todos);