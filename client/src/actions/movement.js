import store from "../store";
import openSocket from "socket.io-client";


const socket = openSocket("http://localhost:5000/");

export default function PlayerMovement(Player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "WEST":
        return [oldPos[0] - 40, oldPos[1]];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + 40];
      case "NORTH":
        return [oldPos[0], oldPos[1] - 40];
      case "EAST":
        return [oldPos[0] + 40, oldPos[1]];
      default:
        return console.log("not working");
    }
  }

  function getNewDirection(direction) {
    switch (direction) {
      case "WEST":
        return 270;
      case "SOUTH":
        return 180;
      case "NORTH":
        return 0;
      case "EAST":
        return 90;
      default:
        return console.log("not working");
    }
  }

  function dispatchMove(direction) {
    const playerMovement = {
      position: getNewPosition(direction),
      direction: getNewDirection(direction)
    };
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: playerMovement
    });
    socket.emit("movement", (socket.id, { playerMovement }));
    store.dispatch({
      type: "ADD_PLAYERID",
      payload: String(socket.id)
    });
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return dispatchMove("WEST");
      case 38:
        return dispatchMove("NORTH");
      case 39:
        return dispatchMove("EAST");
      case 40:
        return dispatchMove("SOUTH");
      case 32:
        return dropBullet();
      default:
        return console.log("handleKeyDonw");
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return Player;
}

export function dropBullet() {
  const oldPosX = store.getState().player.position[0];
  const oldPosy = store.getState().player.position[1];
  store.dispatch({
    type: "DROP_MINE",
    payload: { oldPosX, oldPosy }
  });
}

export function dispatchOtherPlayerMove(direction) {
  store.dispatch({
    type: "MOVE_OTHERPLAYER",
    payload: direction
  });
}

