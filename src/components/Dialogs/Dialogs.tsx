import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./DialogItem/Messagge/Message";
import {addMessageActionCreator, dialogPage, updateMessageActionCreator} from "../../redux/state";


type dialogsProps = {
    dialogs: dialogPage,
    dispatch(action: any): void
}

const Dialogs = (props: dialogsProps) => {
    let messages = props.dialogs.messageData.map((message) => <Message textMessage={message.message} id={message.id}/>)
    let dialogs = props.dialogs.dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let newMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)

    }
    let updateMessage = (event: any) => {

        let newTextMessage = event.target.value
        let action = updateMessageActionCreator(newTextMessage)
        props.dispatch(action)


    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <textarea onChange={updateMessage} value={props.dialogs.newMessage}></textarea>
                <button onClick={newMessage}>New message</button>
            </div>
        </div>
    );
}

export default Dialogs;