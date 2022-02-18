import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./DialogItem/Messagge/Message";
import {dialogPage} from "../../redux/state";


type dialogsProps = {
    dialogs: dialogPage,
    addMessage(messageContent: string): void,
    updateMessage(newText: string): void
}

const Dialogs = (props: dialogsProps) => {
    let messages = props.dialogs.messageData.map((message) => <Message textMessage={message.message} id={message.id}/>)
    let dialogs = props.dialogs.dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let newMessageRef: any = React.createRef();
    let newMessage = () => {
        props.addMessage(newMessageRef.current.value)
        newMessageRef.current.value = ''
    }
    let updateMessage = () => {
        let newTextMessage = newMessageRef.current.value
        props.updateMessage(newTextMessage)
    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <textarea onChange={updateMessage} ref={newMessageRef} value={props.dialogs.newMessage}></textarea>
                <button onClick={newMessage}>New message</button>
            </div>
        </div>
    );
}

export default Dialogs;