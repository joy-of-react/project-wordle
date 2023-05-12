import React from 'react';

function GuessHistory({ guesses, setGuesses }) {
  const [input, setInput] = React.useState('');

  function SubmitGuess(event) {
    event.preventDefault();
    let nextGuesses = [...guesses, input];
    console.log(nextGuesses);

    setGuesses(nextGuesses);
    setInput('');
  }

  return (
    <>
      <form onSubmit={SubmitGuess} className="guess-input-wrapper">
        <label htmlFor='guess-input'>Enter guess:</label>
        <input title="Fill in a 5 letter word" id="guess-input" type="text" pattern='[A-Za-z]{5}' maxLength={5} value={input} onChange={(event) => {
          let newInput = event.target.value.toUpperCase();
          setInput(newInput);
        }} />
      </form>
    </>
  )
}

export default GuessHistory;
