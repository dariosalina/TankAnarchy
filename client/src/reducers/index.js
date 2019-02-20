import {combineReducers} from 'redux'
import {addPlayer} from './addPlayer';
import { createPlayersID } from './createPlayerID';

// import otherPlayerReducer from './otherplayer'

const reducer = combineReducers ({
    playersID: createPlayersID,
    players: addPlayer
   
})

export default reducer