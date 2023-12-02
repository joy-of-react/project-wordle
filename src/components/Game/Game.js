import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import ImportForm from '../InputForm/InputForm';
import GuessResults from '../GuessResults/GuessResults';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessArray, setGuessArray] = React.useState([]);
  const [status, setStatus] = React.useState('in progress');

  const handleAddGuess = (guess) => {
    const newGuessArray = [
      ...guessArray,
      guess
    ];
    setGuessArray(newGuessArray);
    if (guess === answer) {
      setStatus('win');
    } else if (newGuessArray.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lose');
    }
  }

  return (
    <>
      <GuessResults guessArray={guessArray} answer={answer}/>
      <ImportForm handleAddGuess={handleAddGuess} status={status}/>
      {status === "win" && <WinBanner guessArray={guessArray}/>}
      {status === "lose" && <LoseBanner answer={answer}/>}
    </>
  );
}

export default Game;
