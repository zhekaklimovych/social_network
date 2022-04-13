import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.posts.map( ( p,index ) => <Post key={index} message={p.message}/>);
    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({ type: 'ADD_POST' });
    }

    const onPostChange =()=> {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE_NEW_TEXT_POST', newText: text }
        props.dispatch(action);
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