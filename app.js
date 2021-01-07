const players = [
  {
    name: 'Guil',
    score: 50,
  },
  {
    name: 'Treasure',
    score: 85,
  },
  {
    name: 'Alan',
    score: 95,
  },
  {
    name: 'James',
    score: 80,
  },
];

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name"> {props.name} </span>

      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* Players list */}
      {props.initialPlayers.map((player) => (
        <Player name={player.name} score={player.score} />
      ))}
    </div>
  );
};

// Render top component
ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);
