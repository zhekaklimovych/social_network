import s from '../Sidebar.module.css';

const SidebarItem = (props) => {

    return(
        <div className={s.sidebarItem}>
            <img src={props.url} alt="" />
            <div className={s.sidebarUser}>
                <span className={s.sidebarUserName}>{props.userName}</span>
                <span className={s.sidebarUserStatus}>{props.status}</span>
            </div>
        </div>
    )
}

export default SidebarItem;