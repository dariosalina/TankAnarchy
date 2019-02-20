import React, { Component } from "react";
import { Layer } from "react-konva";
// import Ball from "./Ball";
import Map from "./map";
import Player from "./Player";
import OtherPlayer from "./OtherPlayer";
import store from '../store'
import {Provider} from 'react-redux'

export default class Game extends Component {
  render() {
    return (
      <Provider store={store}>
      <Layer>
        <Map />
        <Player />
        <OtherPlayer />
      </Layer>
      </Provider>
    );
  }
}
