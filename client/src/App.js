import React, { Component } from 'react';
import Map from './components/map'
import './App.css';
import {startGame} from './actions/movement'
import {receivePlayerData} from './actions/otherPlayerMovement'
import Score from './components/Score'

class App extends Component {

  state = {
    showmap: "hide",
    display: false
  }

  componentWillMount(){
    receivePlayerData()
  }

  startGame() {
    this.setState({display: true})
    startGame()
  }

  displayMap() {
    if(this.state.display === true) {
      return <Map />
    }
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
        <button onClick={()=> {this.startGame()}}>Start Game!!!</button>
        </header>
        <Score />
        {this.displayMap()}
       {/* <Map /> */}
      <footer>Made with love by Joey & Dario</footer>
      </div>
      
    );
  }}


export default App;
