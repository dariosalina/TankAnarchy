export default function otherPlayerScoreReducer (state = 0, action){
    switch(action.type) {
        case "UPDATE_SCORE_OTHERPLAYER":    
            return state + 1
        default:
            return state
}
}