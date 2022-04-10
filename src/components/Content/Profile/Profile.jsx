import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo />
            <MyPosts 
                posts={props.profilePage.posts} 
                addPostToState={props.addPostToState} 
                newPostText={props.profilePage.newPostText}
                updateNewTextPost={props.updateNewTextPost}
            />
        </div>
    )
}

export default Profile;