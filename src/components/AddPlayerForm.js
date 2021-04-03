import React from "react";
import { usePlayers } from "./Context";

const AddPlayerForm = () => {
  const { handleAddPlayer } = usePlayers();
  const [playerId, setPlayerId] = React.useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = playerInput.current || { value: "" };
    handleAddPlayer(input.value, createId());
    e.currentTarget.reset();
  };

  const createId = () => {
    setPlayerId((id) => id + 1);
    return playerId;
  };

  const playerInput = React.createRef();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
