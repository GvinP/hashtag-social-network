import {allActionsType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"

export type dialogType = {
    name: string, id: number
}
export type messageType = {
    message: string, id: number
}

const dialogsInitialState = {
    dialogData: [
        {name: "First User", id: 1},
        {name: "Second User", id: 2},
        {name: "Third User", id: 3}
    ] as Array<dialogType>,
    messageData: [
        {message: "First Message", id: 1},
        {message: "Second Message", id: 2},
        {message: "Third Message", id: 3}
    ] as Array<messageType>,
    newMessage: ""
}

export type dialogsInitialStateType = typeof dialogsInitialState

export type addMessageActionType = {
    type: "ADD-MESSAGE"
}

export type updateMessageActionType = {
    type: "UPDATE-MESSAGE"
    text: string
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateMessageActionCreator = (text: string) => {
    return {
        type: UPDATE_MESSAGE,
        text: text
    }
}

const dialogReducer = (state = dialogsInitialState, action: allActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessage,
                id: 4
            }
            return {...state, messageData: [...state.messageData, newMessage], newMessage: ''}
        case UPDATE_MESSAGE:
            if (action.text) {
                return {...state, newMessage: action.text}
            }
    }
    return state;
}

export default dialogReducer;