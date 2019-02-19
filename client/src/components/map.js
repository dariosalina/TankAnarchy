import React from "react";
import Player from "./Player";

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
    </div>
  );
}

export default Map;
