import {
    followActionType,
    setCurrentPageActionType, setFollowingProgressActionType,
    setLoaderActionType,
    setTotalCountActionType,
    setUsersActionType
} from "./usersReducer";
import {addMessageActionType} from "./dialogReducer";
import {addPostActionType, setProfileActionType, setStatusActionType} from "./profileReducer";
import {setAuthDataActionType} from "./authReducer";

export type allActionsType = followActionType | setUsersActionType
    | addMessageActionType | addPostActionType
    | setTotalCountActionType | setCurrentPageActionType
    | setLoaderActionType | setProfileActionType
    | setFollowingProgressActionType | setStatusActionType | setAuthDataActionType


//  type dialogData = {
//     name: string, id: number
// }
//  type messageData = {
//     message: string, id: number
// }
//  type postsData = {
//     message: string, likes: number
// }
//  type dialogPage = {
//     dialogData: Array<dialogData>,
//     messageData: Array<messageData>,
//     newMessage: string
// }
//  type postPage = {
//     postsData: Array<postsData>,
//     newPost: string
// }
//  type stateType = {
//     dialogPage: dialogPage,
//     postPage: postPage,
//     usersPage: usersPage
// }
// // export type storeType = {
// //     _state: stateType,
// //     _callSubscriber: () => void,
// //     getState: () => void,
// //     subscriber: (observer: number) => void,
// //     dispatch: (action: number) => void
// // }
// export type actionType = {
//     type: string
//     text?: string
// }
// // export let store: storeType = {
// //     _state: {
// //         dialogPage: {
// //             dialogData: [
// //                 {name: "First User", id: 1},
// //                 {name: "Second User", id: 2},
// //                 {name: "Third User", id: 3}
// //             ],
// //             messageData: [
// //                 {message: "First Message", id: 1},
// //                 {message: "Second Message", id: 2},
// //                 {message: "Third Message", id: 3}
// //             ],
// //             newMessage: ""
// //         },
// //         postPage: {
// //             postsData: [
// //                 {message: "First Post", likes: 11},
// //                 {message: "Second Post", likes: 22},
// //                 {message: "Third Post", likes: 33}
// //             ],
// //             newPost: ""
// //         },
// //     },
// //     getState() {
// //         return this._state;
// //     },
// //     _callSubscriber() {
// //         console.log("state changed");
// //     },
// //     subscriber(observer) {
// //         this._callSubscriber = observer;
// //     },
// //     dispatch(action) {
// //         profileReducer(this._state.postPage, action);
// //         dialogReducer(this._state.dialogPage, action);
// //         this._callSubscriber();
// //     }
// // }