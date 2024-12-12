import { Todo } from "./TodoList";

interface TodoItemProps extends Todo {
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, description, done, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${ (done) ? 'text-decoration-line-through' : '' } `}
        onClick={ () => onToggleTodo( id ) }
        // aria-label='span' identificarlo en las pruebas
      >
        { description }
      </span>
      <button
        className="btn btn-danger"
        onClick={ () => onDeleteTodo( id ) }
        >Delete
      </button>
    </li>
  )
}
