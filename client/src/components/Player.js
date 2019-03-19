import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerMovement from "../actions/movement";
import RTank from './RTank.png'



class Player extends Component {


  render() {
    return (
      <div
        style={{
          border: 'solid',
          position: "relative",
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url(${RTank})`,
          transform: `rotate(${this.props.direction}deg)`,
          width: 40,
          height: 40 
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
