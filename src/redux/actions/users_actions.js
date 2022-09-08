import {action_type} from "../action_type";

export const followAC = (userId) => ({type: action_type.FOLLOW, userId})
export const unfollowAC = (userId) => ({type: action_type.UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: action_type.SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: action_type.SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: action_type.SET_TOTAL_USERS_COUNT, count: totalUsersCount })
