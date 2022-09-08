import s from './Sidebar.module.css';
import SidebarItem from './SideBarItem/SidebarItem';

const Sidebar = (props) => {
    let usersElements = props.state.users.map((u, index) => {

        return (
            <SidebarItem
                key={index}
                userName={u.userName}
                status={u.status}
                url={u.url}
            />
        )
    });

    return (
        <div className={s.sidebarWrapper}>
            {usersElements}
        </div>
    )
}

export default Sidebar;