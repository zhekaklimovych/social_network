import { action_type } from "../action_type";

export const followAC = (userId)=> ({ type: action_type.FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: action_type.UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: action_type.SET_USERS, users })