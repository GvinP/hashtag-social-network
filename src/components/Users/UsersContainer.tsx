import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setLoaderAC,
    setTotalCountAC,
    setUsersAC,
    user,
    usersPage
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export type mapStateToPropsType = {
    usersPage: usersPage
    totalCount: number
    pageSize: number
    currentPage: number
}
export type mapDispatchToPropsType = {
    followed: (userId: number) => void
    setUsers: (users: Array<user>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (isLoading: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setLoader(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onClickPage(page: number) {
        this.props.setLoader(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setLoader(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users usersPage={this.props.usersPage}
                      followed={this.props.followed}
                      onClickPage={(page)=>this.onClickPage(page)}
        />
    }
}

 const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
 const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followed: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: Array<user>) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setLoader: (isLoading: boolean) => {
            dispatch(setLoaderAC(isLoading))
        }
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer as any)