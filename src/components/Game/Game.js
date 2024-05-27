import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import AllGuesses from '../AllGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList , setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuessList(guess) {
    let newGuess = {guess, key: `${guess} - ${Math.random()}`};
    let newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);
    if(guess.toUpperCase() === answer){
      setGameStatus('won');
    } else if(newGuessList.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }

  return (
    <>
    <AllGuesses guessList={guessList} answer={answer}/>
    <GuessInput handleGuessList={handleGuessList} gameStatus={gameStatus}/>
    {
      gameStatus === 'won' && <WonBanner guessCount = {guessList.length} />
    }
    {
      gameStatus === 'lost' && <LostBanner answer = {answer} />
    }
    </>
  )
}

export default Game;
