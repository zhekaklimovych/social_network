import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/img/avatar.png';
import {NavLink} from "react-router-dom";


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
                                <img src={userPhoto} className={s.userPhoto} alt={'avatar'}/>
                            </NavLink>

                            <p>{u.name}</p>
                            <p>{u.email}</p>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
            </div>)
        }
    </div>
}

export default Users;