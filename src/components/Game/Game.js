import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [results, setResults] = React.useState([]);

  return (
    <>
      <GuessResults results={results} />
      <GuessInput guess={guess} setGuess={setGuess} setResults={setResults} />
    </>
  );
}

export default Game;
