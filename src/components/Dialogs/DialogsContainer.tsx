import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, dialogsInitialStateType} from "../../redux/dialogReducer";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/store";
import {withRouter} from "../Profile/withRouter";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

type mapStateToPropsType = {
    dialogPage: dialogsInitialStateType
}
type mapDispatchToPropsType = {
    newMessage: (newMessageText: string) => void
}

export type dialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        newMessage: (newMessageText: string) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

export default compose (
    withRouter,
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        mapDispatchToProps)
)(Dialogs)

