import {action_type} from "../action_type";
import {usersAPI} from "../../api/api";

//action creators
export const followSuccess = (userId) => ({type: action_type.FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: action_type.UNFOLLOW, userId})
export const setUsers = (users) => ({type: action_type.SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: action_type.SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: action_type.SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const setToggleIsFetching = (isFetching) => ({type: action_type.TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({type: action_type.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

//thunks
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const getUsersOnChanged = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setToggleIsFetching(true));

        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}



