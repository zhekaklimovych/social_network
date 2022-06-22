const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        { message: 'Hello, my first post!'},
        { message: 'And my too!'}
    ],
    newPostMessage: ''
}


const profileReducer = (state = initialState, action)=> {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostMessage
            }
            if(newPost.message !== '') {
                state.posts.push(newPost);
                state.newPostMessage = '';
            };
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = ()=> ({ type: ADD_POST })
export const updateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newMessage: text})

export default profileReducer;
