import React, { useState } from 'react';

export const ScoreboardContext = React.createContext();
const initialPlayers = [
  {
    name: 'Alan',
    score: 0,
    id: 1,
  },
  {
    name: 'Treasure',
    score: 0,
    id: 2,
  },
  {
    name: 'Ashley',
    score: 0,
    id: 3,
  },
  {
    name: 'James',
    score: 0,
    id: 4,
  },
];
let prevPlayerId = 4;

export const Provider = (props) => {
  const [players, setPlayers] = useState(initialPlayers);
  // player id counter

  const handleScoreChange = (index, delta) => {
    setPlayers((prevState) => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return updatedPlayers;
    });
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevState) => {
      return [
        ...prevState,
        {
          name,
          score: 0,
          id: (prevPlayerId += 1),
        },
      ];
    });
  };

  const handleRemovePlayer = (id) => {
    setPlayers((prevState) => prevState.filter((p) => p.id !== id));
  };

  const getHighScore = () => {
    const scores = players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  return (
    <ScoreboardContext.Provider
      value={{
        players,
        actions: {
          changeScore: handleScoreChange,
          removePlayer: handleRemovePlayer,
          addPlayer: handleAddPlayer,
          getHighScore: getHighScore,
        },
      }}
    >
      {props.children}
    </ScoreboardContext.Provider>
  );
};
