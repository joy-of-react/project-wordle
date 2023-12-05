import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GameOverBanner from "../GameOverBanner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [outcome, setOutcome] = React.useState('');

    function checkOutcome(guess, guesses) {
        if (guess === answer && guesses.length <= NUM_OF_GUESSES_ALLOWED) {
            setOutcome('win');
        } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
            setOutcome('lose');
        }
    }

    function addNewGuess(guess) {
        const nextGuesses = [...guesses];
        nextGuesses.push(guess);
        setGuesses(nextGuesses);
        checkOutcome(guess, nextGuesses);
    }

    return (
        <>
            <GuessResults guesses={guesses} answer={answer}/>
            <GuessInput addNewGuess={addNewGuess} disabled={outcome !== ''}/>
            {['win', 'lose'].includes(outcome) &&
                <GameOverBanner outcome={outcome} totalGuesses={guesses.length} answer={answer}/>}
        </>
    );
}

export default Game;
