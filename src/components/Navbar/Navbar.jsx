import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/' className = { navData => navData.isActive ? s.active : s.a }>
                    Home
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.a }>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.a }>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.a }>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.a }>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.a }>
                    Settings
                </NavLink>
            </div>
      </nav>
    )
}

export default Navbar;