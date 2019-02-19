import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerMovement from "../actions/movement";
import {receivePlayerData} from '../actions/otherPlayerMovement'

receivePlayerData()

class Player extends Component {
  

  render() {
    return (
      <div
        style={{
          position: "relative",
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundColor: "blue",
          color: "white",
          width: 40,
          height: 40
        }}
      >
        Player
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
