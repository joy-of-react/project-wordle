import React, {useState} from 'react';

function GuessField() {
  const [guess, setGuess] = useState('');
  return (
  <form className="guess-input-wrapper" onSubmit={
    (event) => {
      event.preventDefault();
      console.log({guess});
      setGuess('');
    }}>
    <label>Enter guess:</label>
    <input 
      id="guess-input" 
      type="text" 
      value={guess} 
      pattern={".{5,5}"}
      title="Input field must have 5 characters"
      onChange={
      (event) => setGuess(event.target.value.toUpperCase())
      }
    />
  </form>
  )
}

export default GuessField;
