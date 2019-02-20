import store from "../store";

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

// export const ADD_PLAYER = 'ADD_PLAYER'


export const newPlayer = () => {
    socket.emit('new-player', {
            position: [0, 0],
            direction: ''
        },

    )
    store.dispatch({
        type: "ADD_PLAYERID",
        payload: String(socket.id)
    })
}

socket.on('update-players', data => {
    store.dispatch({
        type: "ADD_PLAYER",
        payload: data
    })
})