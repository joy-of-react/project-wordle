import React from 'react';

function Form() {
  const [input, setInput] = React.useState('');
  function guessing(event){
    event.preventDefault();
    console.log({input});
    setInput('');
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
        value={input}
        onChange={(event) => (
            setInput(event.target.value.toUpperCase())
        )}
      />
    </form>
  );
}

export default Form;
