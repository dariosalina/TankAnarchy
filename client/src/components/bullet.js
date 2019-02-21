import React, { Component } from "react";
import { connect } from "react-redux";
import bullet from "./bullet.png";
import {reveivePlayersMines} from '../actions/otherPlayerMovement'

class Bullet extends Component {

  componentDidMount(){
    reveivePlayersMines()
  }


  render() {
    const mines = this.props.mines;
    return (
      <div>
        {mines.map(mine => (
          <div
            style={{
              alignContent:'center',
              border: 2,
              // padding: 25,
              borderStyle: 'solid',
              position: "absolute",
              display: 'inline-block',
              top: mine.oldPosy,
              left: mine.oldPosX,
              backgroundImage: `url(${bullet})`,
              width: 10,
              height: 10
        
            }}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Bullet);
