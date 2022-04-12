import {actionType, postPage} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_POST = "UPDATE-POST"

const initialStore: postPage = {
    postsData: [
        {message: "First Post", likes: 11},
        {message: "Second Post", likes: 22},
        {message: "Third Post", likes: 33}
    ],
        newPost: ""
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

const profileReducer = (state = initialStore, action: actionType) => {
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