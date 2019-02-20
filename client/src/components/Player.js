import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerMovement from "../actions/movement";
import {receivePlayerData} from '../actions/otherPlayerMovement'
// import {playerConnected} from '../actions/otherPlayerMovement'
// receivePlayerData()
// playerConnected()
import Tank from './Tank.png'


class Player extends Component {
  render() {

    const {playersID, players} = this.props

    if(!players[playersID]) {return 'loading...'}
    return (
      <div
        style={{
          position: 'absolute',
          top: players[playersID].position[0],
          left: players[playersID].position[1],
          backgroundImage: `url(${Tank})`,
          transform: `rotate(${this.props.players.direction}deg)`,
          color: "white",
          width: 60,
          height: 50
        }}
      >
        {/* Player 1  */}
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
