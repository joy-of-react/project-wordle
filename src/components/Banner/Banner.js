import React from "react";

function Banner({status, numGuesses, answer}) {

  return (
    <div className={`${status} banner `}>
      
      {status === 'happy' ? (
        <p>
              <strong>Congratulations!</strong> Got it in {' '}
              <strong>{numGuesses} {numGuesses === 1 ? ' guess' : ' guesses'}</strong>.
        </p>
      ) : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
      
    </div>
  );
}

export default Banner;
