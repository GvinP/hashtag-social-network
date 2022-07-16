import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    authData: authReducer,
    app: appReducer,
    form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export default store;

// @ts-ignore
window.store = store
