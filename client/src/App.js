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
      return (<div><p>Catch as many coins possible. But watch out for the bombs! </p> 
        <button onClick={()=> {this.startGame()}}>Join the game!</button></div>)
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
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}><h1>TANK ANARCHY</h1>
     
        </header>
       
        <Score />
        {this.hideButton()}
        {this.displayMap()}
      <footer style={{
        color: 'white'
      }}>Made with love by Joey & Dario</footer>
      </div>
      
    );
  }}


export default App;
