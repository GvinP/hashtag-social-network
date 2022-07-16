import React from "react";
import post from "./Post.module.css"
import postAvatar from "../../../../images/steve.png"

type postProps = {
    message: string
}

function Post(props: postProps) {
    return (
        <div className={post.postContainer}>
            <img src={postAvatar} className={post.postAvatar}/>
            <div className={post.content}>

                {props.message}
            </div>
        </div>

    );
}

export default Post;