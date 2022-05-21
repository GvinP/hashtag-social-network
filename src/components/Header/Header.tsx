import React from "react";
import logo from "../../logo.svg";
import style from "./Header.module.css"
import {Navigate, NavLink} from "react-router-dom";
import {AuthType} from "../../redux/authReducer";

export type HeaderPropsType = {
    authData: AuthType
    setAuthDataTC: () => void
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={style.header}>
            <img src={logo} width={60} height={60} alt="logo"/>
            <div>
                {props.authData.isAuth ?
                    <>
                        <span>{props.authData.data.login}</span>
                        <button onClick={props.logout}>Logout</button>
                        {/*<Navigate to={'/profile'}/>*/}
                    </>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
