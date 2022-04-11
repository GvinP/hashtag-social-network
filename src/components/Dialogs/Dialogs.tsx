import {dialogPage} from "../../redux/state";
import React, {ChangeEvent} from "react";
import Message from "./DialogItem/Messagge/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

type dialogsPropsType = {
    dialogs: dialogPage,
    newMessage: () => void
    updateMessage: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
const Dialogs = (props: dialogsPropsType) => {

    const messages = props.dialogs.messageData.map((message) => <Message textMessage={message.message}
                                                                         id={message.id}/>)
    const dialogs = props.dialogs.dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <textarea onChange={props.updateMessage} value={props.dialogs.newMessage}></textarea>
                <button onClick={props.newMessage}>New message</button>
            </div>
        </div>
    );
}
export default Dialogs;