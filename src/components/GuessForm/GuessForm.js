import React, { useState } from 'react';



function GuessForm({ addGuess, disabled = false }) {
  const [guess, setGuess] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addGuess(guess);
    setGuess('');
  }
  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input disabled={disabled} id="guess-input" type="text" value={guess} pattern="\w{5}" required onChange={(e) => e.target.value.length > 5 ? undefined : setGuess(e.target.value.toUpperCase())} />
</form>;
}

export default GuessForm;
