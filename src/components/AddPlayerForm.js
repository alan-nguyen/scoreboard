import React, { Component } from 'react';

class AddPlayerForm extends Component {
  playerInput = React.createRef();

  hanldeSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    // Clear input after submit
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.hanldeSubmit}>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player's name"
        />

        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
