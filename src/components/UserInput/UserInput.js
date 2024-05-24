import React from 'react';

function UserInput({ guesses, setGuesses, gameResult }) {
  const [guess, setGuess] = React.useState('');

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newGuesses = [...guesses];

    newGuesses.push(guess);

    setGuesses(newGuesses);

    setGuess('');
  }

  const stopPlaying = () => {
    if (gameResult || guesses.length === 6) {
      return true;
    }
    return false;
  }

  return (
    <form 
      className='guess-input-wrapper'
      onSubmit={handleSubmit}  
    >
      <label htmlFor='guess-input' >Enter guess:</label>
      <input 
        id='guess-input' 
        type='text'
        value={guess} 
        pattern='\w{5}'
        onChange={handleChange} 
        disabled={stopPlaying()}
        required
      />
    </form>
  );
}

export default UserInput;
