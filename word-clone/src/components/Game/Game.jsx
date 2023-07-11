import React from "react";
import GuessForm from '../GuessForm/GuessForm';

function Game() {

  const [items, setItems] = React.useState([
    {label: 'Radio', id: '123'}
  ]);

  function handleAddGuess(label) {
    const newItem = {
      label,
      id: Math.random(),
    }
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  return (
    <div>
      <ol>
        {items.map(({id, label}) => (
          <li key={id}>{label}</li>
        ))}
      </ol>
    <GuessForm handleAddGuess={handleAddGuess}/>
    </div>
  )

}

export default Game;
