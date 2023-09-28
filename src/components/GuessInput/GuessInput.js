import React from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(tentativeGuess);
    handleAddGuess(tentativeGuess);

    setTentativeGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess: </label>

      <input
        required
        type='text'
        id='guess-input'
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        maxLength={5}
        pattern='[A-Za-z]{5}'
        title='Please enter exactly 5 alphabetic characters.'
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
