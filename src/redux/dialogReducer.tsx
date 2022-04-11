import {actionType, dialogPage} from "./state";

const addMessage = "ADD-MESSAGE"
const updateMessage = "UPDATE-MESSAGE"

const initialStore: dialogPage = {
    dialogData: [
        {name: "First User", id: 1},
        {name: "Second User", id: 2},
        {name: "Third User", id: 3}
    ],
    messageData: [
        {message: "First Message", id: 1},
        {message: "Second Message", id: 2},
        {message: "Third Message", id: 3}
    ],
    newMessage: ""
}

const dialogReducer = (state = initialStore, action: actionType) => {
    let stateCopy = {}
    switch (action.type) {
        case addMessage:
            let newMessage = {
                message: state.newMessage,
                id: 4
            }
            stateCopy = {...state, messageData: [...state.messageData, newMessage], newMessage: ''}
            return stateCopy;
        case updateMessage:
            if (action.text) {
                stateCopy = {...state, newMessage: action.text}
            }
            return stateCopy;
    }
    return state;
}

export default dialogReducer;