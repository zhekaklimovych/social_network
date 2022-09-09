import {action_type} from "../action_type";

export const addPost = () => ({type: action_type.ADD_POST})
export const updateNewPostText = text => ({
    type: action_type.UPDATE_NEW_POST_TEXT,
    newMessage: text
})
export const setUserProfile = (profile) => ({
    type: action_type.SET_USER_PROFILE,
    profile
})