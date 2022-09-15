import {Component, useEffect} from "react";
import { useParams } from "react-router-dom";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserProfile} from "../../../redux/actions/profile_actions";
import {usersAPI} from "../../../api/api";


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
export default connect(mapsStateToProps, {getUserProfile})(ProfileContainer);