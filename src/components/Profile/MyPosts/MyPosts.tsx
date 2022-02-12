import React from "react";
import myposts from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={myposts.content}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="text1"/>
            <Post message="text2"/>
        </div>
    );
}

export default MyPosts;