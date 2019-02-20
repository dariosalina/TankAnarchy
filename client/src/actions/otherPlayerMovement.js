import store from "../store";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000/");

receivePlayerData();

export function playerConnected() {
  socket.on("player-connected", data => {
    console.log(data);
  });
}

export function receivePlayerData() {
  socket.on("move-completed", data => {
    return dispatchOtherPlayerMove(data.position);
  });
}

function dispatchOtherPlayerMove(direction) {
  console.log(direction);
  store.dispatch({
    type: "MOVE_OTHERPLAYER",
    payload: { position: direction }
  });
}
