import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

function Navigation () {
    return (
        <nav className={s.navigation}>
            <div><NavLink to="/profile" className={data => data.isActive ? s.active : s.link}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={data => data.isActive ? s.active : s.link}>Messages</NavLink></div>
            <div><NavLink to="/users" className={data => data.isActive ? s.active : s.link}>Users</NavLink></div>
            <div><NavLink to="/news" className={data => data.isActive ? s.active : s.link}>News</NavLink></div>
            <div><NavLink to="/music" className={data => data.isActive ? s.active : s.link}>Music</NavLink></div>
            <div><NavLink to="/settings" className={data => data.isActive ? s.active : s.link}>Settings</NavLink></div>
        </nav>
    );
}


export default Navigation;