import {allActionsType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"

type postData = {
    message: string, likes: number
}

const profileInitialStore = {
    postsData: [
        {message: "First Post", likes: 11},
        {message: "Second Post", likes: 22},
        {message: "Third Post", likes: 33}
    ] as Array<postData>,
        newPost: ""
}

export type profileInitialStoreType = typeof profileInitialStore

export type addPostActionType = {
    type: "ADD-POST"
}

export type updatePostActionType = {
    type: "UPDATE-POST"
    text: string
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostActionCreator = (text: string) => {
    return {
        type: UPDATE_POST,
        text: text
    }
}

const profileReducer = (state = profileInitialStore, action: allActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPost,
                likes: 0
            }
            return {...state, postsData: [newPost, ...state.postsData], newPost: ''}
        case UPDATE_POST:
            if (action.text) {
                return {...state, newPost: action.text}
            }
    }
    return state;
}

export default profileReducer;