import React from 'react';
import {checkGuess} from "../../game-helpers";
import {NUM_OF_LETTERS_ALLOWED} from "../../constants";

const FIRST_LINE = 'qwertyuiop'.toUpperCase().split("");
const SECOND_LINE = 'asdfghjkl'.toUpperCase().split("");
const THIRD_LINE = 'zxcvbnm'.toUpperCase().split("");
const ALL_LETTERS = FIRST_LINE.concat(SECOND_LINE, THIRD_LINE)
const STATUS_RANKING = {'': 1, misplaced: 2, incorrect: 3, correct: 4};

function Keyboard({currentGuess, setCurrentGuess, guesses, answer}) {
    const allLettersWithStatus = ALL_LETTERS.reduce((acc, letter) => (
        {
            ...acc,
            [letter]: ''
        }
    ), {})
    guesses.map((guess) => {
        return checkGuess(guess, answer).map(({letter, status}) => {
            if (STATUS_RANKING[status] > STATUS_RANKING[allLettersWithStatus[letter]]) {
                allLettersWithStatus[letter] = status;
            }
            return {letter, status};
        });
    })
    const lines = [FIRST_LINE, SECOND_LINE, THIRD_LINE];
    const form = document.getElementById("guess-input-form");

    function onKeyClick(event) {
        const nextGuess = currentGuess + event.target.value;
        // If we've reached the max letters, send the focus to the form's input element
        if (nextGuess.length === NUM_OF_LETTERS_ALLOWED) {
            form.requestSubmit();
        }
        setCurrentGuess(nextGuess);
    }

    return (
        <div className="guess-results">
            {
                lines.map((keyboardLine) => {
                    return (
                        <p className="guess keyboard-wrapper">
                            {
                                keyboardLine.map((key) => {
                                    const keyboardClass = `keyboard-key ${allLettersWithStatus[key]}`
                                    return (
                                        <button
                                            value={key}
                                            type="button"
                                            className={keyboardClass}
                                            onClick={onKeyClick}
                                        >
                                            {key}
                                        </button>
                                    )
                                })
                            }
                        </p>
                    )
                })
            }
        </div>
    );
}

export default Keyboard;
