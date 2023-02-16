import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('testing al componente <todoApp />', () => { 
  
  useTodo.mockReturnValue({
    todos: [
      {id: 1, description: 'Todo num1', done: false},
      {id: 2, description: 'Todo num2', done: true}
    ],
    countAllTodo: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  })

  test('should match to snapshot', () => { 

    const { container } = render( <TodoApp /> );
    expect(container).toMatchSnapshot();

  });

  test('should de mostrar el componente correctamente', () => { 

    render( <TodoApp /> );
    // screen.debug()
    expect(screen.getByText('Todo num1')).toBeTruthy();
    expect(screen.getByText('Todo num2')).toBeTruthy();

   })


})