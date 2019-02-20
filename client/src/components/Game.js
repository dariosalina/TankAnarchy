import React, { Component } from "react";
import { Layer } from "react-konva";
// import Ball from "./Ball";
import Map from "./map";
import Player from "./Player";
import OtherPlayer from "./OtherPlayer";

export default class Game extends Component {
  render() {
    return (
      <Layer>
        <Map />
        <Player />
        <OtherPlayer />
      </Layer>
    );
  }
}
