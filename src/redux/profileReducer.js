const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST';

const initialState = {
    posts: [
        { message: 'Hello, my first post!'},
        { message: 'And my too!'}
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action)=> {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText
            }
            if(newPost.message !== '') {
                state.posts.push(newPost);
                state.newPostText = '';
            };
            return state;
    
        case UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newText;
            return state;
    
        default:
            return state;
    }
}

export const addPostActionCreator = ()=> ({ type: ADD_POST })
export const updateNewTextPostActionCreator = text => ({ type: UPDATE_NEW_TEXT_POST, newText: text})

export default profileReducer;
