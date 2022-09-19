import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    // console.log('profileINFO', props)
    if(!props.profile) {
        return (
            <div className={s.profileInfo}>
                <div className={s.profileInfoLogo}>
                    <ProfileStatus status={'Hi my friends'}/>

                    <img src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png" alt="avatar"/>
                </div>

                <div className={s.profileInfoDesc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quam corrupti dolore officia dolores
                    aliquam culpa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quam corrupti dolore
                    officia dolores
                    aliquam culpa.
                </div>
            </div>
        )
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfoLogo}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <img src={props.profile.photos.large || "https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png"} alt="avatar"/>
            </div>

            <div className={s.profileInfoDesc}>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <hr/>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.github}</p>
                <p>{props.profile.contacts.twitter}</p>

            </div>
        </div>
    )
}

export default ProfileInfo;
