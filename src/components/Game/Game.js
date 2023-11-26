import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


import GuessInput from '../GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');


  function handleSubmitGuess(guess) {
    if (listOfGuesses.length < NUM_OF_GUESSES_ALLOWED) {
      setListOfGuesses([...listOfGuesses, guess]);
    }
    if (guess === answer) {
      setGameStatus('won');
    } else if (listOfGuesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost');
    }
  }


  return (
    <>
      <GuessList list={listOfGuesses} answer={answer} />

      {gameStatus === 'playing' &&
        <GuessInput handleSubmitGuess={handleSubmitGuess} />
      }

      {gameStatus !== 'playing' &&
        <Banner gameStatus={gameStatus} answer={answer} numOfGuesses={listOfGuesses.length} />
      }
    </>

  );
}

export default Game;
