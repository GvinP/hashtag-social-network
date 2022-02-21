import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer
})

const store = createStore(reducers)

export default store;