import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import WordsList from '../WordsList/WordsList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuess(tentativeGuess){
    //todo
    setGuesses([...guesses, tentativeGuess]);
  }
  return(
    <>
      <WordsList guesses={guesses} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
