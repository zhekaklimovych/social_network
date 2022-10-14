import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers/root_reducer";

const middleWares = applyMiddleware(thunkMiddleware);
let store = createStore(reducers, middleWares);

window.store = store;

export default store;