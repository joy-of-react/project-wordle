import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import ImportForm from '../InputForm/InputForm';
import GuessResults from '../GuessResults/GuessResults';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [guessArray, setGuessArray] = React.useState([]);
  const [status, setStatus] = React.useState('in progress');
  // Initializer function - set answer to random word
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

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

  const handleRestart = () => {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    setGuessArray([]);
    setStatus('in progress');
  }

  return (
    <>
      <GuessResults guessArray={guessArray} answer={answer}/>
      <ImportForm handleAddGuess={handleAddGuess} status={status}/>
      {status === "win" && <WinBanner guessArray={guessArray} handleRestart={handleRestart}/>}
      {status === "lose" && <LoseBanner answer={answer} handleRestart={handleRestart}/>}
    </>
  );
}

export default Game;
