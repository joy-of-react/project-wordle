export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type Status = "correct" | "incorrect" | "misplaced";

export type CheckedGuess = { letter: string; status: Status };

export type CheckedGuesses = CheckedGuess[][];

export type Guess = {
  guess: string;
  id: UUID;
};

export type GuessResults = Guess[];
