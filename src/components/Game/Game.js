import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput';
import UserGuesses from '../UserGuesses';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(null);

  function finishGame(result) {
    setGameResult(result);
  }

  return <>
    <UserGuesses guesses={guesses} answer={answer} finishGame={finishGame} />  
    <UserInput guesses={guesses} setGuesses={setGuesses} gameResult={gameResult} />
    {gameResult && (<Banner gameResult={gameResult} answer={answer} guesses={guesses} />)}
  </>;
}

export default Game;
