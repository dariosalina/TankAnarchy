import React, { Component } from "react";
import Game from './components/Game'
import "./App.css";
import { Stage } from "react-konva";

class App extends Component {
  render() {
    return (
      <Stage
        className="App"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Game />
      </Stage>
    );
  }
}

export default App;
