const inititalState = {
    players: {}
}

export const addPlayer = (state = inititalState, action) => {
    switch(action.type) {
        case 'ADD_PLAYER':
            return {
                ...action.payload
            }
        default:  
            return state
    }
}