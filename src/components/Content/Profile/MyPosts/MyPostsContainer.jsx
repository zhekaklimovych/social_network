import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=> {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text)=> {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;