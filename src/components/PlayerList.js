import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {
  const highScore = props.getHighScore();

  return (
    <Consumer>
      {(context) => (
        <React.Fragment>
          {context.players.map((player, index) => (
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              removePlayer={props.removePlayer}
              isHighScore={highScore === player.score}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};

PlayerList.propTypes = {
  removePlayer: PropTypes.func.isRequired,
  isHighScore: PropTypes.bool,
};

export default PlayerList;
