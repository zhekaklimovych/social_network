import {connect} from 'react-redux';
import React from "react";
import * as axios from "axios";

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
} from '../../../redux/actions/users_actions';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`http://localhost:3002/api/users/?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.users);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        axios.get(`http://localhost:3002/api/users/?page=${pageNumber}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.users);
            });
    }

    render() {
        return <>
            { this.props.isFetching && <Preloader /> }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         }
//     }
// }
const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching})(UsersContainerAPI);
export default UsersContainer;