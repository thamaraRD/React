import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState('');

  //Desestructuración del evento
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newInputValue = inputValue.trim();
    // eslint-disable-next-line no-unused-expressions
    newInputValue.length <= 0 ? null : onNewValue(newInputValue )
    setInputValue('');
  }

  return (
    <form aria-label='form' onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Busca tu Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.PropTypes = {
  onNewValue: PropTypes.func.isRequired
}