import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type dialogProps = {
    name: string,
    id: number
}

const DialogItem = (props: dialogProps) => {
    return (
        <div className={s.messagesList}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;