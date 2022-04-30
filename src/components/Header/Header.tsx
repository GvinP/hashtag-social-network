import React from "react";
import logo from "../../logo.svg";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/authReducer";

function Header(props: AuthType) {

    return (
        <header className={style.header}>
            <img src={logo} width={60} height={60} alt="logo"/>
            <div>
                {props.resultCode === 0 ?
                    <>
                        <span>{props.data.login}</span>
                        <NavLink to={'/login'}>Logout</NavLink>
                    </>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;