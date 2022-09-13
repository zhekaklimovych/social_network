import {combineReducers} from 'redux';

import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';
import usersReducer from './users_reducer';
import auth_reducer from "./auth_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: auth_reducer
})

export default reducers;