import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import WordInput from '../WordInput'
import GuessResults from '../GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [submittedGuesses, setSubmittedGuesses] = React.useState([])

  return (
    <>
      <GuessResults submittedGuesses={submittedGuesses} />
      <WordInput setSubmittedGuesses={setSubmittedGuesses} />
    </>
  )
}

export default Game
