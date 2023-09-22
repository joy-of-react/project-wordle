import React from 'react';

function Guess({inputs}){
    console.log("Inside Guesses Component", inputs);
    return(
    <>
    <div className="guess-results">
        {inputs.map(({guess, id}) => (
            <p key={id} className='guess'>{guess}</p>
        ))}
       
    </div>
    </>
    )
}


export default Guess;