export type dialogData = {
    name: string, id: number
}
export type messageData = {
    message: string, id: number
}
export type postsData = {
    message: string, likes: number
}
export type dialogPage = {
    dialogData: Array<dialogData>,
    messageData: Array<messageData>,
    newMessage: string
}
export type postPage = {
    postsData: Array<postsData>,
    newPost: string
}
export type _state = {
    dialogPage: dialogPage,
    postPage: postPage
}
export type storeType = {
    _state: _state,
    _callSubscriber: () => void,
    getState: () => void,
    subscriber: (observer: number) => void,
    dispatch: (action: number) => void
}
export type actionType = {
    type: string
    text: string
}
const addPost = "ADD-POST"
const updatePost = "UPDATE-POST"
const addMessage = "ADD-MESSAGE"
const updateMessage = "UPDATE-MESSAGE"
// export let store: storeType = {
//     _state: {
//         dialogPage: {
//             dialogData: [
//                 {name: "First User", id: 1},
//                 {name: "Second User", id: 2},
//                 {name: "Third User", id: 3}
//             ],
//             messageData: [
//                 {message: "First Message", id: 1},
//                 {message: "Second Message", id: 2},
//                 {message: "Third Message", id: 3}
//             ],
//             newMessage: ""
//         },
//         postPage: {
//             postsData: [
//                 {message: "First Post", likes: 11},
//                 {message: "Second Post", likes: 22},
//                 {message: "Third Post", likes: 33}
//             ],
//             newPost: ""
//         },
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log("state changed");
//     },
//     subscriber(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         profileReducer(this._state.postPage, action);
//         dialogReducer(this._state.dialogPage, action);
//         this._callSubscriber();
//     }
// }
export const addPostActionCreator = () => {
    return {
        type: addPost
    }
}
export const updatePostActionCreator = (text: string) => {
    return {
        type: updatePost,
        text: text
    }
}
export const addMessageActionCreator = () => {
    return {
        type: addMessage
    }
}
export const updateMessageActionCreator = (text: string) => {
    return {
        type: updateMessage,
        text: text
    }
}