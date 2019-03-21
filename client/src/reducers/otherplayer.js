// const inititalState = {
//     position: [],
//     direction : ''
// }


const otherPlayerReducer = (state = {}, action) => {


    switch(action.type) {
        case 'MOVE_OTHERPLAYER':
            return action.payload
        
        default:  
            return state
    }
}

export default otherPlayerReducer