import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, user, usersActionType} from "../../redux/usersReducer";
import {stateType} from "../../redux/state";

const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: (action: usersActionType) => void) => {
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

