import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess(event.target.value);
        setGuess('');
        console.info({ guess });
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          let letter = event.target.value;
          setGuess(letter.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
