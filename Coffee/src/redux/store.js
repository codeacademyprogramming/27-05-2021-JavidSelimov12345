import { applyMiddleware,combineReducers, createStore} from 'redux'
import { cofeeReducer } from '../modules/coffee/reducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    
    coffee: cofeeReducer
});

const middlewares = [
    thunk
    
]
    
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
