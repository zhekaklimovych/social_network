import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://www.pinclipart.com/picdir/big/91-918525_react-logos-download-green-tree-logo-tree-logo.png'/>
            <p className={s.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </p>
        </header>
    )
}

export default Header;