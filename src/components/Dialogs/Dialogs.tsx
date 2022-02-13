import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./DialogItem/Messagge/Message";


type dialogsProps = {
    messages: any,
    dialogs: any
}
const Dialogs = (props: dialogsProps) => {
    let mes = [...props.messages]
    let dial = [...props.dialogs]
    let messages = mes.map((message) => <Message textMessage={message.message} id={message.id}/>)
    let dialogs = dial.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/> )
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;