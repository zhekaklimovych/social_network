import Dialogs from './Dialogs';
import {sendMessage, updateNewMessageText} from '../../../redux/actions/dialogs_actions';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;