import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/img/avatar.png';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                        className={props.currentPage === p ? s.selectedPage : null}
                        onClick={() => { props.onPageChanged(p); }}
                    >
                                {p}
                        </span>)
            })}
        </div>
        {
            props.users.map(u => <div key={u._id}>
                    <span>
                        <div>
                            <img src={userPhoto} className={s.userPhoto} alt={'avatar'}/>
                            <p>{u.name}</p>
                            <p>{u.email}</p>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u._id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u._id) }}>Follow</button>}
                        </div>
                    </span>
            </div>)
        }
    </div>
}

export default Users;