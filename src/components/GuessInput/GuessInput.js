import React from 'react'

function GuessInput() {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ tentativeGuess })

    setTentativeGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setTentativeGuess(nextGuess)
        }}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        type='text'
      />
    </form>
  )
}

export default GuessInput
