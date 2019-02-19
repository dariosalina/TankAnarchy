import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');


const inititalState = {
    position: [0,0]
}



const playerReducer = (state = inititalState, action) => {

    switch(action.type) {
        case 'MOVE_PLAYER':
        socket.emit('movement', ({position:action.payload.position}))

            return {
                ...action.payload
            }
        default:  
            return state
    }
}

export default playerReducer
