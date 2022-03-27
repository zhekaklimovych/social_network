import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( (d, index) => {
        return <Dialog key={index} name={d.name} id={d.id} />;
    });
    let messagesElements = props.state.messages.map( (m, index) => { 
        return <Message key={index} message={m.message} />
    });

    return(
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;