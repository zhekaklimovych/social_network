import {action_type} from "../action_type";

export const follow = (userId) => ({type: action_type.FOLLOW, userId})
export const unfollow = (userId) => ({type: action_type.UNFOLLOW, userId})
export const setUsers = (users) => ({type: action_type.SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: action_type.SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: action_type.SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const setToggleIsFetching = (isFetching) => ({type: action_type.TOGGLE_IS_FETCHING, isFetching })
