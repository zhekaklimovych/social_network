import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs.map( (d, index) => {
    return <Dialog key={index} name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map( (m, index) => { 
    return <Message key={index} message={m.message} />
  });

  let newMessageElement = React.createRef();

  const onSendMessageClick = ()=> {
    props.sendMessage();
  }

  const onNewMessageChange = () => {
    let body = newMessageElement.current.value;
    props.updateNewMessageText(body);
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
          onChange={onNewMessageChange}
          placeholder='Enter message...' 
          value={state.newMessageText} 
        />
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;