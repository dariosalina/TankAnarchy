import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000/');


const inititalState = {
    position: [0,0],
    direction : ''
}



const playerReducer = (state = inititalState, action) => {



    switch(action.type) {
        case 'MOVE_PLAYER':
        socket.emit('movement', action.payload)
        // console.log(action.payload)
            return {
                ...action.payload
            }
        default:  
            return state
    }
}

export default playerReducer