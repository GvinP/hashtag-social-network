import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
})

const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store;

// @ts-ignore
window.store = store
