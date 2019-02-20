import React, { Component } from "react";
import { connect } from "react-redux";




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
          backgroundColor: "red",
          color: "white",
          width: 40,
          height: 40
        }}
      >
        Player2
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
