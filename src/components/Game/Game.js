import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


import GuessInput from '../GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    if (listOfGuesses.length < NUM_OF_GUESSES_ALLOWED)
      setListOfGuesses([...listOfGuesses, guess]);
  }
  return (
    <>
      <GuessList list={listOfGuesses} />

      <GuessInput handleSubmitGuess={handleSubmitGuess} />;

    </>

  );
}

export default Game;
