import React, { useState } from 'react';

const Input = ({ handleSaveWord, isOver }) => {
  const [tentativeGuess, setTentativeGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tentativeGuess.length !== 5) {
      alert('The word must be equal to 5 letters');
      return;
    };

    const newWord = {
      id: crypto.randomUUID(),
      value: tentativeGuess
    }

    handleSaveWord(newWord);
    setTentativeGuess('');
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
        disabled={isOver}
        value={tentativeGuess}
        onChange={event => {
          setTentativeGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  );
};

export default Input;
