import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ItemsReducer from './reducers/items'
import EffectReducer from './reducers/effects'



export default createStore(combineReducers(
    {ItemsReducer, EffectReducer}),
    {},
    applyMiddleware(thunk))