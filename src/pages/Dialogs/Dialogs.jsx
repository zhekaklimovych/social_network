import React from 'react';

import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d, index) => {
        return <Dialog key={index} name={d.name} id={d.id}/>;
    });

    let messagesElements = state.messages.map((m, index) => {
        return <Message key={index} message={m.message}/>
    });

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) return <Navigate to={"/login"} /> ;

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.addMessageContainer}>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;