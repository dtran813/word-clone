import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map(index => (
        <Cell
          key={index}
          letter={value ? result[index].letter : undefined}
          status={value ? result[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
