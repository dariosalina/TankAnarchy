import React, { Component } from 'react';
import Map from './components/map'
import {newPlayer} from './actions/addPlayer'
import './App.css';
// import {connect} from './api/index'


class App extends Component {

  render(){
  return (
      <div className="App">
      <button onClick={() =>newPlayer()}>
  Start the game
</button>
        <Map />
      </div>
    );
  }}


export default App;
