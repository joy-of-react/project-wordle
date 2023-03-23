import React from "react";

function GuessInput() {

  const [guess, setGuess] = React.useState('');


  return(
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault()
      console.log(guess.toUpperCase())
      setGuess('')
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern=".{5,}" required title="5 characters minimum" maxLength={5} id="guess-input" type="text" value={guess.toUpperCase()} onChange={event => {
        setGuess(event.target.value)
      }}/>
    </form>);
}

export default GuessInput;
