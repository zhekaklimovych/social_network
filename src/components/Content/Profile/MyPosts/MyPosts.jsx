import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.state.posts.map( ( p,index ) => <Post key={index} message={p.message}/>);

    return(
        <div className={s.posts_wrapper}>
            <h2 className={s.title}>My posts</h2>
            <div>
                <textarea placeholder='Enter message...'></textarea>
                <button className={s.send}>Send</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;