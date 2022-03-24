import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog userName='Alex' id ='1' />
                <Dialog userName='Dave' id ='2' />
                <Dialog userName='Nick' id ='3' />
                <Dialog userName='John' id ='4' />
            </div>
            <div className={s.messages}>
                <Message message='hello'/>
                <Message message='how are u?'/>
                <Message message='Yo'/>
                <Message message='Hehe'/>
            </div>
        </div>
    )
}

export default Dialogs;