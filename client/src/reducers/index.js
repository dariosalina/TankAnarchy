import {combineReducers} from 'redux'
import playerReducer from './player'

const reducer = combineReducers ({
    player: playerReducer
})

export default reducer