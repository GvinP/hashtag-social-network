import React from "react";
import s from "./Message.module.css";

type messageProps = {
    textMessage: string,
    id: number
}

const Message = (props: messageProps) => {
    return (
        <div className={s.messagesItem}>
            <div>{props.textMessage}</div>
        </div>
    );
}

export default Message;