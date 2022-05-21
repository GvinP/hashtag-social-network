import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_AUTH = "SET-AUTH"

export type AuthType = {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    // messages: Array<string | null>
    // fieldsErrors: Array<string | null>
    // resultCode: number | null
    isAuth: boolean
}

const authInitialStore: AuthType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    // messages: [null],
    // fieldsErrors: [null],
    // resultCode: null,
    isAuth: false,
}

export type authStoreType = typeof authInitialStore
export type setAuthDataActionType = ReturnType<typeof setAuthData>

export const setAuthData = (authData: AuthType, isAuth: boolean) => ({type: SET_AUTH, authData, isAuth}) as const
export const setAuthDataTC = () => (dispatch: Dispatch) => {
    authApi.authMe().then(data => {
        if (!data.resultCode) {
            dispatch(setAuthData(data, true))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authApi.login(email, password, rememberMe).then(data => {
        debugger
        if (!data.resultCode) {
            dispatch(setAuthData(data, true))
        }
    })
}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logout().then(data => {

        if (!data.resultCode) {
            dispatch(setAuthData({data:{id: null, login: null, email: null}, isAuth: false}, false))
        }
    })
}

const authReducer = (state = authInitialStore, action: setAuthDataActionType): authStoreType => {

    switch (action.type) {
        case SET_AUTH:
            return {...state, ...action.authData, isAuth: action.isAuth}
        default:
            return state
    }
}

export default authReducer;