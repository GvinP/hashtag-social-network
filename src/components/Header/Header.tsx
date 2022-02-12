import React from "react";
import logo from "../../logo.svg";
import head from "./Header.module.css"

function Header() {
    return (
        <header className={head.header}>
            <img src={logo} width={60} height={60} alt="logo"/>
        </header>
    );
}

export default Header;