import React from 'react';

function GuessInput({ handleSubmit, handleChange, guess }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5,5}"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
