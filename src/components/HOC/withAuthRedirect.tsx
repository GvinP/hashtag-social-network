import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

const WithAuthRedirect = (Component: any) => {
    const mapStateToProps = (state: AppStateType) => {
        return {isAuth: state.authData.isAuth}
    }
    const RedirectComponent = (props: any) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
};

export default WithAuthRedirect;