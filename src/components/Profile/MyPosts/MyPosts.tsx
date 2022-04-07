import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, postPage, updatePostActionCreator} from "../../../redux/state";

type myPostsProps = {
    posts: postPage
    dispatch(action: any): void
}

function MyPosts(props: myPostsProps) {
    let newPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }
    let onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        let action = updatePostActionCreator(text)
        props.dispatch(action)
    }
    let posts = props.posts.postsData.map((p) => <Post message={p.message}/>)
    return (
        <div className={s.content}>
            <div>
                <textarea onChange={onPostChange} value={props.posts.newPost}></textarea>
                <button onClick={newPost}>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;