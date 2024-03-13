import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput';
import UserGuesses from '../UserGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return <>
    <UserGuesses guesses={guesses} answer={answer}/>  
    <UserInput guesses={guesses} setGuesses={setGuesses} />
  </>;
}

export default Game;
