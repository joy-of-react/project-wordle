import React from 'react';

function GuessInput({handleSubmitGuess}) {
  const[tentativeGuess, setTentativeGuess] = React.useState()

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert('Please enter 5 letters! :)')
      return;
    }
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return(
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      required
      minLength={5}
      maxLength={5}
      id="guess-input" type="text" 
      value={tentativeGuess}
      onChange={(event)=> {
        const nextGuess = event.target.value.toUpperCase()
        setTentativeGuess(nextGuess)
      }}
      />
    </form>
  );
}

export default GuessInput;
