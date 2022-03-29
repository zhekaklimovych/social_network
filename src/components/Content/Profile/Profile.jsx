import { addPost } from '../../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo />
            <MyPosts state={props.state.posts} addPostToState={props.addPostToState} />
        </div>
    )
}

export default Profile;