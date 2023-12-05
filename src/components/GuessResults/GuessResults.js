import React from 'react';
import {checkGuess} from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED} from "../../constants";

function fillInGuesses(guesses) {
    const remaining = (
        (guesses.length < NUM_OF_GUESSES_ALLOWED) ?
            Array(NUM_OF_GUESSES_ALLOWED - guesses.length).fill('') :
            []
    )
    return [...guesses.slice(0, NUM_OF_GUESSES_ALLOWED)].concat(remaining);
}

function GuessResults({guesses, answer}) {
    const all_guesses = fillInGuesses(guesses);

    return (
        <div className="guess-results">
            {
                all_guesses.map((guess) => {
                    const checkedGuess = checkGuess(guess, answer);
                    const letters = checkedGuess || Array(NUM_OF_LETTERS_ALLOWED).fill({letter: '', status: null});
                    return (
                        <p className="guess">
                            {
                                letters.map(({letter, status}) => {
                                        const className = letter !== '' ? `cell ${status}` : "cell"
                                        return <span className={className}>{letter}</span>
                                    }
                                )
                            }
                        </p>
                    )
                })
            }
        </div>
    )
}

export default GuessResults;
