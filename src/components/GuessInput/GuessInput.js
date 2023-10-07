import React from 'react'

function GuessInput({ onSubmitGuess }) {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    const nextInput = event.target.value.toUpperCase()
    //-- Additionnal input length check
    //To prevent html input maxlength/pattern bypass
    //no more typing/trim copypaste
    if (nextInput.length > 5) return
    setInput(nextInput)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //-- Additionnal input length check
    // Check only min since max already enforced by onChange validation
    if (input.length < 5) return
    onSubmitGuess(input)
    setInput('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={input}
        onChange={handleChange}
        pattern='[A-Z]{5}'
        minLength={5}
        maxLength={5}
        required
        title='Please enter a 5-letter word, using only the letters A-Z.'
      />
    </form>
  )
}

export default GuessInput
