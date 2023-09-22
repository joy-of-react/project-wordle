import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Slots(guess, id){
    return(
        <>
        {range(NUM_OF_GUESSES_ALLOWED).map(({num}) => (
                
                <p key = {num} className='guess'>
                        <span className="cell">F</span>
                        <span className="cell">I</span>
                        <span className="cell">R</span>
                        <span className="cell">S</span>
                        <span className="cell">T</span>
                </p>
         ))}
        </>
    )
}

export default Slots;