import React, { Component } from "react";
import { connect } from "react-redux";
import bullet from "./bullet.png";


class Bullet extends Component {
  
  
  
  
  
  render() {
    const mines = this.props.mines;
    return (
      <div>
        {mines.map(mine => (
          <div
            style={{
              position: "relative",
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
