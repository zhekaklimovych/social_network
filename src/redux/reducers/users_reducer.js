import {action_type} from '../action_type';

const initialState = {
    users: [],
    totalUsersCount: 21,
    pageSize: 5,
    currentPage: 3
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case action_type.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case action_type.SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case action_type.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case action_type.SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}

export default usersReducer;