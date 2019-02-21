import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerMovement from "../actions/movement";
import Panther from './Panther.png'
import calculateDistance from '../actions/movement'

class Player extends Component {



  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          position: "absolute",
          top: this.props.position[1]-45,
          left: this.props.position[0]-30,
          backgroundImage: `url(${Panther})`,
          transform: `rotate(${this.props.direction}deg)`,
          width: 60,
          height: 90
        }}
      >
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(PlayerMovement(Player));
