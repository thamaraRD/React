import { useState } from 'react';
import { useGetTodosQuery, useGetTodoByIdQuery } from './store/apis/todosApi';

export const TodoApp = () => {

  // const { data: todos= [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
    console.log('aqui');
  }
  const prevTodo = () => {
    if( todoId === 1 ) return;
    setTodoId(todoId - 1);
  }
  return (
    <>
    <h1>RTK Query- Todos</h1>
    <hr />
    <h4>isLoading: { isLoading ? 'true' : 'false' }</h4>
    <pre>{ JSON.stringify(todo) }</pre>
    <button onClick={prevTodo}>
      Previous Todo
    </button>
    <button onClick={nextTodo}>
      Next Todo
    </button>
    {/* <ul>
      { todos.map ( todo => (
        <li key={todo.id}>
          Status: <strong>{todo.completed ? 'done' : 'Pending'}&nbsp;</strong>
          todo: {todo.title}
        </li>
      ) ) }
    </ul> */}
    </>
  )
}
