import {allActionsType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"
const SET_PROFILE = "SET-PROFILE"

type postData = {
    message: string, likes: number
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

const profileInitialStore = {
    profile: {} as ProfileType,
    postsData: [
        {message: "First Post", likes: 11},
        {message: "Second Post", likes: 22},
        {message: "Third Post", likes: 33}
    ] as Array<postData>,
    newPost: ""
}

export type profileStoreType = typeof profileInitialStore

export type addPostActionType = {
    type: "ADD-POST"
}
export type updatePostActionType = {
    type: "UPDATE-POST"
    text: string
}
export type setProfileActionType = {
    type: "SET-PROFILE"
    profile: ProfileType
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}
export const updatePost = (text: string) => {
    return {
        type: UPDATE_POST,
        text: text
    }
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_PROFILE,
        profile
    }
}

const profileReducer = (state = profileInitialStore, action: allActionsType): profileStoreType => {

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
            return state
        case SET_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export default profileReducer;