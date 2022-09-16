import {Component, useEffect} from "react";
import { useParams,Navigate } from "react-router-dom";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserProfile} from "../../../redux/actions/profile_actions";
import {usersAPI} from "../../../api/api";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

// const ProfileContainerFunc = () => {
//
//     let {userId} = useParams();
//     if(!userId) {
//         userId = 2;
//     }
//
//     useEffect(()=> {
//         usersAPI.getProfile(userId);
//     }, [userId])
// }

class ProfileContainer extends Component {

    componentDidMount() {

        // let userId = this.props.match.params.userId;
        // if (!userId) {
           let userId = 2;
        // }
        usersAPI.getProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Navigate to={'/login'} />
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
export default compose(
    connect(mapsStateToProps, {getUserProfile}),
    withAuthRedirect
)(ProfileContainer);
