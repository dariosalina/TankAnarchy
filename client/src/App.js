import React, { Component } from 'react';
import Map from './components/map'
import './App.css';
import {startGame} from './actions/movement'

class App extends Component {

  state = {
    showmap: "hide"
  }

  render(){
  return (
      <div className="App"
      style={
        {backgroundColor :'#d1ffa3',
        textAlign: 'center'
      }}>
        <header
        style={{
          fontSize:30,
          textAlign: 'center'
        }}>TankAnarchy
        <br />
        <button onClick={()=> {startGame()}}>Start Game!!!</button>
        </header>
       <Map />
      <footer>Made with love by Joey & Dario</footer>
      </div>
    );
  }}


export default App;
