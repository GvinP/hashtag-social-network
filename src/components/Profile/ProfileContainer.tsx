import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import { withRouter } from "./withRouter";

export type mapStateToPropsType = {
    profile: ProfileType
}
export type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any> {
    componentDidMount() {

        let userId = this.props.router.params['*']
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} />
    }
}

 const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {setUserProfile})(WithUrlDataContainerComponent)