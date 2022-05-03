import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import Header from "./Header";
import {AuthType, setAuthData} from "../../redux/authReducer";
import {authMe} from "../../api/api";

export type mapStateToPropsType = {
    authData: AuthType
}

export type mapDispatchToPropsType = {
    setAuthData: (data: void) => void
}

export type AuthDataPropsType = mapStateToPropsType&mapDispatchToPropsType

class HeaderContainer extends React.Component<AuthDataPropsType> {
    componentDidMount() {
        authMe().then(data => {
            this.props.setAuthData(data)
        })
    }

    render() {
        return <Header {...this.props.authData}/>
    }
}

 const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        authData: state.authData
    }
}


export default connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps,
    {setAuthData})(HeaderContainer as any)