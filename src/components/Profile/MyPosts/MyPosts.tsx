import {postPage} from "../../../redux/state";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";

type myPostsPropsType = {
    posts: postPage
    newPost: () => void
    onPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const MyPosts = (props: myPostsPropsType) => {
    let posts = props.posts.postsData.map((p) => <Post message={p.message}/>)
    return (
        <div className={s.content}>
            <div>
                <textarea onChange={props.onPostChange} value={props.posts.newPost}></textarea>
                <button onClick={props.newPost}>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;