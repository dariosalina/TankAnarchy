import React from "react";
import Player from "./Player";
import sand_template from './sand_template.jpg'

function Map(props) {
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
    </div>
  );
}

export default Map;
