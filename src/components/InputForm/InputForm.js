import React from 'react';

function InputForm({ handleAddGuess }) {
  const [guess, setGuess] = React.useState('');
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault();
          handleAddGuess(guess);
          setGuess('');
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          onChange={event => {
            const upperCaseEntry = event.target.value.toUpperCase();
            setGuess(upperCaseEntry);
          }}
          pattern="[A-Za-z]{5}"
          title='Please enter a 5 letter word'
        />
      </form>
    </>
  );
}

export default InputForm;
