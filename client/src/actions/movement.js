import store from "../store";

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
  
  

  function dispatchMove(direction) {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPosition(direction)
      }
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
      default:
        return console.log("handleKeyDonw");
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return Player;
}


export function dispatchOtherPlayerMove(direction){
    console.log(direction)
    store.dispatch({
        type: "MOVE_OTHERPLAYER",
        payload: direction
    })
}