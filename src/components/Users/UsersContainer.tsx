import {connect} from "react-redux";
import {followAC, setUsersAC, user, usersPage} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxState";
import Users from "./Users";
import UsersC from "./UsersC";

export type mapStateToPropsType = {
    usersPage: usersPage
}
export type mapDispatchToPropsType = {
    followed: (userId: number) => void
    setUsers: (users: Array<user>) => void
}

export type usersPropsType = mapStateToPropsType & mapDispatchToPropsType


export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
export const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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

