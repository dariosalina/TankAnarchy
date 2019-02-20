import store from "../store";
import Bullet from "../components/Bullet";
// import BulletContainer from '../components/BulletCOntainer'

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
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPosition(direction),
        direction: getNewDirection(direction)
      }
    });
  }

  function shootBullet() {
    const bullet = new Bullet();

    console.log("bullet", bullet);
    return bullet;
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

export function dispatchOtherPlayerMove(direction) {
  console.log(direction);
  store.dispatch({
    type: "MOVE_OTHERPLAYER",
    payload: direction
  });
}

// window.addEventListener("keydown", e => {
//   handleKeyDown(e);
// });

//   //function onclick space bar to shoot->create bullet
//   handleKeyDown = (e) => {
//     e.preventDefault();
//     switch (e.keyCode) {
//       case 32:
//         return shootBullet()
// function renderBulletComponent(){

//     return (<div><BulletContainer /></div>)
// }
// console.log('bullet')
// <Bullet position={this.props.position} direction={this.props.direction}/>
//       default:
//         return console.log("handleKeyDonw");
//     }
//   }

// function shootBullet() {
//   //create a bullet component moving from player position and according to the direction
//   return (<div><Bullet position={this.props.position} direction={this.props.direction}/></div>)
// }
