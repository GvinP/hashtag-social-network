import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
})

const store = createStore(reducers)

export default store;
