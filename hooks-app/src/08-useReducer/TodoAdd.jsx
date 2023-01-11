import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

 const { description ,onInputChange, onResetForm } = useForm({
    description: '',
 })

 const onfFormSubmit = ( event ) => {
    event.preventDefault();
    if ( description.length <= 1 ) return;

    const newTodo = {
        id: new Date().getTime(),
        done: false,
        description: description,
    }

    onNewTodo(newTodo);
    onResetForm();
 }

  return (
    <form onSubmit={ onfFormSubmit }>
      <input
        type="text"
        placeholder="¿Que tarea por hacer?"
        className="form-control"
        id='description'
        value={description}
        onChange={ onInputChange }
      />
      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
