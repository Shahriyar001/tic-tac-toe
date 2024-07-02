import React, { useState } from "react";

const JoinGame = () => {
  const [rivalUsername, setRivalUsername] = useState("");
  return (
    <div className="joinGame">
      <h4>Crete Game</h4>
      <input
        placeholder="Username of rival"
        type="text"
        onChange={(event) => {
          setRivalUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default JoinGame;
