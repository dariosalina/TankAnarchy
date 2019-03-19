import React, { Component } from "react";
import { connect } from "react-redux";
import {receivePlayerData} from '../actions/otherPlayerMovement'
import BTank from './BTank.png'

class OtherPlayer extends Component {
  
  componentDidMount() {
    receivePlayerData()
  }
  

  render() {

    return (
       <div>
             {!this.props && "loading..."}
             
      <div
        style={{
          border: 'solid',
          position: "relative",
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
