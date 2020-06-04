import { createStore, combineReducers } from 'redux'
import ItemsReducer from './reducers/items'
import EffectReducer from './reducers/effects'



export default createStore(combineReducers([ItemsReducer, EffectReducer]))