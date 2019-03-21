import React, { Component } from "react";
import { connect } from "react-redux";
import Bomb from "./Bomb.png";
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
              borderStyle: 'solid',
              position: "absolute",
              top: mine.oldPosy,
              left: mine.oldPosX,
              backgroundImage: `url(${Bomb})`,
              width: 40,
              height:40 
        
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
