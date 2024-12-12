import { TodoItem } from "./TodoItem"

export interface Todo {
  id: number,
  description?: string,
  done?: boolean,
}

interface TodosProps {
  todos: (Todo)[],
  onDeleteTodo: (id: number) => void,
  onToggleTodo: (id: number) => void,
}

export const TodoList: React.FC<TodosProps> = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {
        todos.map(( todo ) => {

          const { id, description, done } = todo;

          return (
            <TodoItem key={ id }
              id={ id }
              description={ description }
              done={ done }
              onDeleteTodo={ onDeleteTodo }
              onToggleTodo={ onToggleTodo}
            />
          )
        })
      }
    </ul>
  )
}
