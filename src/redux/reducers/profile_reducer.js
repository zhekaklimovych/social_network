import {action_type} from "../action_type";

const initialState = {
    posts: [
        {
        message: 'Hello, my first post!'
        }
    ],
    newPostMessage: '',
    profile: null,
    status: ''
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
        case action_type.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case action_type.SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;