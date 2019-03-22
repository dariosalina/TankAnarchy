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

  function checkBoundaries(oldPos, newPos) {
    return newPos[0] >= 0 &&
      newPos[0] <= 360 &&
      (newPos[1] >= 0 && newPos[1] <= 360)
      ? newPos
      : oldPos;
  }

  function dispatchMove(direction) {
    const oldPos = store.getState().player.position;

    const playerMovement = {
      position: checkBoundaries(oldPos, getNewPosition(direction)),
      direction: getNewDirection(direction)
    };
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: playerMovement
    });
    socket.emit("movement", (socket.id, { playerMovement }));
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return dispatchMove("WEST") & distanceToBombChecker() & distanceToFlagChecker();
      case 38:
        return dispatchMove("NORTH") & distanceToBombChecker() & distanceToFlagChecker();
      case 39:
        return dispatchMove("EAST") & distanceToBombChecker() & distanceToFlagChecker();
      case 40:
        return dispatchMove("SOUTH") & distanceToBombChecker() & distanceToFlagChecker();
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

export function distanceToBombChecker() {
  const PlayerPosX = store.getState().player.position[0];
  const PlayerPosY = store.getState().player.position[1];
  store.getState().mines.map(mine => {
    if (mine.oldPosX === PlayerPosX && mine.oldPosy === PlayerPosY) {
      Explosion(PlayerPosX, PlayerPosY)
      return null
    }
  })
}

export function distanceToFlagChecker() {
  const PlayerPosX = store.getState().player.position[0];
  const PlayerPosY = store.getState().player.position[1];

  if(store.getState().flag.position !== undefined) {
    const coinPosX = store.getState().flag.position[0]
    const coinPosY = store.getState().flag.position[1]
    if(coinPosX === PlayerPosX && coinPosY === PlayerPosY ) {
      ScoreCounter()
      socket.emit("new-flag-request")
    }
  }
}

function Explosion(PlayerPosX, PlayerPosY) {
  const explosionPosition = {
    y: PlayerPosX,
    x: PlayerPosY
  };
  store.dispatch({
    type: "EXPLOSION",
    payload: explosionPosition,
  });
  socket.emit("explosion", explosionPosition)
}

function ScoreCounter() {
  store.dispatch({
    type: "UPDATESCORE",
  })
  const score = store.getState().score
  socket.emit("update-score", score)
 }

export function dropBullet() {
  const oldPosX = store.getState().player.position[0];
  const oldPosy = store.getState().player.position[1];
  store.dispatch({
    type: "DROP_MINE",
    payload: { oldPosX, oldPosy }
  });
  socket.emit("drop-mine", (socket.id, { oldPosX, oldPosy }));
}

export function dispatchOtherPlayerMove(direction) {
  store.dispatch({
    type: "MOVE_OTHERPLAYER",
    payload: direction
  });
}

function dispatchPositionFlag() {
  socket.on("position-flag", data =>
    store.dispatch({
      type: "POSITION_FLAG",
      payload: data
    })
  );
}

export function startGame() {
  socket.emit('start-game', {
    id: socket.id,
    position: [0,0],
    
  })
  store.dispatch({
    type: "ADD_PLAYERID",
    payload: String(socket.id)
  });
  
  dispatchPositionFlag()

}