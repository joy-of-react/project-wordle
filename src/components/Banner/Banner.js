import React from 'react';

function Banner({ isWinner, answer, words }) {
  return (
    <>
      {isWinner ? (
        <div className='banner happy'>
          <p>
            <strong>Congratulations!</strong> Got it in
            {" "}
            <strong>{words.length} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className='banner sad'>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </>
  );
}

export default Banner;
