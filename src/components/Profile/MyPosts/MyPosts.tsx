import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postPage} from "../../../redux/state";

type myPostsProps = {
    posts: postPage
    addPost: any,
    updatePost: any
}

function MyPosts(props: myPostsProps) {
    let newPostElement: any = React.createRef();
    let newPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updatePost(text)
    }
    let posts = props.posts.postsData.map((p) => <Post message={p.message}/>)
    return (
        <div className={s.content}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPost}></textarea>
                <button onClick={newPost}>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;