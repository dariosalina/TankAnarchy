import store from "../store";

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');

// export const ADD_PLAYER = 'ADD_PLAYER'


export const newPlayer = () => {
    console.log("Player added")
        socket.emit('new-player', {
                position: [0,0],
                direction: ''
            },

        )
    }


socket.on('update-players', data => {
    console.log(data)
    store.dispatch({type: "ADD_PLAYER",
    payload: data  })
})

// export function addPlayer(data) {()
//   sto
//         type: "ADD_PLAYER",
//         payload: data  })
       
// }
