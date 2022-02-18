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
    newPost: any
}
export type _state = {
    dialogPage: dialogPage,
    postPage: postPage
}
export type storeType = {
    _state: _state,
    _callSubscriber(): void,
    getState(): void,
    addPost(postContent: string): void,
    updatePost(newText: string): void,
    updateMessage(newText: string): void,
    addMessage(messageContent: string): void,
    subscriber(observer: any): void
}

export let store: storeType = {
    _state: {
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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state changed");
    },
    subscriber(observer: any) {
        this._callSubscriber = observer;
    },
    addPost(postContent: string) {
        let newPost = {
            message: postContent,
            likes: 0
        }
        this._state.postPage.postsData.push(newPost)
        this._callSubscriber()
        this._state.postPage.newPost = ''
    },
    updatePost(newText: string) {
        this._state.postPage.newPost = newText;
        this._callSubscriber()
    },
    updateMessage(newText: string) {
        this._state.dialogPage.newMessage = newText;
        this._callSubscriber()
    },
    addMessage(messageContent: string) {
        let newMessage = {
            message: messageContent,
            id: 4
        }
        this._state.dialogPage.messageData.push(newMessage)
        this._callSubscriber()
        this._state.dialogPage.newMessage = ''
    }
}