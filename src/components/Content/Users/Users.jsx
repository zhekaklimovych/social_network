import s from './Users.module.css';
import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/img/avatar.png';
class Users extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:5000/api/users`)
      .then(response => {
        this.props.setUsers(response.data);
    })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return <div>
      
      <div>
        {pages.map((p, id) => <span key={id} className={this.props.currentPage === p ? s.selectedPage: null}>{p}</span>)}
      </div>
      {
        this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={userPhoto} className={s.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
            </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.email}</div>
          </span>
          <span>
            <div>{u.phone}</div>
          </span>
        </span>
        </div>)
      }
    </div>
  }
}

export default Users;