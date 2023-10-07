import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessesBoard from '../GuessesBoard'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = guessInput => {
    const newGuess = {
      id: crypto.randomUUID(),
      word: guessInput,
    }
    setGuesses([...guesses, newGuess])
  }
  return (
    <>
      <GuessesBoard guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game
