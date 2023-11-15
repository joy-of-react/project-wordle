import React from 'react';

function Form() {
  const [input, setInput] = React.useState('');
  function guessing(event){
    event.preventDefault();
    const guess = {
      guess: input.toUpperCase(),
    };
    setInput('');
    console.log(guess);
  }
  return(
    <form className='guess-input-wrapper' onSubmit={() => guessing(event)}>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input 
        id='guess-input'
        type='text'
        value={input}
        onChange={(event) => (
            setInput(event.target.value)
        )}
      />
    </form>
  );
}

export default Form;
