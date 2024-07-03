import React, { useState } from "react";

const Game = ({ channel }) => {
  const [palyersJoined, setPlayersJoined] = useState(
    channel.state.watcher_count === 2
  );

  if (palyersJoined) {
    return <div>wating for other player join...</div>;
  }
  return <div>Game</div>;
};

export default Game;
