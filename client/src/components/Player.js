import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerMovement from "../actions/movement";
import {receivePlayerData} from '../actions/otherPlayerMovement'
import {playerConnected} from '../actions/otherPlayerMovement'
// receivePlayerData()
// playerConnected()
import Tank from './Tank.png'

receivePlayerData()


class Player extends Component {
  

  render() {
    return (
      <div
        style={{
          position: "relative",
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url(${Tank})`,
          transform: `rotate(${this.props.direction}deg)`,
          // color: "white",
          width: 60,
          height: 50
        }}
      >
        {/* Player 1  */}
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
