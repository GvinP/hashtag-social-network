import React, {ChangeEvent} from "react";
import {actionType, addMessageActionCreator, stateType, updateMessageActionCreator} from "../../redux/state";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: stateType) => {
    return {
        dialogs: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        newMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateMessageActionCreator(event.target.value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

