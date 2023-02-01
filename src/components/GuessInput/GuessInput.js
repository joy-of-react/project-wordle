import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters.');
      return;
    }
    console.log({ guess });
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
