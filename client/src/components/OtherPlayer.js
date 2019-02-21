import React, { Component } from "react";
import { connect } from "react-redux";
import receivePlayerData from '../actions/otherPlayerMovement'
import T34 from './T-34-85.png'

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
          position: "absolute",
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
  return {
    ...state.otherPlayer
  };
}

export default connect(mapStateToProps)(OtherPlayer);
