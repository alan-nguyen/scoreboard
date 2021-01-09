import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {(context) => {
        const highScore = context.actions.getHighScore();
        return (
          <React.Fragment>
            {context.players.map((player, index) => (
              <Player
                key={player.id.toString()}
                index={index}
                isHighScore={highScore === player.score}
              />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default PlayerList;
