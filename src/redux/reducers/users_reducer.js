import { action_type } from '../action_type';
const initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_type.FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case action_type.UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case action_type.SET_USERS: {
      return { ...state, users: [...action.users ]}
    }
    default:
      return state;
  }
}

export default usersReducer;