import React from 'react';

function AllGuesses(props) {
  return  <div className="guess-results">
    <ul>
      {
        props.guessList.map(list => {
          return <p className="guess">{list.guess}</p>
        })
      }
    </ul>
  </div> 
}

export default AllGuesses;
