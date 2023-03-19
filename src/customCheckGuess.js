const findAllIndexes = (text, value) => {
  const indexes = [];
  text.split('').forEach((letter, index) => {
    if (letter === value) {
      indexes.push(index);
    }
  })

  return indexes;
}

const getStatus = (indexes, index) => {
  if (indexes.length === 0) return 'incorrect';

  return indexes.includes(index) ? 'correct' : 'misplaced';
}

export const checkGuess = (guess, answer) => {

  const splitGuess = guess.split('');

  return splitGuess.map((letter, index) => {
    const indexes = findAllIndexes(answer, letter);
    return {
      letter,
      status: getStatus(indexes, index)
    }
  })
}
