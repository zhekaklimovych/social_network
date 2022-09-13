import {action_type} from "../action_type";

export const setAuthUserData = (userId, email, login) => ({type: action_type.SET_AUTH_USER_DATA, data: {userId, email, login}});

