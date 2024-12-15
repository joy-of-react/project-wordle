import React from 'react';

function Form({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  function guessing(event){
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
  return(
    <form className='guess-input-wrapper' onSubmit={guessing}>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id='guess-input'
        type='text'
        value={tentativeGuess}
        onChange={(event) => (
            setTentativeGuess(event.target.value.toUpperCase())
        )}
      />
    </form>
  );
}

export default Form;
