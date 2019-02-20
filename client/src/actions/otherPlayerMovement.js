import store from "../store";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

receivePlayerData()
playerConnected()


function playerConnected() {
    socket.on('player-connected', (data) => {
    console.log(data)

  })
}

export function receivePlayerData() {
    
  socket.on('move-completed', (data) => {

    console.log(data)
 
  return dispatchOtherPlayerMove(data.position)
  })
}



function dispatchOtherPlayerMove(direction){
    store.dispatch({
        type: "MOVE_OTHERPLAYER",
        payload: {position: direction}
    })
}