import {postPage} from "./state";

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

const profileReducer = (state = initialStore, action: any) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                message: state.newPost,
                likes: 0
            }
            state.postsData.push(newPost)
            state.newPost = '';
            return state;
        case updatePost:
            state.newPost = action.text;
            return state;
    }
    return state;
}

export default profileReducer;