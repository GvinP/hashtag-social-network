import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import Header from "./Header";
import {AuthType, setAuthDataTC} from "../../redux/authReducer";

export type mapStateToPropsType = {
    authData: AuthType
}

export type mapDispatchToPropsType = {
    setAuthDataTC: () => void
}

export type AuthDataPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<AuthDataPropsType> {
    componentDidMount() {
        this.props.setAuthDataTC()
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
    {setAuthDataTC})(HeaderContainer as any)