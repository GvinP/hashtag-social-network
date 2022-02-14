import React from "react";
import myposts from "./MyPosts.module.css"
import Post from "./Post/Post";

type myPosptsProps = {
    posts: any
}

function MyPosts(props: myPosptsProps) {
    let post = [...props.posts.postsData];
    let posts = post.map((p) => <Post message={p.message}/>)
    return (
        <div className={myposts.content}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;