import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={s.content}>
          <div>
            <img src='https://fischermechanical.com/wp-content/uploads/shutterstock_349400798-1000x300.jpg' alt='image'/>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;