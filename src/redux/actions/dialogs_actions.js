import {action_type} from "../action_type";

//action creators
export const sendMessageAC = (newMessageBody) => ({type: action_type.SEND_MESSAGE, newMessageBody});