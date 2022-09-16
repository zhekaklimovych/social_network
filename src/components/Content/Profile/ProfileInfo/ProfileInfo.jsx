import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfoLogo}>
                <ProfileStatus status={'Hi my friends'}/>

                <img src="https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/11.png" alt=""/>
            </div>

            <div className={s.profileInfoDesc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quam corrupti dolore officia dolores
                aliquam culpa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quam corrupti dolore
                officia dolores
                aliquam culpa.
            </div>
            {/*<p>{props.profile.aboutMe}</p>*/}
            {/*<p>{props.profile.fullName}</p>*/}
        </div>
    )
}

export default ProfileInfo;
