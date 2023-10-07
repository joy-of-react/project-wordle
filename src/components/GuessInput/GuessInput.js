import React from 'react'
import { WORD_LENGTH } from '../../constants'

function GuessInput({ onSubmitGuess }) {
  const [input, setInput] = React.useState('')

  const handleChange = event => {
    const nextInput = event.target.value.toUpperCase()
    //-- Additionnal input length check
    //To prevent html input maxlength/pattern bypass
    //no more typing/trim copypaste
    if (nextInput.length > WORD_LENGTH) return
    setInput(nextInput)
  }

  const handleSubmit = event => {
    event.preventDefault()
    //-- Additionnal input length check
    // Check only min since max already enforced by onChange validation
    if (input.length < WORD_LENGTH) return
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
        pattern={`[A-Z]{${WORD_LENGTH}}`}
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        required
        title={`Please enter a ${WORD_LENGTH}-letter word, using only the letters A-Z.`}
      />
    </form>
  )
}

export default GuessInput
