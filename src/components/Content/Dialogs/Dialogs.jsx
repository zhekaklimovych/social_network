import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogsReducer';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( (d, index) => {
        return <Dialog key={index} name={d.name} id={d.id} />;
    });

    let messagesElements = props.dialogsPage.messages.map( (m, index) => { 
        return <Message key={index} message={m.message} />
    });

    let newMessageElement = React.createRef();

    const addMessage = ()=> {
        props.dispatch(sendMessageActionCreator());
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return(
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.addMessageContainer}>
                <textarea 
                    ref={newMessageElement} 
                    onChange={onMessageChange}
                    placeholder='Enter message...' 
                    value={props.dialogsPage.newMessageText} 
                />
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;