import {connect} from "react-redux";
import {
    followTC,
    getUsers,
    setCurrentPage,
    setFollowingProgress,
    setLoader,
    setTotalCount,
    unfollowTC,
    usersPage
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/store";
import React from "react";
import {Users} from "./Users";
import {compose} from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";

export type mapStateToPropsType = {
    usersPage: usersPage
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    followingProgress: Array<number>
}
export type mapDispatchToPropsType = {
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    setLoader: (isLoading: boolean) => void
    setFollowingProgress: (follow: boolean, id: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickPage(page: number) {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <Users {...this.props}
                      followTC={this.props.followTC}
                      unfollowTC={this.props.unfollowTC}
                      onClickPage={(page) => this.onClickPage(page)}
        />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingProgress: state.usersPage.followingProgress,
    }
}

export default compose (
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {followTC, unfollowTC, getUsers, setTotalCount, setCurrentPage, setLoader, setFollowingProgress})
)(UsersContainer)
