import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    authData: authReducer,
})

const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store;

// @ts-ignore
window.store = store
