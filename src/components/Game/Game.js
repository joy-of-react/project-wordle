import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const isLetter = str => str.length === 1 && str.match(/[a-z]/i);

function Game() {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const [words, setWords] = React.useState([]);

  const updateGuess = e => {
    if (!e) return setTentativeGuess('');
    const curGuess = e.target.value;
    // if new input is not alphabetic or current word has 5 letters already
    // do not update
    if (
      e.nativeEvent.inputType !== 'deleteContentBackward' &&
      (!isLetter(curGuess.slice(-1)) || curGuess.length > 5)
    ) {
      return;
    }
    setTentativeGuess(curGuess.toUpperCase());
  };

  const updateWords = word => {
    setWords([...words].concat({ label: word, id: crypto.randomUUID() }));
  };
  console.log(answer);
  return (
    <>
      <GuessResults words={words} answer={answer} />
      <GuessInput
        updateGuess={updateGuess}
        tentativeGuess={tentativeGuess}
        updateWords={updateWords}
        words={words}
      />
    </>
  );
}

export default Game;
