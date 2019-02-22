import React, { Component } from 'react';
import Map from './components/map'
import './App.css';


class App extends Component {

  render(){
  return (
      <div className="App"
      style={
        {backgroundColor :'#d1ffa3',
      }}>
        <header
        style={
          {fontSize:30,
        }}>TankAnarchy</header>
       <Map />
      <footer>Made with love by Joey&Dario</footer>
      </div>
    );
  }}


export default App;
