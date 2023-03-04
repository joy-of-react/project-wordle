import React from 'react';

function GuessInput({ guess, setGuess, setResults }) {
  function handleChange(event) {
    const textValue = event.target.value.toUpperCase();

    setGuess(textValue);
  };
  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess });

    setResults((prev) => [...prev, guess]);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        required
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
