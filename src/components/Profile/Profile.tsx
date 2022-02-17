import React from "react";
import profile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {postsData, updatePost} from "../../redux/state";

type profileProps = {
    posts: {
        postsData: Array<postsData>,
        newPost: string
}
    addPost: any,
    updatePost: any
}

const Profile = (props: profileProps) => {
    return (
        <div className={profile.content}>
            <div>
                <img width={60} src='https://mobimg.b-cdn.net/v3/fetch/16/162162e62dd1166239149cae60f30252.jpeg' alt="avatar"/>
                <p>My name</p>
            </div>
            <MyPosts posts={props.posts} addPost={props.addPost} updatePost={props.updatePost}/>
        </div>
    );
}

export default Profile;