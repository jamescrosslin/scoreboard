import React from "react";
import { usePlayers } from "./Context";

const Counter = (props) => {
  const { id, score } = props;
  const { handleScoreChange } = usePlayers();
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => handleScoreChange(id, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => handleScoreChange(id, 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
