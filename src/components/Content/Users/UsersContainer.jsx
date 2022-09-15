import {connect} from 'react-redux';
import React from "react";

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching } from '../../../redux/actions/users_actions';
import {usersAPI} from "../../../api/api";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
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

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching })(UsersContainerAPI);
export default UsersContainer;