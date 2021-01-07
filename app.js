// Header of the board
function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

// Player Component
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name"> {props.name} </span>

      <Counter />
    </div>
  );
};

// Counter Component
class Counter extends React.Component {
  state = {
    score: 0,
  };

  // Increase a score by one
  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  // Decrease a score by one
  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

// Main App component
class App extends React.Component {
  state = {
    players: [
      {
        name: 'Guil',
        id: 1,
      },
      {
        name: 'Treasure',
        id: 2,
      },
      {
        name: 'Alan',
        id: 3,
      },
      {
        name: 'James',
        id: 4,
      },
    ],
  };

  // Remove a player
  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        // Filter the players which have the id different from the providing id
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map((player) => (
          <Player name={player.name} key={player.id.toString()} />
        ))}
      </div>
    );
  }
}

// Render top component
ReactDOM.render(<App />, document.getElementById('root'));
