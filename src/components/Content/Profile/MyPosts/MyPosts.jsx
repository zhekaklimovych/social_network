import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    return(
        <div className={s.posts_wrapper}>
            <h2 className={s.title}>My posts</h2>
            <div>
                <textarea placeholder='Enter message...'></textarea>
                <button className={s.send}>Send</button>
            </div>
            <div className={s.posts}>
                <Post message = 'Hello, my first post!'/>
                <Post message = 'And my too!'/>
            </div>
        </div>
    )
}

export default MyPosts;