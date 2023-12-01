import React from 'react';

import { WORD_LENGTH } from '../../constants';

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
          pattern={`[A-Za-z]{${WORD_LENGTH}}`}
          title={`${WORD_LENGTH} letter word`}
        />
      </form>
    </>
  );
}

export default InputForm;
