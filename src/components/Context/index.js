import React, { PropsWithChildren } from "react";
import PlayerData from "../../interfaces/PlayerData";

const PlayersContext = React.createContext({
  players: [],
  setPlayers: () => {},
});

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = React.useState([]);
  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => {
  const { players, setPlayers } = React.useContext(PlayersContext);

  const handleScoreChange = React.useCallback(
    (id, addend) => {
      setPlayers((players) => {
        const clone = [...players];
        const player = clone.find((player) => player.id === id) || { score: 0 };
        player.score += addend;
        return clone;
      });
    },
    [setPlayers]
  );

  const handleRemovePlayer = React.useCallback(
    (id) => {
      setPlayers((players) => players.filter((player) => player.id !== id));
    },
    [setPlayers]
  );

  const handleAddPlayer = React.useCallback(
    (name, id) => {
      setPlayers((players) => {
        const playerObj = {
          name,
          id,
          score: 0,
        };
        return [...players, playerObj];
      });
    },
    [setPlayers]
  );

  return { players, handleScoreChange, handleRemovePlayer, handleAddPlayer };
};
