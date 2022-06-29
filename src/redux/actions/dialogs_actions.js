import { action_type } from "../action_type";

export const sendMessageAC = () => ({ type: action_type.SEND_MESSAGE });
export const updateNewMessageTextAC = text => ({
  type: action_type.UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text
})