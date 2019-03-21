export default function scoreReducer (state = 0, action){
    switch(action.type) {
        case "UPDATESCORE":    
            return state + 1
        default:
            return state
}
}