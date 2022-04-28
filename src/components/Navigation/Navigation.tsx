import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

function Navigation () {
    return (
        <nav className={s.navigation}>
            <div><NavLink to="/profile" className={data => data.isActive ? s.active : s.link}>Profile</NavLink></div>
            <div><NavLink to="/Dialogs" className={data => data.isActive ? s.active : s.link}>Messages</NavLink></div>
            <div><NavLink to="/Users" className={data => data.isActive ? s.active : s.link}>Users</NavLink></div>
            <div><NavLink to="/News" className={data => data.isActive ? s.active : s.link}>News</NavLink></div>
            <div><NavLink to="/Music" className={data => data.isActive ? s.active : s.link}>Music</NavLink></div>
            <div><NavLink to="/Settings" className={data => data.isActive ? s.active : s.link}>Settings</NavLink></div>
        </nav>
    );
}


export default Navigation;