import store from "../store";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

   
export function receivePlayerData() {
  socket.on('move-completed', (data) => {
  
  const OtherPlayerID = data.id
  console.log(data.position)

  if (OtherPlayerID === socket.id){
    return console.log("is the same")
  } else {
  return dispatchOtherPlayerMove(data.position)
  }})
}



function dispatchOtherPlayerMove(direction){
    console.log(direction)
    store.dispatch({
        type: "MOVE_OTHERPLAYER",
        payload: {position: direction}
    })
}