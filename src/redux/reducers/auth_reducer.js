import {action_type} from '../action_type';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case action_type.SET_AUTH_USER_DATA:
            return { ...state, ...action.data, isAuth: true }
        default:
            return state;
    }
}

export default authReducer;