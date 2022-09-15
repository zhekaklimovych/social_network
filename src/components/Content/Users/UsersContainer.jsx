import {connect} from 'react-redux';
import React from "react";

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
    getUsersOnChanged,
    toggleFollowingProgress
} from '../../../redux/actions/users_actions';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersOnChanged(pageNumber, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default  connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, getUsers, getUsersOnChanged, toggleFollowingProgress })(UsersContainer);
