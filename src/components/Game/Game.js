import React, { useState } from 'react';

import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function Game() {
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState(sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const resetGame = () => {
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  const addGuess = (newGuess) => {
    setGuesses([...guesses, checkGuess(newGuess, answer)]);
  }

  const status = guesses.some(g => g.every(d => d.status === 'correct')) ? 'win' : guesses.length === NUM_OF_GUESSES_ALLOWED ? 'loose' : 'pending';

  return <div className='wrapper'>
    <GuessResults guesses={guesses} />
    <GuessForm addGuess={addGuess} disabled={status !== 'pending'} />
    {status === 'loose' && <Banner type="sad" resetGame={resetGame}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>}
    {status === 'win' && <Banner type="happy" resetGame={resetGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </Banner>}
  </div>;
}

export default Game;

const Banner = ({ children, type, resetGame }) => {
  return <div className={`banner ${type || ''}`}>
    {children}
    <button onClick={resetGame}>Reset</button>
  </div>
}