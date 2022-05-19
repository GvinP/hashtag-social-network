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
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <AddMessageFormRedux/>
            </div>
        </div>
    );
}

export const AddMessageForm: React.FC<InjectedFormProps> = () => {
    return <form>
        <Field component={'textarea'} name={'newMessageText'} placeholder={'Enter your message'}/>
        <button>Add post</button>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'newPostText'
})(AddMessageForm)
export default Dialogs;