import {Component} from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/actions/profile_actions";

class ProfileContainer extends Component {

    componentDidMount() {

        // let userId = this.props.match.params.userId;
        // if (!userId) {
            let userId = '631b1167c540d5c96b157b94';
        // }

        axios.get(`http://localhost:3002/api/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapsStateToProps, {setUserProfile})(ProfileContainer);