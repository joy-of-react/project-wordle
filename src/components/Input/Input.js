import React from 'react'

const Input = () => {
  return (
    <form className='guess-input-wrapper'>
      <label for='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
      />
    </form>
  )
}

export default Input;
