import { useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile} from "../../../redux/actions/profile_actions";

import Profile from "./Profile";

const ProfileContainer = () => {

    let {userId} = useParams();
    if(!userId) userId = 2;

    const profile = useSelector(state => state.profilePage.profile);
    const status = useSelector(state => state.profilePage.status);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
    }, [userId]);

    return <Profile profile={profile} status={status} />
}

export default ProfileContainer;

