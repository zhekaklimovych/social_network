import s from './Dialog.module.css';

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
            {props.userName}
        </div>
    )
}

export default Dialog;