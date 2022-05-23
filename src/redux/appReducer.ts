import {setAuthDataTC} from "./authReducer"
import {Dispatch} from "redux";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitialStateType = typeof initialState
const initialState = {
    initialized: false
}
export const appReducer = (state: InitialStateType = initialState, action: AppActionsReducerType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}
type InitializedAT = ReturnType<typeof initializedAC>
export type AppActionsReducerType = InitializedAT

export const initializedAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializedApp = () => (dispatch: Dispatch) => {
    debugger
    //@ts-ignore
   let promise = dispatch(setAuthDataTC())
promise.then(()=>{
    dispatch(initializedAC())
})


}