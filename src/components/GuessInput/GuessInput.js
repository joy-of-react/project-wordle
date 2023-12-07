import React from 'react';
import {NUM_OF_LETTERS_ALLOWED} from "../../constants";

function GuessInput({addNewGuess, disabled, guess, setGuess}) {
    return (
        <form
            id="guess-input-form"
            className="guess-input-wrapper"
            onSubmit={(event) => {
                addNewGuess(guess);
                event.preventDefault();
                setGuess('');
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                title="Input a five-letter word"
                pattern={`[A-Za-z]{${NUM_OF_LETTERS_ALLOWED},${NUM_OF_LETTERS_ALLOWED}}`}
                required
                value={guess}
                disabled={disabled}
                onChange={event => {
                    setGuess(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
