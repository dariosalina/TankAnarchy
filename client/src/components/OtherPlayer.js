import React, { Component } from "react";
import { connect } from "react-redux";
import {receivePlayerData} from '../actions/otherPlayerMovement'
import BTank from './BTank.png'

class OtherPlayer extends Component {
  
  componentDidMount() {
    receivePlayerData()
  }
  

  render() {
    if (!this.props.position) return 'Waiting for the other player'

    return (
       <div>
             {this.props === undefined  && "loading..."}
             
      <div
        style={{
          border: 'solid',
          position: "absolute",
          top: this.props.position[1],
          left: this.props.position[0],
          transform: `rotate(${this.props.direction}deg)`,
          backgroundImage: `url(${BTank})`,
          // transform: `rotate(${this.props.direction}deg)`,
          width: 40,
          height: 40
        }}
      >
        {/* Player2 */}
      </div>
      </div>    
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.otherPlayer
  };
}

export default connect(mapStateToProps)(OtherPlayer);
