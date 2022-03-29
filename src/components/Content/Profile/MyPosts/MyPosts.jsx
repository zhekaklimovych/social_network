import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.state.map( ( p,index ) => <Post key={index} message={p.message}/>);
    let newPostElement = React.createRef();

    const addPost = () => {
        
        let text = newPostElement.current.value;
        props.addPostToState(text);
        newPostElement.current.value = '';
    }

    return(
        <div className={s.posts_wrapper}>
            <h2 className={s.title}>My posts</h2>
            <div>
                <textarea ref={newPostElement} placeholder='Enter message...'></textarea>
                <button onClick={addPost} className={s.send}>Send</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;