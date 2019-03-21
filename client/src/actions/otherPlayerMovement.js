import store from "../store";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

export function receivePlayerData() {

  socket.on('player-added', data => {
    const playersID = store.getState().playersID
    console.log('Compare playersID', playersID, 'with', data.ID)
    if (data.ID === playersID) {
      store.dispatch({
        type: "MOVE_PLAYER",
        payload: data.payload
      });
      console.log('move player')
    } else if (data.ID !== playersID) {
      console.log('player-added', data.payload)
      dispatchOtherPlayerMove(data.payload)
    }
  })



  socket.on("move-completed", data => {
    const playersID = store.getState().playersID
    if (data.ID !== playersID)
      dispatchOtherPlayerMove(data.payload)
  })
}

function dispatchOtherPlayerMove(direction) {
  store.dispatch({
    type: "MOVE_OTHERPLAYER",
    payload: direction
  })
}

export function reveivePlayersMines() {
  socket.on("mines-to-client", data => {
    const playersID = store.getState().playersID
    if (data.ID !== playersID)
      dispatchOtherPlayersMines((data.payload))
  })
}

function dispatchOtherPlayersMines(position) {
  store.dispatch({
    type: "DROP_MINE_OTHERPLAYER",
    payload: position
  })
}

export function reveivePlayersExplosions() {
  socket.on("explosion-to-client", data => {
    const playersID = store.getState().playersID
    if (data.ID !== playersID)
      dispatchOtherPlayersExplosion(data.payload)
  })
}

function dispatchOtherPlayersExplosion(position) {
  store.dispatch({
    type: "EXPLOSION_OTHERPLAYER",
    payload: position
  })
}