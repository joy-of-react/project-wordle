import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import PreviousWord from '../PreviousWord/PreviousWord';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const handleSaveWord = (input) => {
    setWords([...words, input]);

    if (answer === input.value) {
      setIsWinner(true);
      setIsOver(true);
    } else if (words.length >= 5) {
      setIsOver(true);
      setIsWinner(false);
    } else {
      setIsOver(false);
    }
  };

  const handleResetGame = () => {
    const newGame = [];

    setWords(newGame);
    setIsOver(false);
    window.location.reload();
  };

  return (
    <>
      <PreviousWord
        words={words}
        answer={answer}
      />
      <Input
        handleSaveWord={handleSaveWord}
        isOver={isOver}
      />
      <button
        className='restart'
        onClick={handleResetGame}
      >
        Restart
      </button>
      {isOver ?
        <Banner
          isWinner={isWinner}
          answer={answer}
          words={words}
        /> :
        undefined
      }
    </>
  );
}

export default Game;
