import React from 'react';
import { range } from '../../utils';

function Slots({guess}){
    return(
        <>  
            <p className='guess'>   
            {range(5).map((num) => (
                <span key={num} className="cell">
                    {guess ? guess[num] : undefined}
                </span>
            ))}
            </p>

        </>
    )
}

export default Slots;