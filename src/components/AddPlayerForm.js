import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: '',
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  hanldeSumit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />

        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
