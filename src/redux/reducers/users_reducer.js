import {action_type} from '../action_type';

const initialState = {
    users: [ ],
    totalUsersCount: 0,
    pageSize: 6,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, users: action.users}
        }
        case action_type.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case action_type.SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case action_type.TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case action_type.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export default usersReducer;