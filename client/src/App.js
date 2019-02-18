import React, { Component } from 'react';
import PlayerContainer from './components/PlayerContainer'
import './App.css';
import {connect } from './api/index'


class App extends Component {
  constructor(props) {
    super(props);
    // call our connect function and define
    // an anonymous callback function that 
    // simply console.log's the received 
    // message
    connect(message => {
      console.log(message);
    });
  }

  return (
      <div className="App">
        <PlayerContainer />
      </div>
    );
  }


export default App;
