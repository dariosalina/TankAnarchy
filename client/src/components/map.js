import React from "react";
import Player from "./Player";
import OtherPlayer from "./OtherPlayer";

function Map(props) {
  return (
    <div
      style={{
        height: "300px",
        width: "400px",
        border: "4px solid black"
      }}
    >
      <Player />
      <OtherPlayer />
    </div>
  );
}

export default Map;
