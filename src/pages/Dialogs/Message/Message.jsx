import s from './Message.module.css';

const Message = (props) => <div className={s.message}> {props.message}</div>

export default Message;