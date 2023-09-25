import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Form from '../Form/Form'
import Guess from '../Guess/guess';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// import { range } from '../../utils';
// import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [inputs, setInputs] = React.useState([]);
  const [status, setStatus] = React.useState('running');
  // const [noOfTries, setNoOfTries] = React.useState(0);
  // const [end, setEnd] = React.useState(false)
  
  // let results=[];


  function handleGuessSubmit(guess){
    if(guess !== ''){
      const newGuess = [...inputs, guess]    
      setInputs(newGuess);
      

      if(guess.toUpperCase() === answer){
        setStatus('won')
      } else if(newGuess.length >= NUM_OF_GUESSES_ALLOWED){
        setStatus('lost')
      }
    }
  }

  // function checkStatus(guess){
  //    const newStatus = checkGuess(guess, answer);
  //    setStatus(newStatus);
  //    setNoOfTries(noOfTries + 1);
  // }
  

  // if(status.length > 1){
  //     range(5).map((num) => (
  //         results.push(status[num]['status'])
  //     ));
  // }


//  console.log("guess results: ", results);
//  console.log("No. of Tries: ", noOfTries);


//  function checkGameStatus(results){

  
//   let gameStatus = false;

  

//   if(results.length === 0 || results.includes('incorrect') || results.includes('misplaced')){
//       gameStatus = false;
//   }else{
//       gameStatus = true;
//       setEnd(true);
//   }

//   console.log('inside func game status', gameStatus);

//   if(noOfTries === NUM_OF_GUESSES_ALLOWED){
//     setEnd(true);
//     return(
//       <div className="sad banner">
//         <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
//       </div>
//     )
//   } else {
//     return(
//       <>
//         {gameStatus && 
//         <div className="happy banner">
//         <p>
//           <strong>Congratulations!</strong> Got it in 
//           <strong> {noOfTries} guesses</strong>.
//         </p>
//         </div>}
//       </>
//      )
//   }
        
// }

  return (
  <>
      <Guess inputs={inputs} answer={answer}/>
      <Form handleGuessSubmit = {handleGuessSubmit} gameStatus={status}/>   
      {status === 'won' && (
        <WinBanner numOfGuesses={inputs.length}/>
        )
      }
      {status === 'lost' && (
        <LoseBanner answer={answer}/>
        )
      }
  </>
  );
}

export default Game;
