import React from "react";
import Player from "./Player";
import OtherPlayer from "./OtherPlayer";
import sand_template from './sand_template.jpg'
import Bullet from "./bullet";


function Map() {
  return (
    <div
      style={{
        height: "600px",
        width: "800px",
        border: "4px solid black",
        backgroundImage: `url(${sand_template})`
      }}
    >
      <Player />
      <OtherPlayer />
      <Bullet/>
    </div>
  );
}

export default Map;
