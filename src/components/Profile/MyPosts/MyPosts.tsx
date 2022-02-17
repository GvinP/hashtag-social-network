import React from "react";
import myposts from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postsData, updatePost} from "../../../redux/state";

type myPosptsProps = {
    posts:{
        postsData: Array<postsData>,
        newPost: string
    }
    addPost: any,
    updatePost: any
}

function MyPosts(props: myPosptsProps) {
    let newPostElement: any = React.createRef();
    let newPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }
    let onNewPost = () => {
        let text = newPostElement.current.value
        props.updatePost(text)
    }
    let posts = props.posts.postsData.map((p) => <Post message={p.message}/>)
    return (
        <div className={myposts.content}>
            <div>
                <textarea onChange={onNewPost} ref={newPostElement} value={props.posts.newPost}></textarea>
                <button onClick={newPost}>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;