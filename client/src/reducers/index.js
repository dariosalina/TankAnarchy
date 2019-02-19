import {combineReducers} from 'redux'
import playerReducer from './player'
import otherPlayerReducer from './otherplayer'

const reducer = combineReducers ({
    player: playerReducer,
    otherPlayer: otherPlayerReducer
})

export default reducer