import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import {Profile} from "./Profile";
import {getUserProfile, getUserStatus, ProfileType} from "../../redux/profileReducer";
import {withRouter} from "./withRouter";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

export type mapStateToPropsType = {
    profile: ProfileType
    status: string
}
export type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.router.params['*']
        if (!userId) {
            userId = 23432
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose (
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {getUserProfile, getUserStatus}),
    withAuthRedirect
)(ProfileContainer)

