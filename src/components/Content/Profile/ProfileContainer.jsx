import { useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile} from "../../../redux/actions/profile_actions";

import Profile from "./Profile";

const ProfileContainer = () => {

    let {userId} = useParams();
    const profile = useSelector(state => state.profilePage.profile);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getUserProfile(userId));
    }, [userId]);

    return <Profile profile={profile}/>
}

export default ProfileContainer;

