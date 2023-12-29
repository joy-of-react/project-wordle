import React, { useState } from 'react'

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length !== 5) {
      alert('The word must be equal to 5 letters');
      return;
    };

    console.log({ inputValue });
    setInputValue('');
  };

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={handleSubmit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value.toUpperCase())
        }}
      />
    </form>
  );
};

export default Input;
