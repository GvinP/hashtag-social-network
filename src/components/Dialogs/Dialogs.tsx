import React from "react";
import Message from "./DialogItem/Messagge/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {dialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: dialogsPropsType) => {

    const messages = props.dialogPage.messageData.map((message) => <Message textMessage={message.message}
                                                                         id={message.id}/>)
    const dialogs = props.dialogPage.dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <textarea onChange={props.updateMessage} value={props.dialogPage.newMessage}></textarea>
                <button onClick={props.newMessage}>New message</button>
            </div>
        </div>
    );
}
export default Dialogs;