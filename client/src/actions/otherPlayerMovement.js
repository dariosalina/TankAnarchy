import store from "../store";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

export function receivePlayerData() { 
 
socket.on("move-completed", data => {
  const playersID = store.getState().playersID
    if (data.ID !== playersID)
   dispatchOtherPlayerMove(data.payload)
  })

 
}

function dispatchOtherPlayerMove(direction){
    store.dispatch({
        type: "MOVE_OTHERPLAYER",
        payload: direction
    })
}

export function reveivePlayersMines(){
  socket.on("mines-to-client", data => {
    const playersID = store.getState().playersID
    if (data.ID !== playersID)

    dispatchOtherPlayersMines((data.payload))
    })
}

function dispatchOtherPlayersMines(position){
  store.dispatch({
      type: "DROP_MINE_OTHERPLAYER",
      payload: position
  })
}


