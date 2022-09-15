import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/img/avatar.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            { pages.map( (p, index) => {
                return(
                    <span
                        key={index}
                        className={props.currentPage === p ? s.selectedPage : null}
                        onClick={() => { props.onPageChanged(p); }}
                    >
                                {p}
                        </span>)
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt={'avatar'}/>
                            </NavLink>

                            {/*<p>{u.name}</p>*/}
                            {/*<p>{u.email}</p>*/}
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "46f2df13-5bbb-47ca-9e5f-01d590cdf0be"
                                        }
                                    } )
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });


                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "46f2df13-5bbb-47ca-9e5f-01d590cdf0be"
                                        }
                                    } )
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                }}>Follow</button>}
                        </div>
                    </span>
            </div>)
        }
    </div>
}

export default Users;