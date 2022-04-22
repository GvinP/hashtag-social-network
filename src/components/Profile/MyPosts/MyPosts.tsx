import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import {myPostsPropsType} from "./MyPostsContainer";


const MyPosts = (props: myPostsPropsType) => {
    let posts = props.posts.postsData.map((p,index) => <Post key={index} message={p.message}/>)
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