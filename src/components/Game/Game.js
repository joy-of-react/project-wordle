import React from 'react';
// import GuessHistory from '../GuessHistory';
import SuccessBanner, { GameOverBanner, LostBanner } from "../Banner";
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
  const numOfGuesses = guesses.length;
  const latestGuess = ((numOfGuesses > 0) ? guesses[numOfGuesses - 1] : undefined)

  let gameStatus
  if (latestGuess === answer) { gameStatus = "won" }
  else if (numOfGuesses <= 6) { gameStatus = "running" }
  else { gameStatus = "lost" }

  return <>
    <GameOverBanner gameStatus={gameStatus} answer={answer} numOfGuesses={numOfGuesses} />
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput gameStatus={gameStatus} guesses={guesses} setGuesses={setGuesses} />
  </>;
}

export default Game;
