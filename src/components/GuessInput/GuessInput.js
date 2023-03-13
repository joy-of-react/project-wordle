import React from 'react';

const GuessInput = ({ guess, handleGuess, handleSubmit }) => {
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
