import {action_type} from "../action_type";

export const addPostAC = () => ({type: action_type.ADD_POST})
export const updateNewPostTextAC = text => ({
    type: action_type.UPDATE_NEW_POST_TEXT,
    newMessage: text
})