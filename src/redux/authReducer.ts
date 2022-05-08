import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_AUTH = "SET-AUTH"

export type AuthType = {
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    messages: Array<string | null>
    fieldsErrors: Array<string | null>
    resultCode: number | null
}

const authInitialStore: AuthType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    messages: [null],
    fieldsErrors: [null],
    resultCode: null,
}

export type authStoreType = typeof authInitialStore
export type setAuthDataActionType = ReturnType<typeof setAuthData>

export const setAuthData = (authData: AuthType) => ({type: SET_AUTH, authData}) as const
export const setAuthDataTC =()=> (dispatch: Dispatch)=>{
    authApi.authMe().then(data => {
        dispatch(setAuthData(data))
    })
}



const authReducer = (state = authInitialStore, action: setAuthDataActionType): authStoreType => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, ...action.authData}
        default:
            return state
    }
}

export default authReducer;