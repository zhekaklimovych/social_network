import {action_type} from "../action_type";

const initialState = {
    posts: [
        {
        message: 'Hello, my first post!'
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case action_type.ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    message: newPost
                }],
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