import React from "react";
import { usePlayers } from "./Context";

function Stats() {
  const { players } = usePlayers();
  const totalPlayers = players?.length ?? 0;
  const totalScore = [...players].reduce(
    (acc, player) => acc + player.score,
    0
  );

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
