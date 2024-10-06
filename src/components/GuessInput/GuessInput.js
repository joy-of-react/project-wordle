import React from 'react';

function GuessInput() {

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    const guess = e.target.value;

    console.log(guess);
  }

  return (
    <form class="guess-input-wrapper" onSubmit={(evt) => handleSubmitGuess(evt)}>
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" maxLength="5"/>
    </form>
  );
}

export default GuessInput;
