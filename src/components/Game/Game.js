import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'

const DEFAULT_GUESS = ''

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guess, setGuess] = useState(DEFAULT_GUESS)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.info({ guess })
    setGuess(DEFAULT_GUESS)
  }

  const handleChange = (e) => setGuess(e.target.value.toUpperCase())

  return (
    <GuessInput
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      guess={guess}
    />
  )
}

export default Game
