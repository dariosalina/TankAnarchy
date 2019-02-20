
const inititalState = {
    position: [0,0],
    direction : ''
}



const playerReducer = (state = inititalState, action) => {
    console.log(action)

    switch(action.type) {
        case 'MOVE_PLAYER':
        // socket.emit('movement', ({position:action.payload.position}))

            return {
                ...action.payload
            }
        default:  
            return state
    }
}

export default playerReducer
