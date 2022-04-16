import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../../redux/profileReducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map( ( p,index ) => <Post key={index} message={p.message}/>);
    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange =()=> {
        let text = newPostElement.current.value;
        props.dispatch(updateNewTextPostActionCreator(text));
    }

    return(
        <div className={s.posts_wrapper}>
            <h2 className={s.title}>My posts</h2>
            <div>
                <textarea 
                    ref={newPostElement} 
                    placeholder='Enter message...' 
                    value={props.newPostText} 
                    onChange={onPostChange} 
                />
                <button onClick={addPost} className={s.send}>Send</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;