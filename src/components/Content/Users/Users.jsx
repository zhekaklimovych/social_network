import s from './Users.module.css';
import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/img/avatar.png';
class Users extends React.Component {

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then(response => {
        this.props.setUsers(response.data);
    })
  }

  render() {
    return <div>
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
            <div>{"u.status"}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
        </div>)
      }
    </div>
  }
}

export default Users;