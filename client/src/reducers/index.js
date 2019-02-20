import {combineReducers} from 'redux'
// import playerReducer from './player'
import {addPlayer} from './addPlayer';
// import otherPlayerReducer from './otherplayer'

const reducer = combineReducers ({
    players: addPlayer
   
})

export default reducer