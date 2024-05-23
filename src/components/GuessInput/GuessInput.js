import React from 'react';

function GuessInput() {
  const [guess , setGuess ] = React.useState('');
  function handleGuessText(event) {
    event.preventDefault();
    console.info({guess});
    setGuess('')
  }

  return <div>
  <form className="guess-input-wrapper"  onSubmit={handleGuessText}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" 
    type="text" 
    value={guess} 
    onChange={(event) => {setGuess(event.target.value.toUpperCase())} }
    required 
    minLength={5}
    maxLength={5}
  />
</form>
  </div>;
}

export default GuessInput;
