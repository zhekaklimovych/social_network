import {action_type} from '../action_type';

const initialState = {
    dialogs: [
        {
            name: 'Anna Sthesia',
            id: 1
        },
        {
            name: 'Paul Molive',
            id: 2
        },
        {
            name: 'Anna Mull',
            id: 3
        },
        {
            name: 'Paige Turner',
            id: 4
        },
        {
            name: 'Anna Sthesia',
            id: 5
        },
        {
            name: 'Paul Molive',
            id: 6
        },
        {
            name: 'Anna Mull',
            id: 7
        },
        {
            name: 'Paige Turner',
            id: 8
        }
    ],
    messages: [
        {
            message: 'hello'
        },
        {
            message: 'how are u?'
        },
        {
            message: 'Yo'
        },
        {
            message: 'HeHe'
        },
        {
            message: 'hello'
        },
        {
            message: 'how are u?'
        },
        {
            message: 'Yo'
        },
        {
            message: 'HeHe'
        }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case action_type.SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {
                    message: body
                }]
            }

        case action_type.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state;
    }
}

export default dialogsReducer;