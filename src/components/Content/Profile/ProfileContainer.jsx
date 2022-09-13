import {Component} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as axios from "axios";
import {connect} from "react-redux";

import Profile from "./Profile";
import {setUserProfile} from "../../../redux/actions/profile_actions";

const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends Component {

    // componentDidMount() {
    //
    //     let userId = this.props.match.params.userId;
    //     if (!userId) {
    //        userId = 2;
    //     }
    //
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users/` + userId)
    //         .then(response => {
    //             this.props.setUserProfile(response.data);
    //         });
    // }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

let mapsStateToProps = (state)=> {
    return {
        profile: state.profilePage.profile
    }
}
export default connect(mapsStateToProps, {setUserProfile})(withRouter(ProfileContainer));