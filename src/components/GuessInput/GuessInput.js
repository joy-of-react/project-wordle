import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [input, setInput] = React.useState('');

  function SubmitGuess(event) {
    if (input === '') {
      event.preventDefault();
    } else {
      event.preventDefault();
      handleSubmitGuess(input);
      setInput('');
    }
  }

  let disabled =
    (gameStatus !== "running");

  return (
    <>
      <form onSubmit={SubmitGuess} className="guess-input-wrapper">
        <label htmlFor='guess-input'>Enter guess:</label>
        <input disabled={disabled} title="Fill in a 5 letter word" id="guess-input" type="text" pattern='[A-Za-z]{5}' minLength={5} maxLength={5} value={input} onChange={(event) => {
          let newInput = event.target.value.toUpperCase();
          setInput(newInput);
        }} />
      </form>
    </>
  )
}

export default GuessInput;
