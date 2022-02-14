import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./DialogItem/Messagge/Message";


type dialogsProps = {
    dialogs: any
}
const Dialogs = (props: dialogsProps) => {
    let mes = [...props.dialogs.messageData]
    let diag = [...props.dialogs.dialogData]
    let messages = mes.map((message) => <Message textMessage={message.message} id={message.id}/>)
    let dialogs = diag.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/> )
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