import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ItemsReducer from './reducers/items'
import EffectReducer from './reducers/effects'



const AllReducers = combineReducers({  EffectReducer, ItemsReducer })
const loggerMiddleware = createLogger();
const enhancers = [];


const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(loggerMiddleware);
}

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composeEnhancers= compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(AllReducers, composeEnhancers)

export default store;
