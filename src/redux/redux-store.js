import logger from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers, applyMiddleware(logger));
window.store = store;
export default store;