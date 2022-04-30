import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import axios from "axios";
import Header from "./Header";
import {AuthType, setAuthData} from "../../redux/authReducer";

export type mapStateToPropsType = {
    authData: AuthType
}


export type AuthDataPropsType = mapStateToPropsType

class HeaderContainer extends React.Component<any> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            this.props.setAuthData(response.data)
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