import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {
  
  const { todos, countAllTodo, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <div>
        <h1>todo App: { countAllTodo } - <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />

      <div className="row">
        <div className="col-7">
        <TodoList
        todos={ todos }
        onDeleteTodo={ handleDeleteTodo }
        onToggleTodo={ handleToggleTodo }
        />
        </div>
      
      <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={ handleNewTodo } />
      </div>
    </div>
    </div>
  )
  }
