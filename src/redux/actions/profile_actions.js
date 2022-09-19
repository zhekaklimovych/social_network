import {action_type} from "../action_type";
import {profileAPI} from "../../api/api";

//action creators
export const addPost = () => ({type: action_type.ADD_POST});
export const updateNewPostText = text => ({ type: action_type.UPDATE_NEW_POST_TEXT, newMessage: text });
export const setUserProfile = profile => ({ type: action_type.SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: action_type.SET_STATUS, status });

//thunks
export const getUserProfile = userId => async dispatch => {
    await profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}

export const getStatus = userId => async dispatch => {
    await profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    });
}

export const updateStatus = status => async dispatch => {
    await profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}