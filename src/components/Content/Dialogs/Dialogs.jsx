import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div>
                <Dialog name='Alex' id ='1' />
                <Dialog name='Dave' id ='2' />
                <Dialog name='Nick' id ='3' />
                <Dialog name='John' id ='4' />
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