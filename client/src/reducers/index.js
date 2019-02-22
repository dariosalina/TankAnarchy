import {combineReducers} from 'redux'
import playerReducer from './player'
import otherPlayerReducer from './otherplayer'
import createPlayersID from './addPlayerID'
import mineReducer from './mines'
import explosionReducer from './explosion'

const reducer = combineReducers ({
    playersID: createPlayersID,
    player: playerReducer,
    otherPlayer: otherPlayerReducer,
    mines: mineReducer,
    explosion: explosionReducer
})

export default reducer