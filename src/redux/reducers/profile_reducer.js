import {action_type} from "../action_type";

const initialState = {
    posts: [
        {
        message: 'Hello, my first post!'
        }
    ],
    newPostMessage: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case action_type.ADD_POST:
            let newPost = state.newPostMessage;
            return {
                ...state,
                newPostMessage: '',
                posts: [...state.posts, {
                    message: newPost
                }],
            }
        case action_type.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostMessage: action.newMessage
            }
        default:
            return state;
    }
}

export default profileReducer;