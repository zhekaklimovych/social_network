import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="http://avatars.mitosa.net/monsterinc/avatar116.jpg" alt="" />
            {props.message}
            <button className={s.like}>Like</button>
      </div>
    )
}

export default Post;