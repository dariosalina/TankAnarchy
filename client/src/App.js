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

  hideButton() {
    if(this.state.display === false) {
      return <button onClick={()=> {this.startGame()}}>Start Game!!!</button>
    }
  }

  render(){
  return (
      <div className="App"
      style={
        {backgroundColor :'#4b5320',
        textAlign: 'center',
        border: 'solid, 10px, white',
        padding: '10px',
      }}>
        <header
        style={{
          fontSize:35,
          textAlign: 'center',
          textDecorationStyle: 'bold',
          color: 'white',
          fontWeight: 'bold',
        }}>TANK ANARCHY
        <br />
        </header>
        <Score />
        {this.hideButton()}
        {this.displayMap()}
      <footer>Made with love by Joey & Dario</footer>
      </div>
      
    );
  }}


export default App;
