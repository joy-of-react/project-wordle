import React from 'react';

function UserInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('');

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);

    const newGuesses = [...guesses];

    newGuesses.push(guess);

    setGuesses(newGuesses);

    setGuess('');
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
        required
      />
    </form>
  );
}

export default UserInput;
