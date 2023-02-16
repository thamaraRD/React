import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el <TodoItem />', () => { 
  
  const todo = {
    id: 1,
    description: 'testing al todo item',
    done: false
  };
  
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

  test('should de mostrar el todo pendiente a completar', () => { 

    render(
    <TodoItem
    todo={ todo }
    onToggleTodo={onDeleteTodoMock}
    onDeleteTodo={onToggleTodoMock}
    /> );

      const liElement = screen.getByRole('listitem');
      // console.log(liElement.innerHTML);
      expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
      // screen.debug();
      const spanElement = screen.getByLabelText('span');
      // console.log(spanElement.className);
      expect(spanElement.className).toContain('align-self-center');
      expect(spanElement.className).not.toContain('text-decoration-line-through');

  });

  test('should de mostrar el Todo completado', () => { 

    todo.done = true;

    render(
    <TodoItem
    todo={ todo }
    onToggleTodo={onDeleteTodoMock}
    onDeleteTodo={onToggleTodoMock}
    /> );

    
      // screen.debug();
      const spanElement = screen.getByLabelText('span');
      // console.log(spanElement.className);
      expect(spanElement.className).toContain('text-decoration-line-through');

  });

  test('should el span llamar al toggleTodo cuando se hace click', () => { 

    render(
      <TodoItem
      todo={ todo }
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
      /> )

      const spanElement = screen.getByLabelText('span');
      //FireEvent simula el evento de un Click
      fireEvent.click(spanElement);
      expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

   })

   test('should de llamar el deleteTodo', () => { 

    render(
      <TodoItem
      todo={ todo }
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
      /> )

      const deleteButton = screen.getByRole('button');
      fireEvent.click(deleteButton);
      expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

    })

});