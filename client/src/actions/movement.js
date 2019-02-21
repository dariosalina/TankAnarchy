import store from "../store";
import openSocket from 'socket.io-client';
// import Bullet from "../components/bullet";
const socket = openSocket('http://localhost:5000/');


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

  function checkBoundaries(oldPos, newPos){
    return (newPos[0] >= 0 && newPos[0] <= 780) &&
           (newPos[1] >=0 && newPos[1] <= 560)
            ? newPos : oldPos
  }

  function dispatchMove(direction) {
    const oldPos = store.getState().player.position

    const playerMovement = {
      position: checkBoundaries(oldPos, getNewPosition(direction)),
      direction: getNewDirection(direction)
    }
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: playerMovement
    })
    socket.emit('movement', (socket.id, {playerMovement}))
    console.log('movement from client to server with ID',socket.id);
    store.dispatch({
      type: "ADD_PLAYERID",
      payload: String(socket.id)
    })
  }
function bulletAnimation(bullet) {
  let start = Date.now(); // remember start time
  let bulletOrigin = [...store.getState().player.position]
  let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 1000) {
      clearInterval(timer); // finish the animation after 2 seconds
      return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);
  }, 20);
  
  // as timePassed goes from 0 to 2000
  // left gets values from 0px to 400px
  function draw(timePassed) {
    
     bulletOrigin[0] = timePassed / 5 + 'px';
    console.log(bulletOrigin) 
  }
}


  function shootBullet() {
    // const bullet = new Bullet()
    bulletAnimation()
    console.log(bulletAnimation())
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
        return shootBullet();
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

