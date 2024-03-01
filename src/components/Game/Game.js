import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../input/Input.js'
import History from '../History/History.js'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

import WonBanner from '../WonBanner/WonBanner.js';
import LostBanner from '../LostBanner/LostBanner.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('running');
    

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    
    if(tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
 
  return <>
      <History guesses={guesses} answer={answer}/>
      <Input handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      {gameStatus ==='won' && (<WonBanner numOfGuesses={guesses.length} />)}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
  </>;
}

export default Game;
