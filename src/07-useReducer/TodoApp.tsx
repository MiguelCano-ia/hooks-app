import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {

  const { todos, pendingTasks, handleDeleteTodo, onToggleTodo, handleNewTodo } = useTodo();

  return (
    <>
      <h1>TodoApp { todos.length }, <small>pending: { pendingTasks }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={ todos }
            onDeleteTodo={ handleDeleteTodo } 
            onToggleTodo={ onToggleTodo } 
          />
        </div>

        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />

          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>  
    </>
  )
}
