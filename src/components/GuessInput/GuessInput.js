import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [userInput, setUserInput] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('guess: ' + userInput)
    handleSubmitGuess(userInput);
    setUserInput('')
  }

  return <div className='guess-input-wrapper'>
    <form onSubmit={e => handleSubmit(e)}>
      <label
        htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        type='text'
        id='guess-input'
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value.toUpperCase())
        }
        }
      />
    </form>
  </div>
}

export default GuessInput;
