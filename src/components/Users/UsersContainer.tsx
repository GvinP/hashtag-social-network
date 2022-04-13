import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, user, usersPage} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxState";

type mapStateToPropsType = {
    usersPage: usersPage
}
type mapDispatchToPropsType = {
    followed: (userId: number) => void
    setUsers: (users: Array<user>) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followed: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: Array<user>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

