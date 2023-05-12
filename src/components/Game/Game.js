import React from 'react';
import GuessHistory from '../GuessHistory';
import GuessInput from "../GuessInput";
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return <>
    <GuessResults guesses={guesses} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} />
  </>;
}

export default Game;
