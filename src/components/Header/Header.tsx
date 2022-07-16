import React from "react";
import logo from "../../images/hashtag-sn.png";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/authReducer";
import defaultAvatar from "../../images/user.svg"
import {useAppSelector} from "../../redux/store";

export type HeaderPropsType = {
    authData: AuthType
    setAuthDataTC: () => void
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    const {small} = useAppSelector(state => state.profilePage.profile.photos)

    return (
        <header className={style.header}>
            <img src={logo} width={196} height={52} alt="logo"/>
            <div>
                {props.authData.isAuth ?
                    <div className={style.container}>
                        <img src={small||defaultAvatar} className={style.avatar}/>
                        <span className={style.login}>{props.authData.data.login}</span>
                        <button onClick={props.logout} className={style.logoutButton}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
