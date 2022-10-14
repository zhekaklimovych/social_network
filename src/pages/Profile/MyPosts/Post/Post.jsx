import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Captain-America-icon.png"
                alt=""/>
            {props.message}
            <button className={s.like}>Like</button>
        </div>
    )
}

export default Post;