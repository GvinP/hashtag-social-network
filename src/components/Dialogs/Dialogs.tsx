import React from "react";
import Message from "./DialogItem/Messagge/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {dialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Dialogs = (props: dialogsPropsType) => {

    const messages = props.dialogPage.messageData.map((message) => <Message key={message.id} textMessage={message.message}
                                                                         id={message.id}/>)
    const dialogs = props.dialogPage.dialogData.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    const addNewMessage = (values: any) => {
        props.newMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.form}>
        <Field component={'textarea'} name={'newMessageText'} placeholder={'Enter your message'} className={s.input}/>
        <button className={s.button}>Add post</button>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'newMessageText'
})(AddMessageForm)
export default Dialogs;