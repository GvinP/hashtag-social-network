import {allActionsType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"

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
}

export type dialogsInitialStateType = typeof dialogsInitialState

export type addMessageActionType = {
    type: "ADD-MESSAGE"
    newMessageText: string
}


export const addMessageActionCreator = (newMessageText: string): addMessageActionType => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}

const dialogReducer = (state = dialogsInitialState, action: allActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: action.newMessageText,
                id: 4
            }
            return {...state, messageData: [...state.messageData, newMessage], newMessage: ''}
        default:
            return state
    }
}

export default dialogReducer;