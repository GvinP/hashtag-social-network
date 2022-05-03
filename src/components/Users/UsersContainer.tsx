import {connect} from "react-redux";
import {follow, setCurrentPage, setLoader, setTotalCount, setUsers, user, usersPage} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/store";
import React from "react";
import {Users} from "./Users";
import {getUsers} from "../../api/api";

export type mapStateToPropsType = {
    usersPage: usersPage
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    setUsers: (users: Array<user>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (isLoading: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setLoader(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setLoader(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onClickPage(page: number) {
        this.props.setLoader(true)
        this.props.setCurrentPage(page)
        getUsers(page, this.props.pageSize).then(data => {
            this.props.setLoader(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <Users {...this.props}
                      follow={this.props.follow}
                      onClickPage={(page)=>this.onClickPage(page)}
        />
    }
}

 const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {follow, setUsers, setTotalCount, setCurrentPage, setLoader})(UsersContainer as any)