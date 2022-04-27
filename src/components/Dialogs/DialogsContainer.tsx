import {ChangeEvent} from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, dialogsInitialStateType, updateMessageActionCreator} from "../../redux/dialogReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/store";

type mapStateToPropsType = {
    dialogPage: dialogsInitialStateType
}
type mapDispatchToPropsType = {
    newMessage: () => void
    updateMessage: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export type dialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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

