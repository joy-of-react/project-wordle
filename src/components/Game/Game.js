import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import ImportForm from '../InputForm/InputForm';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
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
      {status === "win" && <Banner variant='happy'>Win</Banner>}
      {status === "lose" && <Banner variant='sad'>Lose</Banner>}
    </>
  );
}

export default Game;
