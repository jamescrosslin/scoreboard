import React from "react";
import Counter from "./Counter";
import Icon from "./Icon";

const Player = (props) => {
  const { name, removePlayer, id, leader } = props;
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        <Icon leader={leader} />
        {name}
      </span>
      <Counter {...props} />
    </div>
  );
};

export default Player;
