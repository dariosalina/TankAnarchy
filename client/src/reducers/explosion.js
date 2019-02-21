export default function explosionReducer(state = {}, action){
    console.log('test')
    switch(action.type) {
        case "EXPLOSION":    
            return action.payload
        default:
            return state
}
}