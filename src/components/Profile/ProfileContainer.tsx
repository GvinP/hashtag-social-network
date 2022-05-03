import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import {Profile} from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "./withRouter";
import {getUserProfile} from "../../api/api";

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
        if (!userId) {
            userId = 23432
        }
        getUserProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
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