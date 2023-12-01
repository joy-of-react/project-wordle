import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import ImportForm from '../InputForm/InputForm';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessArray, setGuessArray] = React.useState([]);

  const handleAddGuess = (guess) => {
    const newGuessArray = [
      ...guessArray,
      guess
    ];
    setGuessArray(newGuessArray);
  }

  return (
    <>
      <GuessResults guessArray={guessArray}/>
      <ImportForm handleAddGuess={handleAddGuess}/>
    </>
  );
}

export default Game;
