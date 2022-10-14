import {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (ReactComponent) => {

    class RedirectComponent extends Component {
        render() {
            if(!this.props.isAuth) return <Navigate to={'/login'} />;

            return <ReactComponent {...this.props} />;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}