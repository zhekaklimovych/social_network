import Dialogs from './Dialogs';
import {sendMessage, updateNewMessageText} from '../../../redux/actions/dialogs_actions';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs));

export default DialogsContainer;