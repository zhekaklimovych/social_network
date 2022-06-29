import Dialogs from './Dialogs';
import { sendMessageAC, updateNewMessageTextAC } from '../../../redux/actions/dialogs_actions';
import { connect } from 'react-redux';

let mapStateToProps = (state)=> {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch)=> {
  return {
    sendMessage: ()=> {
      dispatch(sendMessageAC());
    },
    updateNewMessageText: (text)=> {
      dispatch(updateNewMessageTextAC(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;