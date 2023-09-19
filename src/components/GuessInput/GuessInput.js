import React from 'react';

function GuessInput({ tentativeGuess, updateGuess, updateWords, words }) {
  const handleSubmit = e => {
    e.preventDefault();

    if (words.length === 0 || tentativeGuess !== words.slice(-1).label) {
      updateWords(tentativeGuess);
      updateGuess();
    }
  };
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={updateGuess}
          style={{ textTransform: 'uppercase' }}
        />
        <button className="btn" disabled={tentativeGuess.length !== 5}>
          Submit
        </button>
      </form>
    </>
  );
}

export default GuessInput;
