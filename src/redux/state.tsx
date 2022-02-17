import {renderTree} from "./render";

export type dialogData = {
    name: string, id: number
}
export type messageData = {
    message: string, id: number
}
export type postsData = {
    message: string, likes: number
}

export type state = {
    dialogPage: {
        dialogData: Array<dialogData>,
        messageData: Array<messageData>,
        newMessage: string
    },
    postPage: {
        postsData: Array<postsData>,
        newPost: string
    }
}

export let state: state = {
    dialogPage: {
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
    },
    postPage: {
        postsData: [
            {message: "First Post", likes: 11},
            {message: "Second Post", likes: 22},
            {message: "Third Post", likes: 33}
        ],
        newPost: ""
    }
}

export let addPost = (postContent: string) => {
    let newPost = {
        message: postContent,
        likes: 0
    }
    state.postPage.postsData.push(newPost)
    renderTree(state, addPost, addMessage, updatePost, updateMessage)
    state.postPage.newPost = ''
}
export let updatePost = (newText: string) => {
    state.postPage.newPost = newText;
    renderTree(state, addPost, addMessage, updatePost, updateMessage)
}
export let updateMessage = (newText: string) => {
    state.dialogPage.newMessage = newText;
    renderTree(state, addPost, addMessage, updatePost, updateMessage)
}

export let addMessage = (messageContent: string) => {
    let newMessage = {
        message: messageContent,
        id: 4
    }
    state.dialogPage.messageData.push(newMessage)
    renderTree(state, addPost, addMessage, updatePost, updateMessage)
    state.dialogPage.newMessage = ''
}