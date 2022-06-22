const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';

const initialState = {
    dialogs: [
        { name: 'Anna Sthesia', id: 1 },
        { name: 'Paul Molive', id: 2 },
        { name: 'Anna Mull', id: 3 },
        { name: 'Paige Turner', id: 4 },
        { name: 'Anna Sthesia', id: 5 },
        { name: 'Paul Molive', id: 6 },
        { name: 'Anna Mull', id: 7 },
        { name: 'Paige Turner', id: 8 }
    ],
    messages: [
        { message: 'hello' },
        { message: 'how are u?' },
        { message: 'Yo'},
        { message: 'HeHe' },
        { message: 'hello' },
        { message: 'how are u?' },
        { message: 'Yo'},
        { message: 'HeHe' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action)=> {
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