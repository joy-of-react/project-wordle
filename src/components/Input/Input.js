import React, { useState } from 'react';

const Input = ({ handleSaveWord }) => {
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
    console.log({ tentativeGuess });
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
        value={tentativeGuess}
        onChange={event => {
          setTentativeGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  );
};

export default Input;
