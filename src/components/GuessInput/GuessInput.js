import React from 'react';

const isLetter = str => str.length === 1 && str.match(/[a-z]/i);

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  };

  const handleChange = e => {
    const word = e.target.value;
    if (
      e.nativeEvent.inputType !== 'deleteContentBackward' &&
      (!isLetter(word.slice(-1)) || word.length > 5)
    ) {
      return;
    }
    setTentativeGuess(word.toUpperCase());
  };

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={e => handleSubmit(e)}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={e => handleChange(e)}
          style={{ textTransform: 'uppercase' }}
          disabled={gameStatus !== 'inGame'}
        />
        <button
          className="btn"
          type="submit"
          disabled={tentativeGuess.length !== 5}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default GuessInput;
