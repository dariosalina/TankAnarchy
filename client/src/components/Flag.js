import React, { Component } from "react";
import { connect } from "react-redux";
import Coin from "./FlagCoin.png";
// import { reveivePlayersMines } from "../actions/otherPlayerMovement";

class Flag extends Component {
  render() {
    const flagPos = this.props;
    console.log(this.props);
    if (this.props === {}) return <div></div>;
    return (
      <div
        style={{
          position: "relative",
          top: flagPos[1],
          left: flagPos[0],
          backgroundImage: `url(${Coin})`,
          width: 50,
          height: 50,
          
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return  state.flag ;
}

export default connect(mapStateToProps)(Flag);
