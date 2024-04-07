import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../input/Input.js'
import History from '../History/History.js'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

import WonBanner from '../WonBanner/WonBanner.js';
import LostBanner from '../LostBanner/LostBanner.js';
import Button from '../Button/Button.js'

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const  gameReset = (newAnswer) => {
    setAnswer(newAnswer);
    setGameStatus('running')
    setGuesses([]);
  }

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
      {gameStatus !== 'running' && <Button gameReset={gameReset}/>}
  </>;
}

export default Game;
