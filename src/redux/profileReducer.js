const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [{
      message: 'Hello, my first post!'
    },
    {
      message: 'And my too!'
    }
  ],
  newPostMessage: ''
}


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = state.newPostMessage;
      return {
        ...state,
        newPostMessage: '',
          posts: [...state.posts, newPost],
      }
      case UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostMessage: action.newMessage
        }
        default:
          return state;
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newMessage: text
})

export default profileReducer;