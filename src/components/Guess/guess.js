import React from 'react';
import Slots from '../Slots/Slots';

function Guess({inputs}){
    console.log("Inside Guesses Component", inputs);
    return(
    <>
    <div className="guess-results">
        {inputs.map(({guess, id}) => (  
        //  <p key={id} className='guess'>{guess}</p>
         <Slots guess={guess} id={id}/>
        ))}
    </div>
    </>
    )
}


export default Guess;