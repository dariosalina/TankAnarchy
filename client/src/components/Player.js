import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerMovement from "../actions/movement";
import {receivePlayerData} from '../actions/otherPlayerMovement'
// import {playerConnected} from '../actions/otherPlayerMovement'
// receivePlayerData()
// playerConnected()
import Tank from './Tank.png'

receivePlayerData()


class Player extends Component {
  

  render() {
    console.log(this.props.position)
    return (
      <div>
      {!this.props && "loading..."}
      <div
        style={{
          position: "relative",
          top: 1,
          left: 1,
          backgroundImage: `url(${Tank})`,
          transform: `rotate(${this.props.direction}deg)`,
          color: "white",
          width: 60,
          height: 50
        }}
      >
        {/* Player 1  */}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(PlayerMovement(Player));
