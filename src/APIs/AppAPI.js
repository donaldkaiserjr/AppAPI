import React, { Component } from "react";

class AppAPI extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
      height: null
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    let maxNumber = 83;
    let randomNumber = Math.floor(Math.random() * maxNumber + 1);

    fetch(`https://swapi.dev/api/people/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
          height: data
        });
      });
  }
  render() {
    const text = this.state.loading
      ? "loading..."
      : this.state.character.name + `  --${this.state.character.height} lbs `;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default AppAPI;
