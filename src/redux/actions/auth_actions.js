import {action_type} from "../action_type";
import {authAPI} from "../../api/api";

//action creators
export const setAuthUserData = (userId, email, login) => ({type: action_type.SET_AUTH_USER_DATA, data: {userId, email, login}});

//thunks
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id,email,login));
            }
        });
};

