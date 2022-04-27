import style from "./Loader.module.css";
import React from "react";

export const Loader = () => {
    return (
        <div className={style.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}