import React, { Component } from "react";
import { connect } from "react-redux";
import Coin from "./FlagCoin.png";
// import { reveivePlayersMines } from "../actions/otherPlayerMovement";

class Flag extends Component {
  render() {
    const flagPos = this.props;
    
    if (this.props === {}) return <div></div>;
    return (
      <div
        style={{
          position: "absolute",
          border: 'solid',
          top: flagPos[1],
          left: flagPos[0],
          backgroundImage: `url(${Coin})`,
          width: 40,
          height: 40,
          
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return  state.flag ;
}

export default connect(mapStateToProps)(Flag);
