import React from 'react';

function GuessInput({ previousGuesses, setPreviousGuesses }) {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters.');
      return;
    }
    console.log({ guess });
    // add guess to previous guesses
    const nextGuess = { id: Math.ceil(Math.random() * 100), value: guess };
    const nextPreviousGusses = [...previousGuesses, nextGuess];
    setPreviousGuesses(nextPreviousGusses);
    setGuess('');
  }
  return (
    <>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          required
          pattern='[A-Za-z]{5}'
          maxLength={5}
          minLength={5}
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
