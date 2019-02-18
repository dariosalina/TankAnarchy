import React, { Component } from 'react';
import Map from './components/map'
import './App.css';
import {connect} from './api/index'


class App extends Component {
  constructor(props) {
    super(props);  
    // call our connect function and define
    // an anonymous callback function that 
    // simply console.log's the received 
    // message
    // connect(message => {
    //   console.log(message);
    // });
    }

  render(){
  return (
      <div className="App">
        <Map />
      </div>
    );
  }}


export default App;
