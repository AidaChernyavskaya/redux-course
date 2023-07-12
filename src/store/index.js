import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)));
