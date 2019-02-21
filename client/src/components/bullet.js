import React, { Component } from "react";
// import { connect } from "react-redux";
import bullet from './bullet.png'


export default class Bullet {
    
    render (){
        return (
            <div
            style={{
                
                // top: this.props.position[1],
                // left: this.props.position[0],
                backgroundImage: `url(${bullet})`,
                // transform: `rotate(${this.props.direction}deg)`,
                // color: "white",
                width: 10,
                height: 10
              }}></div>
        )
    }
}