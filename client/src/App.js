import React, { Component } from 'react';
import Map from './components/map'
import {newPlayer} from './actions/addPlayer'
import './App.css';
// import {connect} from './api/index'


class App extends Component {

  state = {
    displayMap: false,
  }

  // displayMap = () => {
  //   this.setState({
  //     display.
  //   })
  // }

  render(){
   
  return (
    <div> 
      <div>
      <button onClick={() =>console.log('test')}>Display map</button>
      <button onClick={() =>newPlayer()}>Start the game</button>
      </div>
      {(!this.displayMap)} {
        <div>
          <Map />
          </div>
      }}
      </div>
    );
  }}



export default App;
