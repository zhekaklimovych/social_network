import s from './Users.module.css';
import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/img/avatar.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/api/users/?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.users);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3001/api/users/?page=${pageNumber}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.users);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>

            <div>
                { pages.map( (p,id) => {
                    return(
                        <span 
                            key={id} 
                            className={this.props.currentPage === p ? s.selectedPage : null}
                            onClick={() => { this.onPageChanged(p); }}
                            >
                                {p}
                        </span>) 
                })}
            </div>
            {
                this.props.users.map(u => <div key={u._id}>
                    <span>
                        <div>
                            <img src={userPhoto} className={s.userPhoto}/>
                            <p>{u.name}</p>
                            <p>{u.email}</p>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u._id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u._id) }}>Follow</button>}
                        </div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;