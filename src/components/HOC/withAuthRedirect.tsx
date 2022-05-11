import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {isAuth: state.authData.isAuth}
}

const WithAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: MapStateToPropsType) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
};

export default WithAuthRedirect;