const inititalState = {
    position: [0,0]
}


const otherPlayerReducer = (state = inititalState, action) => {


    switch(action.type) {
        case 'MOVE_OTHERPLAYER':
            return action.payload
        
        default:  
            return state
    }
}

export default otherPlayerReducer