import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
      <div>
          My posts
          <div>
            <textarea name="" id="" cols="50" rows="5"></textarea>
			<button>Add post</button>
			<button>Remove</button>
          </div>
          <div className={s.posts}>
            <Post />
            <div className={s.item}>
              post 2
            </div>
			<div className={s.item}>
              post 3
            </div>
            <div className={s.item}>
              post 4
            </div>
			<div className={s.item}>
              post 5
            </div>
          </div>
        </div>
    )
}

export default MyPosts;