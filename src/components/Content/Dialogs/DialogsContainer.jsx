import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogsReducer';

const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    const onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return(
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;