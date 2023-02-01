import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ guess });
          setGuess('');
        }}
      >
        <label htmlFor='guess-input'>Enter Guess:</label>
        <input
          id='guess-input'
          type='text'
          maxLength={5}
          minLength={5}
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toLocaleUpperCase());
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
