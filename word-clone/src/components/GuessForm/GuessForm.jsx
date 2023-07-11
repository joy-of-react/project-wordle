import React from "react";

function GuessForm({ handleAddGuess }) {

  const [guess, setGuess] = React.useState('');

  return (
    <div className="guess-form">
      <form onSubmit={(event) => {
        event.preventDefault();

        handleAddGuess(guess);

        setGuess('');
        {console.log(guess)}
      }}>

        <label htmlFor="guess-input">Enter Guess: </label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={event => {
            setGuess(event.target.value)
          }}
          />
        <button>Guess</button>
      </form>
    </div>
  );
}

export default GuessForm;
