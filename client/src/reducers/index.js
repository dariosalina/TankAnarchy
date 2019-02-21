import {combineReducers} from 'redux'
import playerReducer from './player'
import otherPlayerReducer from './otherplayer'
import createPlayersID from './addPlayerID'

const reducer = combineReducers ({
    playersID: createPlayersID,
    player: playerReducer,
    otherPlayer: otherPlayerReducer
})

export default reducer