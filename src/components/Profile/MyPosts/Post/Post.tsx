import React from "react";
import post from "./Post.module.css"

type postProps = {
    message: string
}

function Post (props: postProps) {
    return (
        <div className={post.content}>
            {props.message}
        </div>
    );
}

export default Post;