import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <div className={s.dialogsItem}>Obi Van</div>
                <div className={s.dialogsItem}>Yoda</div>
                <div className={s.dialogsItem}>Chewbacca</div>
            </div>
            <div className={s.messagesList}>
                <div className={s.messagesItem}>Hi</div>
                <div className={s.messagesItem}>How are you doind?</div>
                <div className={s.messagesItem}>Third messege</div>
            </div>
        </div>
    );
}

export default Dialogs;