import React from "react";
import Player from "./Player";
import { usePlayers } from "./Context";

function PlayerList() {
  const { players, handleRemovePlayer } = usePlayers();

  const highScore = Math.max(...players.map((player) => player.score));
  return (
    <React.Fragment>
      {players.map((player) => (
        <Player
          {...player}
          leader={player.score === highScore && highScore > 0}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      ))}
    </React.Fragment>
  );
}

export default PlayerList;
