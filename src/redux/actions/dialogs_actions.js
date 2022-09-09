import {action_type} from "../action_type";

export const sendMessage = () => ({type: action_type.SEND_MESSAGE});
export const updateNewMessageText = text => ({
    type: action_type.UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
})