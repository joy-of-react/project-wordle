# Word Game

## Joy of React, Project I

In this project, we'll recreate a popular online word game, Wordle:

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.

**Many instructions for running this project are included in the course.** Be sure to read the instructions carefully on the course platform before continuing! TODO: Link to instructions

## Exercise 1: GuessInput

First thing’s first: we need a way to submit guesses!

In the standard Wordle game, a global event listener registers keypresses. This isn't very accessible, and so we're going to do things a little bit differently.

At the bottom of the page, we'll render a little form that holds a text input:

IMAGE

Your job in this first task is to create a `GuessInput` component. Here's the rough shape that the HTML should take:

```html
<form class="guess-input-wrapper">
  <label for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" />
</form>
```

The text input should be bound to React state. And when the form is submitted, the value should be logged and reset:

<!-- GIF -->

**Acceptance Criteria:**

- Create a new `GuessInput` component.
  - (Don't forget, you can use an NPM script to generate the scaffolding for you!)
- This component should render a `<form>` tag, including a label and a text input.
- The text input should be controlled by React state.
- **The user's input should be converted to ALL UPPERCASE.** No lower-case letters allowed.
- The input should have a minimum and maximum length of 5.
- When the form is submitted:
  - The entered value should be logged to the console (for now)
  - The input should be reset to an empty string.

## Exercise 2: Keeping track of guesses

When the user submits their guess, that value is being obliterated. Instead, we should be storing that guess, and displaying it to the user!

In a little while, we'll start thinking about the game-logic stuff, making sure each letter is the right color. For now, though, we want to set up some of the scaffolding, getting some of the component / DOM structure in place.

Our goal in this exercise is to render each of the user's guesses:

<!-- GIF -->

Here's the DOM structure we hope to wind up with:

```html
<div class="guess-results">
  <p class="guess">FIRST</p>
  <p class="guess">GUESS</p>
</div>
```

**Acceptance Criteria:**

- Create a new piece of state, `guesses`. It should start life as an empty array. It's up to you to decide where this bit of state lives.
- When the user submits the `GuessInput` form, the user's guess should be pushed into this array.
- We'll want to create a new component to hold the list of user guesses. Call it `GuessResults`. It should have a top-level element with the class `guess-results`.
- `GuessResults` should receive the list of guesses, and map over them.
- Create a new component, `Guess`. It should take a `children` prop, and render that children within a paragraph tag with the class `guess`.
- Map over the guesses in `GuessResults`, and render a `Guess` component for each one.
  - There should be no key warnings in the console!

## Exercise 3: Guess slots

Alright, so things are starting to shape up. There's a bit of an issue though.

The final version of our _Wordle_ clone should display 6 guesses at all times. Each guess should show 5 “cells”. And when a guess is entered, the letters are animated within these cells:

GIF

We need to update our DOM structure for the `GuessResults` component so that it looks something like this:

```html
<div class="guess-results">
  <p class="guess">
    <span class="cell">F</span>
    <span class="cell">I</span>
    <span class="cell">R</span>
    <span class="cell">S</span>
    <span class="cell">T</span>
  </p>
  <p class="guess">
    <span class="cell">G</span>
    <span class="cell">U</span>
    <span class="cell">E</span>
    <span class="cell">S</span>
    <span class="cell">S</span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
</div>
```

This structure might seem overly complex, but it's necessary to allow us to color each square accordingly. We'll tackle that bit in the next exercise.

**Things to know:**

There are two things that should help you tackle this exercise:

1. You can use the `range` utility to create arrays of a specified length to map over. It's provided in `/src/utils.js`. Check out the “Range Utility” lesson in the course for more info on how to use it.
2. Inside `/src/constants.js`, you'll find a constant, `NUM_OF_GUESSES_ALLOWED`. You should import and use this constant when generating the set of guesses. This would make it easy for us to change the difficulty of the game later on, by increasing/decreasing the # of guesses.

**Acceptance Criteria:**

- 6 `Guess` components should always be rendered, no matter how many guesses the user has made
- The `Guess` component should render 5 spans, each with the class of `cell`.
- Each cell should contain a letter, if the `Guess` instance has been given children. If not, the cell should be blank.
- No `key` warnings in the console.

## Exercise 4: Game logic

Alright, let's make this an actual game!

Inside `/src/game-helpers.js`, you'll find a helper function, `checkGuess`. As parameters, it takes a single guess, as well as the correct answer. It returns an array that contains the status for each letter.

For example:

```js
checkGuess('WHALE', 'LEARN');
/*
  Returns:

  [
    { letter: 'W', status: 'incorrect' },
    { letter: 'H', status: 'incorrect' },
    { letter: 'A', status: 'correct' },
    { letter: 'L', status: 'misplaced' },
    { letter: 'E', status: 'misplaced' },
  ]
*/
```

There are 3 possible statuses:

- **correct** — this slot is perfect. It's the right letter in the right place.
- **misplaced** — this letter does exist in the word, but in a different slot.
- **incorrect** — this letter is not found in the word at all.

In the example above, `W` and `H` aren't found in the word `LEARN`, and so they're marked as “incorrect”. `A` is correct, since it's in the 3rd slot in each word. The other two letters, `L` and `E`, are meant to be in other slots.

**These statuses correspond with CSS classes.** The `correct` status has a `correct` class name, which will apply the green background when applied to a cell. Same thing for `misplaced` and `incorrect`.

Your task is to use this function to validate the user's guesses, and apply the correct CSS classes. The final output should look like this:

```html
<div class="guess-results">
  <p class="guess">
    <span class="cell incorrect">W</span>
    <span class="cell incorrect">H</span>
    <span class="cell correct">A</span>
    <span class="cell misplaced">L</span>
    <span class="cell misplaced">E</span>
  </p>
  <!-- Omitted 5 remaining guesses for brevity -->
</div>
```

**Acceptance Criteria:**

- Import the `checkGuess` function from `/src/game-helpers.js`, and use it to validate each of the user's guesses
- When rendering the letters in the `Guess` component, apply the letter's `status` to the `cell` element.

## Exercise 5: winning and losing

Right now, our Wordle clone never ends, no matter what the user does. Let's change that!

If the user guesses the correct word (as in, all 5 letters have the status `correct`), the game should end, and a congratulatory banner should be shown.

If the user submits a 6th guess and still hasn't hit the word, the game should end, and a sad failure banner should be shown.

Here's the markup for the banners:

```html
<!-- Happy banner -->
<div class="banner happy">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>3 guesses</strong>.
  </p>
</div>
```

```html
<!-- Sad banner -->
<div class="banner sad">
  <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
</div>
```

**Acceptance Criteria:**

- Add a new bit of state that tracks the game status. Possible values are `running`, `won`, and `lost`.
- When the game is over, the text input should be disabled.
- The game status should flip to `won` when they correctly identify the word.
- The game status should flip to `lost` after submitting the last word without success.
- When the game status is `won`, render the happy banner.
- When the game status is `lost`, render the sad banner.
- It's up to you to decide how to structure the banner! Feel free to create new component(s) if you think it's warranted.

---

# Stretch Goals

If you're looking for an additional challenge, give these stretch goals a shot!

Unlike the standard exercises, solutions aren't provided for these goals.

Also, feel free to come up with _your own_ stretch goals! If there's a thing you'd like to implement, go for it!!

## Visual Keyboard

In the real Wordle game, a keyboard is shown below the guesses:

![Screenshot of the Wordle game, showing a keyboard below the game board](docs/bottom-keyboard.png)

This keyboard is an important game element, since it makes it easy to tell which letters have already been tested.

**Acceptance Criteria:**

- Render 3 rows of letters at the bottom of the screen
- The colors of each letter should match the colors shown in the game board:
  - Correct letters should have a green background and white text
  - Misplaced letters should have a yellow background and white text
  - Incorrect letters should have a dark gray background and white text
  - Unused letters should have a light gray background and black text
- No need to include "Enter" and "Backspace" keys.
- Don't worry too much about the styling, trying to get the alignment to look exactly like a real keyboard.

## Restart button

One of Wordle's hooks is that you can only play 1 game per day: there's a new word for all users every day. As a result, there's no "restart button", you just have to wait until the next day.

In our clone, we aren't picking a new word every day, we're picking a new word when the app first loads.

Update the game so that it can be restarted. Add a "Restart game" button to the banner shown when the user wins or loses.

Currently, the correct word is determined in `Game.js`, outside the component:

```js
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
```

You'll need to change this, so that it happens within the React component.

**Acceptance Criteria:**

- A "Restart Game" button is shown at the end of the game. You can put this button in the `GameOverBanner`, or wherever else you'd like
- Clicking the button should select a new correct word and erase all of the user's guesses.
