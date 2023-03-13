import React, { useState } from 'react';

const GuessInput = () => {
  const [guess, setGuess] = useState('');

  const handleGuess = (e) => {
    const { value } = e.target;
    setGuess(value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ guess });
    setGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        type='text'
        name='guess-input'
        id='guess-input'
        value={guess}
        onChange={handleGuess}
        pattern='[a-zA-Z]{5}'
      />
    </form>
  );
};

export default GuessInput;
