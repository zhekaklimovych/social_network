import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/root_reducer";

let store = createStore(reducers, applyMiddleware(logger));

window.store = store;

export default store;