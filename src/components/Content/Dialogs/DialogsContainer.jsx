import Dialogs from './Dialogs';
import {sendMessage, updateNewMessageText} from '../../../redux/actions/dialogs_actions';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageText}),
    withAuthRedirect
)(Dialogs);
