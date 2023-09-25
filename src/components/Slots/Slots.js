import React from 'react';
import { range } from '../../utils';
import {checkGuess} from '../../../src/game-helpers';


function Slots({guess, answer}){

    const status = checkGuess(guess, answer);
    console.log(status);

  
    function spanClass(num) {
        return guess ? `cell guess ? ${status[num]['status']}` : 'cell';
    }

  

    return(
        
        <>  
            <p className='guess'>   
            {range(5).map((num) => (
                <>
                <span key={num} className={spanClass(num)} >
                    {guess ? status[num]['letter'] : undefined}
                </span>               
                </>
            ))}
            </p>
        </>
        
    )
}

export default Slots;