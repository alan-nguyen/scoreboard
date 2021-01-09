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
          {context.map((player, index) => (
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              changeScore={props.changeScore}
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
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  isHighScore: PropTypes.func.isRequired,
};

export default PlayerList;
