const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';

const dialogsReducer = (state, action)=> {
    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText
            }
            if(newMessage.message !== '') {
                state.messages.push(newMessage);
                state.newMessageText = '';
            };
            return state;

        case UPDATE_NEW_TEXT_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
    
        default:
            return state;
    }
}

export const addMessageActionCreator = ()=> ({ type: ADD_MESSAGE })
export const updateNewTextMessageActionCreator = text => ({ type: UPDATE_NEW_TEXT_MESSAGE, newMessage: text})

export default dialogsReducer;