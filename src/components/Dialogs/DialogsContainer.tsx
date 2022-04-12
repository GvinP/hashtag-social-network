import React, {ChangeEvent} from "react";
import {actionType, stateType} from "../../redux/state";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogReducer";

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

