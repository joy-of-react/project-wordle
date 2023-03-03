import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        pattern={"[a-zA-Z]{5}"}
        maxLength={5}
        required
      />
    </form>
  );
}

export default GuessInput;
