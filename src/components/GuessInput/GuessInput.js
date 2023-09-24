import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
  
  return <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input 
    disabled={gameStatus !== 'running'}
    required
    minLength={5}
    maxLength={5}
    pattern="[a-zA-Z]{5}"
    title="5 letter word"
    id="guess-input" 
    type="text" 
    value={tentativeGuess}
    onChange= {(event) => {
      const nextGuess = event.target.value.toUpperCase();
      setTentativeGuess(nextGuess);
    }}
    />
  </form>
}

export default GuessInput;
