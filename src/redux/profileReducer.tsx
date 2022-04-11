import {actionType, postPage} from "./state";

const addPost = "ADD-POST"
const updatePost = "UPDATE-POST"

const initialStore: postPage = {
    postsData: [
        {message: "First Post", likes: 11},
        {message: "Second Post", likes: 22},
        {message: "Third Post", likes: 33}
    ],
        newPost: ""
}

const profileReducer = (state = initialStore, action: actionType) => {
    let stateCopy = {}
    switch (action.type) {
        case addPost:
            let newPost = {
                message: state.newPost,
                likes: 0
            }
            stateCopy = {...state, postsData: [newPost, ...state.postsData], newPost: ''}
            return stateCopy;
        case updatePost:
            if (action.text) {
                stateCopy = {...state, newPost: action.text}
            }
            return stateCopy;
    }
    return state;
}

export default profileReducer;