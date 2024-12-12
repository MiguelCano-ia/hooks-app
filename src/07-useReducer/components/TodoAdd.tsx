import { ChangeEvent, useState } from "react"
import { Todo } from "./TodoList";

interface TodoAddProps {
  onNewTodo: ( todo: Todo ) => void;
}

export const TodoAdd = ({ onNewTodo }: TodoAddProps) => {

  const [ todo, setTodo ] = useState({
    id: new Date().getTime(),
    description: '',
    done: false,
  })

  const onAddTodo = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      description: target.value,
    });
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ( todo.description.trim().length <= 1) return;

    onNewTodo( todo );
    setTodo({
      ...todo,
      id: new Date().getTime(),
      description: '',
    })
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="form-control"
        value={ todo.description }
        onChange={ onAddTodo } 
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Add
      </button>
    </form>
  )
}
