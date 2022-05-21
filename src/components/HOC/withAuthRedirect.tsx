import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {isAuth: state.authData.isAuth}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to="/login"/>
//@ts-ignore
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}