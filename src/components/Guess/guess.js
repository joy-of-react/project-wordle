import React from 'react';
import Slots from '../Slots/Slots';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({inputs}){
    
    return(
    <>
    <div className="guess-results">

        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
            <Slots key={num} guess={inputs[num]} />  
        ))}
    </div>
    </>
    )
}


export default Guess;