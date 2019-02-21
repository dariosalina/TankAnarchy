import React, { Component } from "react";
import { connect } from "react-redux";
import {receivePlayerData} from '../actions/otherPlayerMovement'
import T34 from './T-34-85.png'
receivePlayerData()

class OtherPlayer extends Component {
  

  render() {

    return (
       <div>
             {!this.props && "loading..."}
             
      <div
        style={{
          position: "relative",
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url(${T34})`,
          // transform: `rotate(${this.props.direction}deg)`,
          width: 60,
          height: 95
        }}
      >
        {/* Player2 */}
      </div>
      </div>    
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
  return {
    ...state.otherPlayer
  };
}

export default connect(mapStateToProps)(OtherPlayer);
